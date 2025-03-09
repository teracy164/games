<template>
  <div class="materials">
    <MaterialCalculator />

    <AdsCarouselAmiami class="my-5" />

    <MaterialList />
  </div>
</template>
<script lang="ts" setup>
import { SERVICE_NAME } from '~/shared/project';

const description = [
  '鳴潮用の育成計算機です。',
  'キャラのLvやスキルのLv、武器のLvを指定することで、育成に必要な素材をまとめて計算します。',
  'キャラや武器の育成素材の段階ごとの必要数もこちらで確認することができます。',
].join('\n');

useSeoMeta({
  title: `鳴潮 - 育成計算機 | ${SERVICE_NAME}`,
  ogTitle: `鳴潮 - 育成計算機 | ${SERVICE_NAME}`,
  description,
  ogDescription: description,
});
</script>
