<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('content'),
);

const appConfig = useAppConfig();
</script>

<template>
  <nav class="flex justify-between items-center px-4 py-4 sm:px-8 bg-ctp-mantle border-b border-ctp-surface0">
    <!-- Navigation -->
    <div class="flex items-center text-ctp-overlay2 dark:text-ctp-overlay2">
      <NuxtLink
        to="/"
        class="mr-6 transition-colors hover:text-ctp-text"
        active-class="font-bold !text-[var(--highlight-color)]"
      >Home</NuxtLink>
      <NuxtLink
        v-for="link in navigation"
        :key="link.path" class="mr-6 transition-colors hover:text-ctp-text"
        :to="link.path"
        active-class="font-bold !text-[var(--highlight-color)]"
      >{{ link.title }}</NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="text-ctp-overlay2 dark:text-ctp-overlay2 transition flex items-center gap-3">
      <SocialLinks icon-size="5" spacing="3" />
      <ColorModeSwitch class="hover:text-ctp-mauve" />
    </div>
  </nav>
</template>
