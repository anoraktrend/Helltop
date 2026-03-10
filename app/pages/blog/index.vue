<script setup lang="ts">
// Query the blog collection using Nuxt Content v3 API
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryCollection('blog').all()
)
</script>

<template>
  <div class="px-4 py-10 m-auto sm:px-8 sm:rounded-lg max-w-2xl sm:shadow bg-latte-base dark:bg-mocha-base ring-1 ring-latte-surface0 dark:ring-mocha-surface0">
    <main class="max-w-none prose dark:prose-invert">
      <h1 class="text-4xl font-bold mb-8">Blog</h1>

      <div v-if="posts && posts.length > 0" class="space-y-6">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="border-b border-latte-surface0 dark:border-mocha-surface0 pb-6 last:border-b-0"
        >
          <h2 class="text-2xl font-semibold mb-2">
            <NuxtLink
              :to="post.path"
              class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors no-underline"
            >
              {{ post.title }}
            </NuxtLink>
          </h2>

          <div v-if="post.description" class="text-latte-subtext0 dark:text-mocha-subtext0 mb-3">
            {{ post.description }}
          </div>

          <div class="flex items-center gap-4 text-sm text-latte-overlay2 dark:text-mocha-overlay2">
            <time v-if="post.date" :datetime="post.date">
              {{ new Date(post.date).toLocaleDateString() }}
            </time>

            <span v-if="post.category" class="px-2 py-1 bg-latte-mantle dark:bg-mocha-mantle rounded text-xs">
              {{ post.category }}
            </span>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-[var(--text-muted)]">No blog posts yet.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.blog-index {
  min-height: 100vh;
}
</style>