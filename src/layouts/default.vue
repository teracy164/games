<template>
  <div class="flex flex-col h-full">
    <Header style="height: 3em; min-height: 3em; max-height: 3em" class="no-print" />
    <main class="grow overflow-auto p-1 flex flex-col">
      <div class="flex grow">
        <AdsVerticalRandom />

        <div class="flex grow md:p-3 flex">
          <div class="grow order-2 lg:order-1">
            <slot />
          </div>

          <div class="hidden lg:block flex justify-center order-1 lg:order-2 ml-2">
            <ArticleList :disp-num="5" />
          </div>
        </div>

        <AdsVerticalRandom />
      </div>

      <div class="no-print text-center my-2 px-2 flex flex-wrap justify-between" style="font-size: 0.7rem">
        <div>Created by teracy</div>
        <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { SERVICE_NAME } from '../shared/project';

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
