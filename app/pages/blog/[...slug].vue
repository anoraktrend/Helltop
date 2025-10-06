<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  const content = await $fetch('/api/_content/query', {
    method: 'POST',
    body: {
      query: {
        _path: route.path
      }
    }
  })
  return Array.isArray(content) ? content[0] : content
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

useSeoMeta(page.value?.seo || {})
</script>

<template>
  <NuxtLayout :name="page?.layout as LayoutKey || 'default'" class="bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900"
    />
  </NuxtLayout>
</template>
