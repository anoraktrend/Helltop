<script setup lang="ts">
const appConfig = useAppConfig();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="px-4 py-8 text-center text-[var(--text-muted)] sm:px-8 bg-latte-crust dark:bg-mocha-crust border-t border-latte-surface0 dark:border-mocha-surface0 mt-auto">
    <div class="space-y-4">
      <!-- Copyright -->
      <p>&copy; {{ year }} {{ appConfig.siteName}}</p>
      
      <!-- Social links (same as navbar) -->
      <div class="flex justify-center space-x-4">
        <a
          v-if="appConfig.socials?.liberapay"
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          :href="`https://liberapay.com/${appConfig.socials.liberapay.user}`"
          title="Liberapay"
        >
          <Icon class="size-5" :name="appConfig.socials.liberapay.icon" />
        </a>
        <a
          v-if="appConfig.socials?.github"
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          :href="`https://github.com/${appConfig.socials.github.repo}`"
          title="GitHub"
        >
          <Icon class="size-5" :name="appConfig.socials.github.icon" />
        </a>
        <a
          v-if="appConfig.socials?.codeberg"
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          :href="`https://codeberg.org/${appConfig.socials.codeberg.user}`"
          title="Codeberg"
        >
          <Icon class="size-5" :name="appConfig.socials.codeberg.icon" />
        </a>
        <a
          v-if="appConfig.socials?.mastodon"
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          :href="`https://${appConfig.socials.mastodon.host}/${appConfig.socials.mastodon.user}`"
          title="Mastodon"
        >
          <Icon class="size-5" :name="appConfig.socials.mastodon.icon" />
        </a>
        <a
          v-if="appConfig.socials?.bluesky"
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          :href="`https://bsky.app/profile/${appConfig.socials.bluesky.user}`"
          title="Bluesky"
        >
          <Icon class="size-5" :name="appConfig.socials.bluesky.icon" />
        </a>
        <a
          class="hover:text-latte-mauve dark:hover:text-mocha-mauve transition-colors"
          title="RSS Feed"
          href="/rss.xml"
        >
          <Icon class="size-5" name="i-simple-icons-rss" />
        </a>
      </div>
    </div>
  </footer>
</template>
