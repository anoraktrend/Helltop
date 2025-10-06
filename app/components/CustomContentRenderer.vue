<template>
  <ContentRenderer
    :value="value"
    :class="customClass"
  >
    <template #empty>
      <slot name="empty" />
    </template>
    
    <template #default="{ body }">
      <div v-html="processImages(body)" />
    </template>
  </ContentRenderer>
</template>

<script setup lang="ts">
interface Props {
  value: any
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  customClass: 'prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-img:rounded-lg prose-img:shadow-md max-w-none'
})

// Process images in markdown content to use optimized components
const processImages = (html: string) => {
  if (!html) return html
  
  // Replace img tags with our optimized component
  return html.replace(
    /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/g,
    (match, src, alt) => {
      // Extract width and height if present
      const widthMatch = match.match(/width="(\d+)"/)
      const heightMatch = match.match(/height="(\d+)"/)
      const width = widthMatch ? parseInt(widthMatch[1]!) : undefined
      const height = heightMatch ? parseInt(heightMatch[1]!) : undefined
      
      // Extract class if present
      const classMatch = match.match(/class="([^"]*)"/)
      const imgClass = classMatch ? classMatch[1] : ''
      
      return `
        <markdown-image
          src="${src}"
          alt="${alt || ''}"
          ${width ? `width="${width}"` : ''}
          ${height ? `height="${height}"` : ''}
          custom-class="${imgClass}"
        />
      `.trim()
    }
  )
}
</script>