<script setup lang="ts">
const { data: statusData } = await useAsyncData('subdomains', () => {
  return queryCollection('data').where('stem', '=', 'subdomains').first()
})

interface Subdomain {
  name: string
  url: string
  status?: 'up' | 'down' | 'checking'
}

const subdomains = ref<Subdomain[]>([])

watchEffect(() => {
  if (statusData.value) {
    // In Nuxt Content v3 with data collection, the entire JSON is the object.
    // If it's an array, it might be in a specific property or the object itself if it's not wrapped.
    // However, JSON files are usually parsed as objects. If the file is an array, it might be different.
    // Let's assume it's an array or has a body property.
    const data = (statusData.value as any).body || statusData.value
    if (Array.isArray(data)) {
      subdomains.value = data.map(s => ({ ...s, status: 'checking' }))
    } else if (data.services && Array.isArray(data.services)) {
      subdomains.value = data.services.map((s: any) => ({ ...s, status: 'checking' }))
    }
    
    if (import.meta.client && subdomains.value.length > 0) {
      subdomains.value.forEach(checkStatus)
    }
  }
})

const checkStatus = async (service: Subdomain) => {
  service.status = 'checking'
  try {
    // We use a fetch with no-cors. If it's a network error, it's down.
    // If it's no-cors, we can't see the status code, but we know it reached something.
    await fetch(service.url, { mode: 'no-cors' })
    service.status = 'up'
  } catch (error) {
    service.status = 'down'
  }
}

onMounted(() => {
  if (subdomains.value.length > 0) {
    subdomains.value.forEach(checkStatus)
  }
})

useSeoMeta({
  title: 'Service Status - helltop.net',
  description: 'Status of services hosted on helltop.net'
})
</script>

<template>
  <NuxtLayout class="bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Service Status</h1>
      <p class="text-gray-600 dark:text-gray-400">Monitoring services at helltop.net</p>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div 
        v-for="service in subdomains" 
        :key="service.url"
        class="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between"
      >
        <div>
          <h2 class="font-semibold text-gray-900 dark:text-white">{{ service.name }}</h2>
          <a :href="service.url" class="text-sm text-blue-500 hover:underline" target="_blank">{{ service.url }}</a>
        </div>
        
        <div class="flex items-center">
          <span 
            v-if="service.status === 'checking'"
            class="inline-block w-3 h-3 rounded-full bg-yellow-400 animate-pulse mr-2"
          ></span>
          <span 
            v-else-if="service.status === 'up'"
            class="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"
          ></span>
          <span 
            v-else-if="service.status === 'down'"
            class="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"
          ></span>
          
          <span class="text-sm font-medium">
            {{ service.status === 'checking' ? 'Checking...' : (service.status === 'up' ? 'Operational' : 'Unavailable') }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
