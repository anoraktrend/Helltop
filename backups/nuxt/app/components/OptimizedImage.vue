<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :loading="loading"
    :placeholder="placeholder"
    :format="format"
    :quality="quality"
    :fit="fit"
    :class="['rounded-lg shadow-md transition-opacity duration-300', customClass]"
    :style="style"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  sizes?: string
  loading?: 'lazy' | 'eager'
  placeholder?: boolean
  format?: 'webp' | 'avif' | 'jpeg' | 'png' | 'auto'
  quality?: number
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  customClass?: string
  style?: string | Record<string, string>
}

const _props = withDefaults(defineProps<Props>(), {
  width: undefined,
  height: undefined,
  sizes: 'sm:640px md:768px lg:1024px xl:1280px 2xl:1536px',
  loading: 'lazy',
  placeholder: true,
  format: 'auto',
  quality: 80,
  fit: 'cover',
  customClass: '',
  style: undefined
})

const emit = defineEmits<{
  load: [event: Event]
  error: [error: Error]
}>()

const onLoad = (event: Event) => {
  emit('load', event)
}

const onError = (payload: string | Event) => {
  const error = typeof payload === 'string' ? new Error(payload) : new Error('Image loading failed')
  emit('error', error)
}
</script>