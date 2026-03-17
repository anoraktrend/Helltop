<script setup lang="ts">
// Query the blog collection using Nuxt Content v3 API
const { data: posts } = await useAsyncData('blog-posts', async () => {
  const allPosts = await queryCollection('blog')
    .select('title', 'date', 'description', 'path', 'category')
    .all()
  return allPosts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })
})
</script>

<template>
  <div class="px-4 py-10 sm:px-8 bg-ctp-base">
    <main class="max-w-none prose dark:prose-invert">
      <h1 class="text-4xl font-bold mb-8">Blog</h1>

      <div v-if="posts && posts.length > 0" class="space-y-6">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="border-b border-ctp-surface0 pb-6 last:border-b-0"
        >
          <h2 class="text-2xl font-semibold mb-2">
            <NuxtLink
              :to="post.path"
              class="hover:text-ctp-mauve transition-colors no-underline"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>

          <div v-if="post.description" class="text-ctp-subtext0 mb-3">
            {{ post.description }}
          </div>

          <div class="flex items-center gap-4 text-sm text-ctp-overlay2">
            <time v-if="post.date" :datetime="post.date">
              {{ new Date(post.date).toLocaleDateString() }}
            </time>

            <span v-if="post.category" class="px-2 py-1 bg-ctp-mantle rounded text-xs">
              {{ post.category }}
            </span>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-ctp-subtext0">No blog posts yet.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.blog-index {
  min-height: 100vh;
}
</style>