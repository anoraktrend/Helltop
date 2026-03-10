<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const { data: statusData } = await useFetch('https://status.helltop.net/api/status')

const serviceStatus = computed(() => {
  if (!statusData.value || !statusData.value.services) return 'unknown'
  const service = statusData.value.services.find((s: any) => s.name.toLowerCase().includes(props.name.toLowerCase()))
  return service ? service.status : 'unknown'
})

const statusColor = computed(() => {
  switch (serviceStatus.value) {
    case 'up': return 'text-green-500'
    case 'down': return 'text-red-500'
    default: return 'text-gray-500'
  }
})
</script>

<template>
  <span class="inline-flex items-center gap-1.5 font-medium" :class="statusColor">
    <span class="relative flex h-2 w-2">
      <span v-if="serviceStatus === 'up'" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2" :class="serviceStatus === 'up' ? 'bg-green-500' : (serviceStatus === 'down' ? 'bg-red-500' : 'bg-gray-500')"></span>
    </span>
    <span class="text-[10px] uppercase tracking-wider">{{ serviceStatus }}</span>
  </span>
</template>
