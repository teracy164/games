<template>
  <div class="materials">
    <MaterialCalculator />
    <AdsWide />
    <MaterialList />
  </div>
</template>
<script lang="ts" setup>
const description = [
  '鳴潮用の育成計算機です。',
  'キャラのLvやスキルのLv、武器のLvを指定することで、育成に必要な素材をまとめて計算します。',
  'キャラや武器の育成素材の段階ごとの必要数もこちらで確認することができます。',
].join('\n');

useSeoMeta({
  title: '育成計算機 | 鳴潮',
  ogTitle: '育成計算機 | 鳴潮',
  description,
  ogDescription: description,
});
</script>
