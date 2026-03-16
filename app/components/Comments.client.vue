<script setup lang="ts">
/**
 * SimpleCommenter integration.
 * Using .client suffix to ensure it only runs in the browser.
 */
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://simplecommenter.com/js/comments.min.js?id=sc_28bd8055e3360ff3';
  script.defer = true;
  document.head.appendChild(script);
});
</script>

<template>
  <div class="comments-container mt-12 pt-8 border-t border-ctp-surface0">
    <div id="simple-commenter"></div>
  </div>
</template>
