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
        name="dark-mode"
        class="size-5"
      />
      <Icon
        v-else
        name="light-mode"
        class="size-5"
      />
    </ColorScheme>
  </button>
</template>
