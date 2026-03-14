<script setup lang="ts">
const { data: home } = await useAsyncData('homepage', () => {
  return queryCollection('homepage').first()
})

if (!home.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Homepage data not found',
  })
}

useSeoMeta({
  title: home.value.hero.title,
  description: home.value.hero.description
})
</script>

<template>
  <NuxtLayout name="full-width">
    <div v-if="home" class="bg-latte-base dark:bg-mocha-base text-latte-text dark:text-mocha-text" style="font-size: 1.25rem; line-height: 1.6;">
      <!-- Hero Section -->
      <header style="margin-bottom: 4rem;">
        <h1 style="font-size: 4rem; line-height: 1; margin-bottom: 1rem; font-weight: 800; letter-spacing: -0.05em;" class="text-latte-maroon dark:text-mocha-maroon">
          {{ home.hero.title }}
        </h1>
        <p style="font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem;" class="text-latte-mauve dark:text-mocha-mauve">
          {{ home.hero.subtitle }}
        </p>
        <p>{{ home.hero.description }}</p>
      </header>

      <!-- Dynamic Sections -->
      <section v-for="section in home.sections" :key="section.id" style="margin-bottom: 4rem;">
        <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 4px solid var(--ui-primary); display: inline-block;" class="text-latte-maroon dark:text-mocha-maroon">
          {{ section.title }}
        </h2>

        <!-- Text Section Type -->
        <div v-if="section.type === 'text'">
          <p v-if="section.content">{{ section.content }}</p>
          <ul v-if="section.list" style="list-style: none; padding: 0; margin-top: 2rem;">
            <li v-for="item in section.list" :key="item.title" style="margin-bottom: 1.5rem;" class="flex items-start">
              <span class="mr-3 mt-1 inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-latte-mauve dark:bg-mocha-mauve text-latte-base dark:text-mocha-base">
                {{ item.title }}
              </span>
              <span class="text-latte-text dark:text-mocha-text">{{ item.text }}</span>
            </li>
          </ul>
          <p v-if="section.quote" style="font-weight: 700; margin-top: 2rem; font-size: 1.5rem; text-align: center; font-style: italic;" class="text-latte-subtext0 dark:text-mocha-subtext0">
            "{{ section.quote }}"
          </p>
        </div>

        <!-- Infrastructure (Arsenal) Section Type -->
        <div v-else-if="section.type === 'infrastructure'">
          <h3 style="font-size: 1.75rem; margin-bottom: 1rem;" class="text-latte-subtext0 dark:text-mocha-subtext0">{{ section.subtitle }}</h3>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; text-align: center;">
              <thead>
                <tr class="text-latte-subtext0 dark:text-mocha-subtext0">
                  <th style="padding: 12px; font-weight: 800; text-transform: uppercase; font-size: 0.875rem;">Status</th>
                  <th style="padding: 12px; font-weight: 800; text-transform: uppercase; font-size: 0.875rem;">Service</th>
                  <th style="padding: 12px; font-weight: 800; text-transform: uppercase; font-size: 0.875rem;">Function</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in section.items" :key="item.name">
                  <td style="padding: 12px; vertical-align: middle;">
                    <div style="display: flex; justify-content: center;">
                      <img :src="`https://status.helltop.net/badge/${item.badge}.svg?w=24`" width="24" height="24" alt="Status" style="display: block;">
                    </div>
                  </td>
                  <td style="padding: 12px; vertical-align: middle;">
                    <a :href="item.url" style="font-weight: 700; text-decoration: none;" class="text-latte-blue dark:text-mocha-blue hover:text-latte-mauve dark:hover:text-mocha-mauve hover:underline">
                      <Icon v-if="item.icon" :name="item.icon" class="size-6 inline-block mr-2" />
                      {{ item.name }}
                    </a>
                  </td>
                  <td style="padding: 12px; vertical-align: middle; font-size: 1rem;" class="text-latte-subtext1 dark:text-mocha-subtext1">
                    {{ item.function }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Software (The Forge) Section Type -->
        <div v-else-if="section.type === 'software'">
          <h3 style="font-size: 1.75rem; margin-bottom: 1rem;">{{ section.subtitle }}</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div
v-for="item in section.items" :key="item.name" 
                 class="bg-latte-mantle dark:bg-mocha-mantle" 
                 style="padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--ui-primary);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">
                <a :href="item.url" style="text-decoration: none;" class="text-latte-blue dark:text-mocha-blue hover:text-latte-mauve dark:hover:text-mocha-mauve hover:underline">
                  {{ item.name }}
                </a>
              </h4>
              <p style="margin: 0; font-size: 0.95rem;" class="text-latte-subtext1 dark:text-mocha-subtext1">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- CTA (Join the Resistance) Section Type -->
        <div v-else-if="section.type === 'cta'">
          <div v-html="section.content"/>
        </div>
      </section>

      <!-- Footer -->
      <footer style="text-align: center; border-top: 1px solid var(--tw-prose-borders); padding-top: 2rem; font-size: 0.875rem;" class="text-latte-subtext1 dark:text-mocha-subtext1">
        <p>
          Last updated: {{ home.footer.lastUpdated }} | 
          <a :href="home.footer.statusUrl" class="text-latte-blue dark:text-mocha-blue hover:text-latte-mauve dark:hover:text-mocha-mauve hover:underline">Detailed System Status</a>
        </p>
      </footer>
    </div>
  </NuxtLayout>
</template>
