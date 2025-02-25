<template>
  <ArticleTemplate :news="news">
    <div class="mb-5">
      崩壊スターレイルの一番くじの再販売が決定！！！
      <br />
      1回780円（税込）で、一番くじONLINEでの販売となります。
      <br />
      <br />
      A賞からC賞は光円錐のタペストリー、D賞は開拓者おなじみのゴミ箱のマグカップです！！
      <br />
      E賞以降もマルチクロスやアクリルチャーム、ラバーコースターと魅力的なラインナップとなっております。

      <div class="my-5">
        <div class="w-full flex flex-col justify-center items-center">
          <Tweet tweet-id="1886338955446243466" style="width: 500px; max-width: 90vw" />
        </div>
      </div>

      <p>さらにダブルチャンスキャンペーンでラストワン章のイラストボードが当たるチャンスもあります！！</p>

      <h3 class="mt-5"><label class="bg-red-400 px-2">詳細情報</label></h3>
      <table class="item-info">
        <tbody>
          <tr>
            <th>発売日</th>
            <td>2025年04月23日 17時より</td>
          </tr>
          <tr>
            <th>価格</th>
            <td>
              <p>1回780円(税込)</p>
            </td>
          </tr>
          <tr>
            <th>各等賞</th>
            <td>
              <ul>
                <li>A賞 夜明け前 タペストリー</li>
                <li>B賞 この身は剣なり タペストリー</li>
                <li>C賞 陽光より輝くもの タペストリー</li>
                <li>D賞 マグカップ</li>
                <li>E賞 マルチクロス</li>
                <li>F賞 アクリルチャーム</li>
                <li>G賞 ラバーコースター</li>
                <li>ラストワン賞 イラストボードセット</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>販売店</th>
            <td>一番くじONLINE</td>
          </tr>
          <tr>
            <th>販売ページ</th>
            <td>
              <el-link type="primary">
                <a href="https://1kuji.com/products/houkaistarrail-2">
                  一番くじ 崩壊：スターレイル｜一番くじ倶楽部｜BANDAI SPIRITS公式 一番くじ情報サイト
                </a>
              </el-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AdsCarouselAmiami class="my-5" />

    <div class="flex flex-col justify-center items-center">
      <img src="https://sf.1kuji.com/page/houkaistarrail/0801/202408_star_lineup_0725_full.jpg" />
      <p>© Copyright (C) miHoYo. All Rights Reserved</p>
    </div>
  </ArticleTemplate>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/articles';
import Tweet from 'vue-tweet';

const route = useRoute();
const pageId = route.fullPath
  .split('/')
  .filter((item) => item)
  .pop();
const news = NEWS.find((item) => item.id === pageId);
if (!news) {
  navigateTo('/');
}
</script>
