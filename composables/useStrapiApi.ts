export const useStrapiApi = async <T>(url: string, options: any = {}): Promise<T> => {
  const strapiUrl = 'http://localhost:1337'

  try {
    const response = await fetch(`${strapiUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Strapi API error:', error)
    throw error
  }
}

export const useStrapiToken = () => {
  // Return empty object for now, can be extended for authentication
  return {}
}