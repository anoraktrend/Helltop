<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('content'),
);

const appConfig = useAppConfig();
</script>

<template>
  <div class="flex justify-between items-center px-4 py-6 sm:px-8">
    <!-- Navigation -->
    <div class="text-[var(--text-dim)]">
      <NuxtLink
        v-for="link in navigation"
        :key="link.path" class="mr-6"
        :to="link.path"
        active-class="font-bold !text-[var(--highlight-color)]"
      >{{ link.title }}</NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="text-[var(--text-muted)] space-x-3 transition">
      <a
        v-if="appConfig.socials?.liberapay"
        class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve"
        :href="`https://liberapay.com/${appConfig.socials?.liberapay}`"
        title="Liberapay"
      >
        <Icon class="size-5" name="i-simple-icons-liberapay" />
      </a>
      <a
        v-if="appConfig.socials?.github"
        class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve"
        :href="`https://github.com/${appConfig.socials?.github}`"
        title="GitHub"
      >
        <Icon class="size-5" name="i-simple-icons-github" />
      </a>
      <a
        v-if="appConfig.socials?.codeberg"
        class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve"
        :href="`https://codeberg.org/${appConfig.socials?.codeberg}`"
        title="Codeberg"
      >
        <Icon class="size-5" name="i-simple-icons-codeberg" />
      </a>
      <a
        v-if="appConfig.socials?.mastodon"
        class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve"
        :href="`https://${appConfig.socials?.mastohost}/${appConfig.socials?.mastodon}`"
        title="Mastodon"
      >
        <Icon class="size-5" name="i-simple-icons-mastodon" />
      </a>
      <a
        v-if="appConfig.socials?.bluesky"
        class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve"
        :href="`https://bsky.app/profile/${appConfig.socials?.bluesky}`"
        title="Bluesky"
      >
        <Icon class="size-5" name="i-simple-icons-bluesky" />
      </a>
      <ColorModeSwitch class="dark:text-latte-base hover:text-latte-mauve dark:hover:text-mocha-mauve" />
    </div>
  </div>
</template>
