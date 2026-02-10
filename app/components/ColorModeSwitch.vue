<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    aria-label="Color Mode"
    class="inline-block w-5"
    @click="onClick"
  >
    <ColorScheme placeholder="...">
      <Icon
        v-if="colorMode.value === 'dark'"
        name="lucide-moon"
        class="w-5 h-5"
      />
      <Icon
        v-else
        name="lucide-sun"
        class="w-5 h-5"
      />
    </ColorScheme>
  </button>
</template>
