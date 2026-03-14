<script setup lang="ts">
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
      v-if="appConfig.socials?.liberapay"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://liberapay.com/${appConfig.socials.liberapay.user}`"
      title="Liberapay"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.socials.liberapay.icon" />
    </a>
    <a
      v-if="appConfig.socials?.github"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://github.com/${appConfig.socials.github.repo}`"
      title="GitHub"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.socials.github.icon" />
    </a>
    <a
      v-if="appConfig.socials?.codeberg"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://codeberg.org/${appConfig.socials.codeberg.user}`"
      title="Codeberg"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.socials.codeberg.icon" />
    </a>
    <a
      v-if="appConfig.socials?.mastodon"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://${appConfig.socials.mastodon.host}/${appConfig.socials.mastodon.user}`"
      title="Mastodon"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.socials.mastodon.icon" />
    </a>
    <a
      v-if="appConfig.socials?.bluesky"
      class="hover:text-ctp-mauve transition-colors"
      :href="`https://bsky.app/profile/${appConfig.socials.bluesky.user}`"
      title="Bluesky"
    >
      <Icon :class="`size-${iconSize}`" :name="appConfig.socials.bluesky.icon" />
    </a>
  </div>
</template>
