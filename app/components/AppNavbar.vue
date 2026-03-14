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
    <div class="text-ctp-overlay2 dark:text-ctp-overlay2 space-x-3 transition flex items-center">
      <a
        v-if="appConfig.socials?.liberapay"
        class="hover:text-ctp-mauve flex items-center"
        :href="`https://liberapay.com/${appConfig.socials.liberapay.user}`"
        title="Liberapay"
      >
        <Icon class="size-5" :name="appConfig.socials.liberapay.icon" />
      </a>
      <a
        v-if="appConfig.socials?.github"
        class="hover:text-ctp-mauve flex items-center"
        :href="`https://github.com/${appConfig.socials.github.repo}`"
        title="GitHub"
      >
        <Icon class="size-5" :name="appConfig.socials.github.icon" />
      </a>
      <a
        v-if="appConfig.socials?.codeberg"
        class="hover:text-ctp-mauve flex items-center"
        :href="`https://codeberg.org/${appConfig.socials.codeberg.user}`"
        title="Codeberg"
      >
        <Icon class="size-5" :name="appConfig.socials.codeberg.icon" />
      </a>
      <a
        v-if="appConfig.socials?.mastodon"
        class="hover:text-ctp-mauve flex items-center"
        :href="`https://${appConfig.socials.mastodon.host}/${appConfig.socials.mastodon.user}`"
        title="Mastodon"
      >
        <Icon class="size-5" :name="appConfig.socials.mastodon.icon" />
      </a>
      <a
        v-if="appConfig.socials?.bluesky"
        class="hover:text-ctp-mauve flex items-center"
        :href="`https://bsky.app/profile/${appConfig.socials.bluesky.user}`"
        title="Bluesky"
      >
        <Icon class="size-5" :name="appConfig.socials.bluesky.icon" />
      </a>
      <ColorModeSwitch class="hover:text-ctp-mauve" />
    </div>
  </nav>
</template>
