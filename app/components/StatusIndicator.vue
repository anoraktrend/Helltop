<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const { data: statusData } = await useFetch('https://status.helltop.net/api/status')

const service = computed(() => {
  if (!statusData.value || !statusData.value.services) return null
  return statusData.value.services.find((s: any) => s.name.toLowerCase().includes(props.name.toLowerCase()))
})

const status = computed(() => service.value?.status || 'unknown')
const latency = computed(() => service.value?.latest?.latency_ms)
const lastChecked = computed(() => {
  if (!service.value?.latest?.timestamp) return ''
  return new Date(service.value.latest.timestamp + (service.value.latest.timestamp.endsWith('Z') ? '' : 'Z')).toLocaleTimeString()
})

const color = computed(() => {
  switch (status.value) {
    case 'up': return 'success'
    case 'down': return 'error'
    default: return 'neutral'
  }
})
</script>

<template>
  <UTooltip :text="status === 'up' ? `Latency: ${latency}ms | Last checked: ${lastChecked}` : 'Service is currently offline'">
    <UBadge
      :color="color"
      variant="soft"
      size="sm"
      class="font-mono text-[10px] px-1.5 py-0.5"
    >
      <template #leading>
        <span class="relative flex h-1.5 w-1.5 mr-1">
          <span v-if="status === 'up'" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-1.5 w-1.5" :class="status === 'up' ? 'bg-success-500' : (status === 'down' ? 'bg-error-500' : 'bg-neutral-500')"></span>
        </span>
      </template>
      {{ status.toUpperCase() }}
    </UBadge>
  </UTooltip>
</template>
