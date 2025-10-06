import { ref, readonly } from 'vue'
import { useStrapiApi } from './useStrapiApi'
import type { Article, ArticlesResponse, ApiParams } from '../types/strapi'

export const useArticles = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchArticles = async (params?: {
    page?: number
    pageSize?: number
    sort?: string
    filters?: Record<string, any>
    populate?: string
  }): Promise<ArticlesResponse> => {
    loading.value = true
    error.value = null

    try {
      const queryParams = new URLSearchParams()

      if (params?.page) queryParams.append('pagination[page]', params.page.toString())
      if (params?.pageSize) queryParams.append('pagination[pageSize]', params.pageSize.toString())
      if (params?.sort) queryParams.append('sort', params.sort)
      if (params?.populate) queryParams.append('populate', params.populate)

      const queryString = queryParams.toString()
      const url = `/api/articles${queryString ? `?${queryString}` : ''}`

      const response = await useStrapiApi<ArticlesResponse>(url)
      return response
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch articles'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchArticleBySlug = async (slug: string): Promise<Article> => {
    loading.value = true
    error.value = null

    try {
      const response = await useStrapiApi<{ data: Article }>(`/api/articles?filters[slug][$eq]=${slug}&populate=*`)
      return response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch article'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    fetchArticles,
    fetchArticleBySlug,
  }
}