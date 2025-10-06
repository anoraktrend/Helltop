<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <div class="text-red-600 dark:text-red-400 mb-4">
        <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Failed to load article</h3>
      <p class="text-gray-600 dark:text-gray-400">{{ error }}</p>
      <NuxtLink to="/" class="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
        ← Back to Articles
      </NuxtLink>
    </div>

    <!-- Article Content -->
    <article v-else-if="article" class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <!-- Back Button -->
      <div class="p-6 border-b border-gray-200 dark:border-gray-700">
        <NuxtLink
          to="/"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </NuxtLink>
      </div>

      <!-- Article Header -->
      <div class="relative">
        <NuxtImg
          :src="`http://localhost:1337${article.cover?.url}`"
          :alt="`Cover image for ${article.title}`"
          class="w-full h-64 md:h-96 object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div class="absolute bottom-6 left-6 right-6">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
            {{ article.title }}
          </h1>
          <p class="text-gray-200 text-sm italic">
            {{ formatDate(article.publishedAt || article.createdAt) }}
          </p>
        </div>
      </div>

      <!-- Article Content -->
      <div class="p-6 md:p-8">
        <!-- Article Meta -->
        <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ article.author?.name }}
          </span>
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {{ article.category?.name }}
          </span>
        </div>

        <!-- Article Description -->
        <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ article.description }}
          </p>
        </div>

        <!-- Article Blocks (Dynamic Content) -->
        <div v-if="article.blocks && article.blocks.length > 0" class="space-y-8">
          <div
            v-for="block in article.blocks"
            :key="block.id"
            class="prose prose-lg dark:prose-invert max-w-none"
          >
            <!-- Rich Text Block -->
            <div v-if="block.__component === 'shared.rich-text'" class="mb-6">
              <div v-html="block.body" class="prose dark:prose-invert"></div>
            </div>

            <!-- Quote Block -->
            <blockquote v-else-if="block.__component === 'shared.quote'" class="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700 dark:text-gray-300">
              "{{ block.body }}"
              <footer v-if="block.title" class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                — {{ block.title }}
              </footer>
            </blockquote>

            <!-- Media Block -->
            <div v-else-if="block.__component === 'shared.media'" class="mb-6">
              <div v-for="media in block.media" :key="media.id" class="mb-4">
                <NuxtImg
                  v-if="media.mime?.startsWith('image/')"
                  :src="`http://localhost:1337${media.url}`"
                  :alt="media.alternativeText || 'Article media'"
                  class="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <!-- Slider Block -->
            <div v-else-if="block.__component === 'shared.slider'" class="mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="slide in block.slides" :key="slide.id" class="relative">
                  <NuxtImg
                    :src="`http://localhost:1337${slide.media?.url}`"
                    :alt="slide.title || 'Slide image'"
                    class="w-full h-48 object-cover rounded-lg"
                  />
                  <div v-if="slide.title || slide.description" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
                    <h3 v-if="slide.title" class="text-white font-semibold">{{ slide.title }}</h3>
                    <p v-if="slide.description" class="text-gray-200 text-sm">{{ slide.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="article.tags && article.tags.length > 0" class="pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags"
              :key="tag.id"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {{ tag.name }}
            </span>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
// Get the slug from the route params
const route = useRoute()
const slug = route.params.slug as string

// Use the articles composable
const { fetchArticleBySlug, loading, error } = useArticles()

// Fetch the article data
const { data: article, error: fetchError } = await useLazyAsyncData(`article-${slug}`, () =>
  fetchArticleBySlug(slug)
)

// Handle errors
if (fetchError.value) {
  error.value = fetchError.value.message
}

// Format date utility
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

// Set page meta
useHead({
  title: article.value?.title ? `${article.value.title} | Nuxt Strapi Blog` : 'Article | Nuxt Strapi Blog'
})
</script>