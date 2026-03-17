<script setup lang="ts">
/**
 * SimpleCommenter integration.
 * Using .client suffix to ensure it only runs in the browser.
 */
const isLoaded = ref(false);

onMounted(() => {
  // Prevent duplicate script injection
  if (document.querySelector('script[src*="simplecommenter.com"]')) {
    isLoaded.value = true;
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://simplecommenter.com/js/comments.min.js?id=sc_28bd8055e3360ff3';
  script.defer = true;
  script.onload = () => {
    isLoaded.value = true;
  };
  document.head.appendChild(script);
});
</script>

<template>
  <div class="comments-container mt-12 pt-8 border-t border-ctp-surface0">
    <h2 class="text-2xl font-bold mb-6 text-ctp-mauve flex items-center gap-2">
      <Icon name="lucide:message-square" />
      Comments & Feedback
    </h2>
    
    <div id="simple-commenter" class="min-h-[200px] bg-ctp-mantle rounded-lg p-4">
      <div v-if="!isLoaded" class="flex flex-col items-center justify-center py-12 animate-pulse">
        <Icon name="lucide:loader-2" class="size-8 animate-spin text-ctp-subtext0 mb-2" />
        <p class="text-ctp-subtext0 italic text-sm">Initializing comments...</p>
      </div>
      <!-- SimpleCommenter widget will render here or as a floating button -->
    </div>

    <div class="mt-4 text-xs text-ctp-subtext0 italic">
      <p>Click anywhere on the page to leave a pin-point comment, or use the widget above.</p>
    </div>
  </div>
</template>

<style scoped>
#simple-commenter {
  /* Ensure the container doesn't collapse if the widget is floating */
  transition: all 0.3s ease;
}
</style>
