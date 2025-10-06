// Path: nuxt-frontend/app.vue

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useArticles } from '../composables/useArticles'
import type { Article } from '../types/strapi'

// Use the new composables
const { fetchArticles, error, loading } = useArticles()

// Reactive state for articles
const articlesResponse = ref<any>(null)

// Fetch articles on component mount
onMounted(async () => {
  try {
    articlesResponse.value = await fetchArticles({ populate: '*' })
  } catch (err) {
    console.error('Failed to fetch articles:', err)
  }
})

// Get articles from the response
const articles = computed(() => articlesResponse.value?.data || [])

// Format date
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

// Handle loading state
const isLoading = computed(() => loading.value)

// Handle error state
const hasError = computed(() => error.value)
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-5xl font-extrabold mb-10 text-center">
      Nuxt.js and Strapi Integration
    </h1>

    <section aria-labelledby="articles-title" class="space-y-8">
      <h2 id="articles-title" class="text-3xl font-bold">Latest Articles</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loading state -->
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        </div>

        <!-- Error state -->
        <div v-else-if="hasError" class="text-center py-12">
          <div class="text-red-600 dark:text-red-400 mb-4">
            <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Failed to load articles</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ error }}</p>
        </div>

        <!-- Articles list -->
        <NuxtLink
          v-else
          v-for="article in articles"
          :key="article.id"
          :to="`/articles/${article.slug}`"
          class="block bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col transform hover:-translate-y-1"
        >
          <NuxtImg
            :src="`http://localhost:1337${article.cover?.url}`"
            :alt="`Cover image for ${article.title}`"
            class="w-full h-52 object-cover"
          />

          <div class="p-6 flex flex-col gap-3">
            <h3
              class="text-2xl font-semibold text-gray-900 dark:text-white leading-snug"
            >
              {{ article.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 text-sm italic">
              {{ formatDate(article.publishedAt || article.createdAt) }}
            </p>
            <p
              class="text-gray-700 dark:text-gray-400 text-base leading-relaxed line-clamp-4"
            >
              {{ article.description }}
            </p>

            <!-- Click indicator -->
            <div class="mt-auto pt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Click to read more
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
