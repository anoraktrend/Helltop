<template>
  <OptimizedImage
    :src="optimizedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :loading="loading"
    :format="format"
    :quality="quality"
    :fit="fit"
    :custom-class="customClass"
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
  format?: 'webp' | 'avif' | 'jpeg' | 'png' | 'auto'
  quality?: number
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: undefined,
  height: undefined,
  sizes: 'sm:640px md:768px lg:1024px xl:1280px 2xl:1536px',
  loading: 'lazy',
  format: 'auto',
  quality: 80,
  fit: 'cover',
  customClass: 'prose-img:rounded-lg prose-img:shadow-md'
})

// Convert markdown image paths to optimized paths
const optimizedSrc = computed(() => {
  const src = props.src
  
  // Handle relative paths starting with /uploads/
  if (src.startsWith('/uploads/')) {
    return src // Nuxt Image will handle optimization automatically
  }
  
  // Handle external URLs (Nuxt Image will proxy and optimize them)
  if (src.startsWith('http')) {
    return src
  }
  
  // Handle other relative paths
  return src
})
</script>