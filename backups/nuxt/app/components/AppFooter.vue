<script setup lang="ts">
const appConfig = useAppConfig();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="px-4 py-8 text-center text-ctp-overlay2 sm:px-8 bg-ctp-crust border-t border-ctp-surface0 mt-auto">
    <div class="space-y-4">
      <!-- Copyright -->
      <p>&copy; {{ year }} {{ appConfig.site?.siteName }}</p>
      
      <!-- Social links -->
      <div class="flex justify-center">
        <SocialLinks icon-size="5" spacing="4" />
        <a
          class="hover:text-ctp-mauve transition-colors ml-4"
          title="RSS Feed"
          href="/rss.xml"
        >
          <Icon class="size-5" name="i-lucide-rss" />
        </a>
      </div>
    </div>
  </footer>
</template>
