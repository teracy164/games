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
        崩壊スターレイルよりカフカが1/7スケールのフィギュアで登場！
        <br />
        あみあみにて予約が始まっています。
        <br />
        発売日は2026年1月となっております。

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
              rel="nofollow"
            >
              <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181818.jpg"
            /></a>
            <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
        </div>

        <p class="my-5">
          刀の細部や服のしわまでしっかりと作りこまれたハイクオリティなフィギュアとなっています。
          <br />
          ※台座の模様はUVライトを当てることで暗所で発光
        </p>

        <AdsCarouselAmiami class="my-5" />

        <h3 class="mt-5"><label class="bg-red-400 px-2">商品情報</label></h3>
        <table class="item-info">
          <tbody>
            <tr>
              <th>発売日</th>
              <td>2026年01月</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>
                <p>23,100 円(税込)</p>
                <p>※あみあみでは2%OFFの22,630円(税込)</p>
              </td>
            </tr>
            <tr>
              <th>製品仕様</th>
              <td>
                サイズ：高さ約26.5cm(台座含め)
                <br />
                素材：PVC＆ABS
                <br />
                特典：色紙
              </td>
            </tr>
            <tr>
              <th>ブランド</th>
              <td>APEX</td>
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
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
                          rel="nofollow"
                          >【特典】崩壊：スターレイル カフカ 1/7 完成品フィギュア[APEX]【送料無料】《０１月予約》</a
                        >
                        <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BW8O2" alt="" />
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
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181818_10.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181818_03.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181818_13.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
          <p>© Copyright (C) miHoYo. All Rights Reserved</p>
        </div>
        <div class="flex flex-col items-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/review/251/FIGURE-181818_15.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
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
