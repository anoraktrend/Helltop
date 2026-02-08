<script setup lang="ts">
const appConfig = useAppConfig();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="px-4 py-6 mx-auto text-center text-gray-500 dark:text-gray-400 sm:px-8 max-w-2xl">
    <div class="space-y-2">
      <!-- Copyright -->
      <p>&copy; {{ year }} {{ appConfig.siteName}}</p>
      
      <!-- Social links (same as navbar) -->
      <div class="flex justify-center space-x-4">
        <a
          v-if="appConfig.socials?.liberapay"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          :href="`https://liberapay.com/${appConfig.socials?.liberapay}`"
          title="Liberapay"
        >
          <Icon class="size-5" name="i-simple-icons-liberapay" />
        </a>
        <a
          v-if="appConfig.socials?.github"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          :href="`https://github.com/${appConfig.socials?.github}`"
          title="GitHub"
        >
          <Icon class="size-5" name="i-simple-icons-github" />
        </a>
        <a
          v-if="appConfig.socials?.codeberg"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          :href="`https://codeberg.org/${appConfig.socials?.codeberg}`"
          title="Codeberg"
        >
          <Icon class="size-5" name="i-simple-icons-codeberg" />
        </a>
        <a
          v-if="appConfig.socials?.mastodon"
          rel="me"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          :href="`https://${appConfig.socials?.mastohost}/${appConfig.socials?.mastodon}`"
          title="Mastodon"
        >
          <Icon class="size-5" name="i-simple-icons-mastodon" />
        </a>
        <a
          v-if="appConfig.socials?.bluesky"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          :href="`https://bsky.app/profile/${appConfig.socials?.bluesky}`"
          title="Bluesky"
        >
          <Icon class="size-5" name="i-simple-icons-bluesky" />
        </a>
        <a
          href="/rss.xml"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          title="RSS Feed"
        >
          <Icon class="size-5" name="i-simple-icons-rss" />
        </a>
      </div>
    </div>
  </footer>
</template>
