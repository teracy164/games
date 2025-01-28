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
        崩壊スターレイルより花火人形がHuggyとなって登場！
        <br />
        あみあみにて予約が始まっています。

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181645%26_gl%3D1%252agqxiak%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDI0MzQuMC4wLjA."
              rel="nofollow"
            >
              <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181645.jpg"
            /></a>
            <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
        </div>

        <p class="my-5">
          花火人形とはゲーム内キャラクター「花火」が使う人形で通称「フモ」と呼ばれる人形です。
          <br />
          頭部にはマグネットが搭載されており、両手を上下に可動させてポーズを取ることも可能です！
        </p>

        <AdsCarouselAmiami class="my-5" />

        <h3 class="mt-5"><label class="bg-red-400 px-2">商品情報</label></h3>
        <table class="item-info">
          <tbody>
            <tr>
              <th>発売日</th>
              <td>2025年7月</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>
                <p>1,800円(税込)</p>
                <p>※あみあみでは10%OFFの1,620円(税込)</p>
              </td>
            </tr>
            <tr>
              <th>製品仕様</th>
              <td>サイズ：全高：約65mm 、素材：プラスチック、その他：後頭部にはマグネットを搭載</td>
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
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181645%26_gl%3D1%252agqxiak%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDI0MzQuMC4wLjA."
                          rel="nofollow"
                          >Huggy Good Smile 崩壊：スターレイル 花火爆弾人形[グッドスマイルカンパニー]《０７月予約》</a
                        >
                        <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BW8O2" alt="" />
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
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181645%26_gl%3D1%252agqxiak%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDI0MzQuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181645_01.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181645%26_gl%3D1%252agqxiak%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDI0MzQuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181645_05.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/articles';

const route = useRoute();
const pageId = route.fullPath
  .split('/')
  .filter((item) => item)
  .pop();
console.log(route, route.fullPath, route.fullPath.split('/'), route.fullPath.split('/').pop(), pageId);
const news = NEWS.find((item) => item.id === pageId);
if (!news) {
  navigateTo('/');
}

const description = [news.description].join('\n');
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
