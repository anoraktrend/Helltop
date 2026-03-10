import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const endpoint = query.endpoint as string

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing url parameter',
    })
  }

  const fullUrl = endpoint ? `${url}${endpoint}` : url

  try {
    const start = Date.now()
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'HelltopStatus/1.0'
      },
      // Short timeout for health checks
      signal: AbortSignal.timeout(5000)
    })
    const duration = Date.now() - start

    let details = {}
    if (response.ok) {
      try {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const json = await response.json()
          // Extract useful bits from known services
          if (json.version) details = { version: json.version }
          else if (json.Version) details = { version: json.Version }
          else if (json.status) details = { status: json.status }
        }
      } catch (e) {
        // Ignore JSON parse errors
      }
    }

    return {
      status: response.ok ? 'up' : 'down',
      statusCode: response.status,
      latency: duration,
      details
    }
  } catch (error: any) {
    return {
      status: 'down',
      error: error.message,
      details: {}
    }
  }
})
