<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="not-prose">
    <NuxtLink
      :to="href"
      :external="external"
      class="inline-flex items-center gap-1 bg-latte-mauve text-latte-base dark:bg-mocha-mauve dark:text-mocha-base px-3 py-1 rounded no-underline hover:opacity-90 transition-opacity"
    >
      <Icon
        v-if="icon"
        :name="icon"
        class="w-4 h-4"
      />
      <slot mdc-unwrap="p" />
    </NuxtLink>
  </span>
</template>
