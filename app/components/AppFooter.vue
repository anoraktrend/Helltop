<script setup lang="ts">
const appConfig = useAppConfig();
const year = new Date().getFullYear();

const { data: statusData } = await useFetch('https://status.helltop.net/api/status', {
  server: false,
  lazy: true
})

const overallStatus = computed(() => {
  if (!statusData.value || !statusData.value.services) return 'checking'
  const services = statusData.value.services
  if (services.length === 0) return 'unknown'
  return services.every((s: any) => s.status === 'up') ? 'operational' : 'outage'
})
</script>

<template>
  <footer class="px-4 py-8 mx-auto text-center text-gray-500 dark:text-gray-400 sm:px-8 max-w-2xl">
    <div class="space-y-6">
      <!-- Global Network Status -->
      <div class="flex justify-center">
        <NuxtLink to="https://status.helltop.net" target="_blank" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors group">
          <div class="relative flex h-2 w-2">
            <span v-if="overallStatus === 'operational'" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2" :class="{
              'bg-green-500': overallStatus === 'operational',
              'bg-yellow-500': overallStatus === 'outage',
              'bg-gray-500': overallStatus === 'checking' || overallStatus === 'unknown'
            }"></span>
          </div>
          <span class="text-xs font-medium uppercase tracking-tight group-hover:text-gray-900 dark:group-hover:text-gray-100">
            {{ overallStatus === 'operational' ? 'All Systems Operational' : (overallStatus === 'outage' ? 'Partial System Outage' : 'Network Status Unknown') }}
          </span>
        </NuxtLink>
      </div>

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
    </div>
  </footer>
</template>
