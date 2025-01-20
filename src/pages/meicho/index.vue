<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <NuxtLink to="/meicho/materials">
        <Card class="btn">
          <h1 class="text-xl font-bold mb-2">育成計算機 - Material Calculator</h1>
          <p>キャラ・武器の育成に必要な素材の数を計算します</p>
          <p>各種レベルを指定して、指定レベルで必要な素材を計算できます</p>
          <p>レベルごとに必要な素材の一覧もこちらからご覧ください</p>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
const description = [
  '鳴潮（Wuthering Waves）のツールです。',
  'キャラ・武器を育成するための素材の数を確認することできます。',
  'Wuthering Waves materials calculator',
].join('\n');

useSeoMeta({
  title: '鳴潮Lab | Wuthering Waves Tools',
  ogTitle: '鳴潮Lab | Wuthering Waves Tools',
  description,
  ogDescription: description,
});
</script>
