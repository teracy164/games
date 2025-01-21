<template>
  <div class="flex justify-center">
    <Card class="grow" style="width: 100%; max-width: 800px">
      <div class="relative">
        <h1 class="bg-red-500 p-2">
          <label>{{ news.title }}</label>
        </h1>
        <div class="absolute text-sm text-gray-500" style="bottom: 100%; right: 0; font-size: 0.7em; line-height: 1em">
          {{ news.createdAt }}
        </div>
      </div>

      <div class="flex justify-end my-2">
        <ShareBtnTwitter :title="news.title" :hash-tags="news.hashTags" :page-url="getPageUrl()" />
      </div>

      <div class="mb-5">
        原神よりエウルアの1/7スケールのフィギュアが登場しました。
        <br />
        あみあみにて予約が始まっています。

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
              rel="nofollow"
            >
              <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181372.jpg"
            /></a>
            <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />

            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
        </div>

        <p class="my-5">
          エウルアの立ち絵をモチーフとしたポーズで、旧貴族らしく凛とした立ち姿となっています。
          <br />
          左手は武器を持たないパーツも付属するため、まるで踊っているかのようなポーズで飾ることも可能です。
        </p>

        <div class="my-2 flex justify-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+5YJRL" rel="nofollow">
            <img
              border="0"
              width="468"
              height="60"
              alt=""
              src="https://www24.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001001000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+5YJRL" alt="" />
        </div>

        <h3 class="mt-5"><label class="bg-red-400 px-2">商品情報</label></h3>
        <table class="item-info">
          <tbody>
            <tr>
              <th>発売日</th>
              <td>2025年11月</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>
                <p>30,580円(税込)</p>
                <p>※あみあみでは10%OFFの27,520円(税込)</p>
              </td>
            </tr>
            <tr>
              <th>製品仕様</th>
              <td>スケール：1/7　サイズ：全高：約290mm 、素材：プラスチック</td>
            </tr>

            <tr>
              <th>販売ページ</th>
              <td>
                <ul>
                  <li>
                    <p>【あみあみ】</p>
                    <div>
                      <el-link type="primary">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
                          rel="nofollow"
                          >原神 エウルア 波沫のワルツVer. 1/7 完成品フィギュア[Wonderful Works]【送料無料】《１１月予約》</a
                        >
                        <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BW8O2" alt="" />
                      </el-link>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181372_02.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181372_08.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>

        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181372_12.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>

        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1ekyxqv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzQ0Njg2MC4yNS4xLjE3Mzc0NDY5MDkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181372_13.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/articles';
const news = NEWS.find((item) => item.id === 'genshin-eula-figure-20250121');

const description = ['原神のエウルアのフィギュアが登場！！'].join('\n');
useSeoMeta({
  title: news.title,
  ogTitle: news.title,
  description,
  ogDescription: description,
});

const getPageUrl = () => {
  return location.href;
};
</script>
<style lang="scss" scoped>
table.item-info {
  th,
  td {
    border: 1px solid lightgray;
    padding: 0.25em;
  }
  th {
    min-width: 5em;
    text-align: left;
  }
  li + li {
    margin-top: 0.5em;
  }
}
</style>
