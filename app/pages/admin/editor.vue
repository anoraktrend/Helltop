<script setup lang="ts">
const title = ref('')
const slug = ref('')
const content = ref('')
const loading = ref(false)
const message = ref('')

const savePost = async () => {
  loading.value = true
  message.value = ''
  try {
    await $fetch('/api/write.post', {
      method: 'POST',
      body: { 
        title: title.value, 
        slug: slug.value || title.value.toLowerCase().replace(/ /g, '-'), 
        content: content.value 
      }
    })
    message.value = 'Post saved and pushed to GitHub!'
  } catch (e: any) {
    message.value = 'Error: ' + e.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="p-8 max-w-4xl mx-auto font-sans">
    <h1 class="text-3xl font-bold mb-8 text-primary-500">Helltop Editor</h1>
    
    <div v-if="message" class="mb-4 p-4 rounded bg-gray-100 dark:bg-gray-800 text-sm border-l-4 border-primary-500">
      {{ message }}
    </div>

    <div class="space-y-6">
      <div>
        <label class="block text-sm font-bold mb-2">Post Title</label>
        <UInput v-model="title" placeholder="StatusFlare Redesign" size="lg" />
      </div>

      <div>
        <label class="block text-sm font-bold mb-2">Slug (optional)</label>
        <UInput v-model="slug" placeholder="statusflare-redesign" size="sm" />
      </div>

      <div>
        <label class="block text-sm font-bold mb-2">Content (Markdown)</label>
        <UTextarea v-model="content" :rows="15" placeholder="Write your rebellion here..." class="font-mono" />
      </div>

      <UButton 
        :loading="loading" 
        size="xl" 
        block 
        color="primary" 
        @click="savePost"
      >
        Commit to GitHub
      </UButton>
    </div>
  </div>
</template>
