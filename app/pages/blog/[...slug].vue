<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.params.slug}`, () => {
  return queryCollection('blog').path(route.path).first()
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
  <NuxtLayout :name="page?.layout as LayoutKey || 'default'" class="bg-latte-base dark:bg-mocha-base">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose dark:prose-invert prose-pre:bg-latte-mantle dark:prose-pre:bg-mocha-mantle prose-img:rounded-lg prose-img:shadow-md max-w-none"
    />
  </NuxtLayout>
</template>
