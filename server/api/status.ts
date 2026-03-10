export default defineEventHandler(async (event) => {
  const env = event.context.cloudflare?.env
  
  if (!env || !env.status_db) {
    // If we're not on Cloudflare (e.g. local dev without --remote), 
    // we could fallback to the external API or return an error.
    return { services: [], incidents: [], error: 'D1 binding not found' }
  }

  const db = env.status_db as D1Database

  // 1. Query latest status for each service
  const statusQuery = `
    SELECT s.name, s.url, h.status, h.latency_ms, h.status_code, h.timestamp
    FROM services s
    LEFT JOIN (
      SELECT service_id, status, latency_ms, status_code, timestamp
      FROM health_checks
      WHERE id IN (SELECT MAX(id) FROM health_checks GROUP BY service_id)
    ) h ON s.id = h.service_id
  `
  const { results: serviceStatuses } = await db.prepare(statusQuery).all()

  // 2. Get history for each service (last 30 dots)
  const historyQuery = `
    SELECT * FROM (
      SELECT service_id, status, latency_ms, status_code, timestamp,
      ROW_NUMBER() OVER(PARTITION BY service_id ORDER BY timestamp DESC) as rn
      FROM health_checks
    ) WHERE rn <= 30
  `
  const { results: history } = await db.prepare(historyQuery).all()

  // 3. Map history to services
  const services = (serviceStatuses as any[]).map(s => {
    // We need the ID from the services table which isn't in our first query. 
    // Let's optimize: fetch IDs in the first query too.
    return s
  })

  // Re-run first query with ID
  const fullStatusQuery = `
    SELECT s.id, s.name, s.url, h.status, h.latency_ms, h.status_code, h.timestamp
    FROM services s
    LEFT JOIN (
      SELECT service_id, status, latency_ms, status_code, timestamp
      FROM health_checks
      WHERE id IN (SELECT MAX(id) FROM health_checks GROUP BY service_id)
    ) h ON s.id = h.service_id
  `
  const { results: servicesWithIds } = await db.prepare(fullStatusQuery).all()

  const finalServices = (servicesWithIds as any[]).map(s => {
    const sHistory = (history as any[]).filter(h => h.service_id === s.id)
    return {
      ...s,
      history: sHistory,
      latest: sHistory[0] || { status: 'unknown', timestamp: new Date().toISOString() }
    }
  })

  // 4. Query recent incidents
  const incidentQuery = `
    SELECT s.name, h.status_code, h.response_snippet, h.timestamp
    FROM health_checks h
    JOIN services s ON h.service_id = s.id
    WHERE h.status = 'down'
    ORDER BY h.timestamp DESC LIMIT 10
  `
  const { results: incidents } = await db.prepare(incidentQuery).all()

  return {
    services: finalServices,
    incidents
  }
})
