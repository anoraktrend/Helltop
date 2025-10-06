<script setup lang="ts">
// Query all content and filter for blog posts
const { data: posts } = await useAsyncData('blog-posts', async () => {
  const content = await $fetch('/api/_content/query', {
    method: 'POST',
    body: {
      query: {
        _path: { $regex: '^/blog/' }
      }
    }
  })
  return Array.isArray(content) ? content : []
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>

    <div v-if="posts && posts.length > 0" class="space-y-6">
      <article
        v-for="post in posts"
        :key="post._path"
        class="border-b border-gray-200 dark:border-gray-700 pb-6"
      >
        <h2 class="text-2xl font-semibold mb-2">
          <NuxtLink
            :to="post._path"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ post.title }}
          </NuxtLink>
        </h2>

        <div v-if="post.description" class="text-gray-600 dark:text-gray-400 mb-3">
          {{ post.description }}
        </div>

        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <time v-if="post.date" :datetime="post.date">
            {{ new Date(post.date).toLocaleDateString() }}
          </time>

          <div v-if="post.tags && post.tags.length > 0" class="flex gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400">No blog posts yet.</p>
    </div>
  </div>
</template>