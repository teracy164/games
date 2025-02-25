<template>
  <Default>
    <NuxtPage />
  </Default>
</template>
<script lang="ts" setup>
import Default from './layouts/default.vue';
import { SERVICE_NAME } from './shared/project';

const description = [
  'てらしーによるゲーム情報発信用サイトです。',
  '原神・スターレイル・ゼンレスゾーンゼロ、鳴潮などのゲームについて発信しています。',
].join('\n');

useSeoMeta({
  title: SERVICE_NAME,
  ogTitle: SERVICE_NAME,
  description,
  ogDescription: description,
});
</script>
