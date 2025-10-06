// Common Strapi types
export interface StrapiBase {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface StrapiMedia {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats?: {
    thumbnail?: {
      url: string
      width: number
      height: number
    }
    small?: {
      url: string
      width: number
      height: number
    }
    medium?: {
      url: string
      width: number
      height: number
    }
    large?: {
      url: string
      width: number
      height: number
    }
  }
  url: string
  mime: string
  size: number
}

export interface StrapiMeta {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface StrapiResponse<T> {
  data: T
  meta: StrapiMeta
}

export interface StrapiError {
  data: null
  error: {
    status: number
    name: string
    message: string
    details: Record<string, any>
  }
}

// Content type interfaces
export interface Author extends StrapiBase {
  name: string
  avatar?: StrapiMedia
  email: string
  articles?: Article[]
}

export interface Category extends StrapiBase {
  name: string
  slug: string
  description?: string
  articles?: Article[]
}

export interface Tag extends StrapiBase {
  name: string
  slug: string
  description?: string
  articles?: Article[]
}

export interface Article extends StrapiBase {
  title: string
  description: string
  slug: string
  cover?: StrapiMedia
  author?: Author
  category?: Category
  tags?: Tag[]
  blocks?: any[]
}

// API response types
export interface AuthorsResponse extends StrapiResponse<Author[]> {}
export interface CategoriesResponse extends StrapiResponse<Category[]> {}
export interface TagsResponse extends StrapiResponse<Tag[]> {}
export interface ArticlesResponse extends StrapiResponse<Article[]> {}

// Single item responses
export interface AuthorResponse extends StrapiResponse<Author> {}
export interface CategoryResponse extends StrapiResponse<Category> {}
export interface TagResponse extends StrapiResponse<Tag> {}
export interface ArticleResponse extends StrapiResponse<Article> {}

// Pagination parameters
export interface PaginationParams {
  page?: number
  pageSize?: number
}

export interface SortParams {
  sort?: string
}

export interface FilterParams {
  filters?: Record<string, any>
}

export interface PopulateParams {
  populate?: string
}

export interface ApiParams extends PaginationParams, SortParams, FilterParams, PopulateParams {}

// Block types (for dynamic zones)
export interface MediaBlock {
  __component: 'shared.media'
  media: StrapiMedia[]
}

export interface QuoteBlock {
  __component: 'shared.quote'
  title: string
  body: string
}

export interface RichTextBlock {
  __component: 'shared.rich-text'
  body: string
}

export interface SliderBlock {
  __component: 'shared.slider'
  slides: {
    id: number
    title?: string
    description?: string
    media?: StrapiMedia
  }[]
}

export type ArticleBlocks = MediaBlock | QuoteBlock | RichTextBlock | SliderBlock