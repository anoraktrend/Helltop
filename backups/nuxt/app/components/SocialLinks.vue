<script setup lang="ts">
import { computed } from 'vue';
const appConfig = useAppConfig();

interface Props {
  direction?: 'row' | 'col';
  iconSize?: string;
  spacing?: string;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  iconSize: '5',
  spacing: '4',
});

const linkClasses = computed(() => ({
  row: `flex gap-${props.spacing}`,
  col: `flex flex-col gap-${props.spacing}`,
}[props.direction]));
</script>

<template>
  <div :class="linkClasses">
    <a
      v-if="appConfig.site?.socials?.liberapay"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://liberapay.com/${appConfig.site.socials.liberapay.user}`"
      title="Liberapay"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.site.socials.liberapay.icon" />
    </a>
    <a
      v-if="appConfig.site?.socials?.github"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://github.com/${appConfig.site.socials.github.repo}`"
      title="GitHub"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.site.socials.github.icon" />
    </a>
    <a
      v-if="appConfig.site?.socials?.codeberg"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://codeberg.org/${appConfig.site.socials.codeberg.user}`"
      title="Codeberg"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.site.socials.codeberg.icon" />
    </a>
    <a
      v-if="appConfig.site?.socials?.mastodon"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://${appConfig.site.socials.mastodon.host}/${appConfig.site.socials.mastodon.user}`"
      title="Mastodon"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.site.socials.mastodon.icon" />
    </a>
    <a
      v-if="appConfig.site?.socials?.bluesky"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://bsky.app/profile/${appConfig.site.socials.bluesky.user}`"
      title="Bluesky"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.site.socials.bluesky.icon" />
    </a>
  </div>
</template>
