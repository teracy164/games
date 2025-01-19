<template>
  <div class="materials">
    <MaterialCalculator />

    <div class="flex justify-center py-5">
      <div class="m-1">
        <a href="https://px.a8.net/svt/ejp?a8mat=44WVJ1+G2PCS2+5I7U+5YZ75" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt=""
            src="https://www26.a8.net/svt/bgt?aid=250117021972&wid=001&eno=01&mid=s00000025689001003000&mc=1"
        /></a>
        <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44WVJ1+G2PCS2+5I7U+5YZ75" alt="" />
      </div>
      <div class="m-1">
        <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+66H9D" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt=""
            src="https://www25.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001038000&mc=1"
        /></a>
        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+66H9D" alt="" />
      </div>
      <div class="m-1">
        <a href="https://px.a8.net/svt/ejp?a8mat=44WUR2+3RQUPE+4AHY+5ZMCH" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt=""
            src="https://www25.a8.net/svt/bgt?aid=250116014228&wid=001&eno=01&mid=s00000020023001006000&mc=1"
        /></a>
        <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=44WUR2+3RQUPE+4AHY+5ZMCH" alt="" />
      </div>
    </div>

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
