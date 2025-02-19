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
        <ShareBtnTwitter v-if="href" :title="news.title" :hash-tags="news.hashTags" :page-url="href" />
      </div>

      <div class="mb-5">
        崩壊スターレイルのPS5ディスクギフトパックが1月31日発売！

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <el-link type="primary" :underline="false">
              <table cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #ccc; width: 300px">
                <tbody>
                  <tr style="border-style: none">
                    <td style="vertical-align: top; border-style: none; padding: 10px; width: 108px">
                      <a
                        href="https://rpx.a8.net/svt/ejp?a8mat=44WUR2+24SYL6+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00pxei4.2bo1113d.g00pxei4.2bo12887%2Fa25011642164_44WUR2_24SYL6_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fmachida%252F4897137050024%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fmachida%252Fi%252F10536793%252F%26amp%3Brafcid%3Dwsc_i_is_33f72da33714639c415e592c9633ecd7"
                        rel="nofollow"
                        ><img
                          border="0"
                          alt=""
                          src="https://thumbnail.image.rakuten.co.jp/@0_mall/machida/cabinet/img10800000/10805926.jpg?_ex=128x128"
                      /></a>
                    </td>
                    <td style="font-size: 12px; vertical-align: middle; border-style: none; padding: 10px">
                      <p style="padding: 0; margin: 0">
                        <a
                          href="https://rpx.a8.net/svt/ejp?a8mat=44WUR2+24SYL6+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00pxei4.2bo1113d.g00pxei4.2bo12887%2Fa25011642164_44WUR2_24SYL6_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fmachida%252F4897137050024%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fmachida%252Fi%252F10536793%252F%26amp%3Brafcid%3Dwsc_i_is_33f72da33714639c415e592c9633ecd7"
                          rel="nofollow"
                          >【01/31発売★予約】【新品】【PS5】崩壊：スターレイル　ディスクギフトパック　開拓者エディション[予約品]</a
                        >
                      </p>
                      <p style="color: #666; margin-top: 5px; line-height: 1.5em">
                        価格:<span style="font-size: 14px; color: #c00; font-weight: bold">5040円</span><br /><span
                          style="font-size: 10px; font-weight: normal"
                          >(2025/1/31 07:05時点)</span
                        ><br /><span style="font-weight: bold">感想(0件)</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WUR2+24SYL6+2HOM+BWGDT" alt="" />
            </el-link>
            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
        </div>

        <p class="my-5">
          基本無料のスターレイルですが、豊富な特典付きでディスク版として登場！！
          <br />
          なお、ディスクパックがなくてもスターレイルは無料でインストール可能です。
          <br />
          <br />
          また、シリアルコードはPCやスマホでプレイしている方でも利用可能となっています。
        </p>

        <h3 class="mt-5"><label class="bg-red-400 px-2">商品情報</label></h3>
        <table class="item-info">
          <tbody>
            <tr>
              <th>発売日</th>
              <td>2025年01月31日</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>
                <p>5,040 円(税込)</p>
              </td>
            </tr>
            <tr>
              <th>同梱物</th>
              <td>
                【同梱物】
                <br />
                ・PS5ゲーム本体ディスク及びディスクパッケージ
                <br />
                ・キャラクターホログラムカードセット×1
                <br />
                　（ホタル、黄泉、アベンチュリン、カフカ、刃、花火、ゼーレ、鏡流、ロビン）
                <br />
                ・PS5限定ちびキャラホログラムキーホルダー・開拓者×2
                <br />
                ・PS5限定ポストカード×1（ゲーム内シリアルコード付き）
                <br />
                ・ゲーム内シリアルコード×1
                <br />
                <br />
                【ゲーム内シリアルコードの内容】
                <br />
                ・<span class="ml-2">『星穹列車』ゲームディスク×1</span>
                <br />
                ・レシピ：『星穹列車』ゲームディスク×1（ギフトパック限定アイテム）
                <br />
                ・星玉×50
                <br />
                ・信用ポイント×30000
                <br />
                <br />
                ＊このシリアルコードは、モバイル端末、PCおよびPlayStation5などのプラットフォームでご使用いただけます。
                このシリアルコードは2025年1月15日 14:00（UTC+8）以降に有効となります。
                各報酬は1つの『崩壊：スターレイル』アカウントにつき1回まで受け取れます。
              </td>
            </tr>
            <tr>
              <th>対応機種</th>
              <td>PS5</td>
            </tr>

            <tr>
              <th>販売ページ</th>
              <td>
                <ul>
                  <li>
                    <p>【楽天】</p>
                    <div>
                      <el-link type="primary" :underline="false">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-style: none; width: 300px">
                          <tbody>
                            <tr style="border-style: none">
                              <td style="vertical-align: top; border-style: none; padding: 10px; width: 108px">
                                <a
                                  href="https://rpx.a8.net/svt/ejp?a8mat=44WUR2+24SYL6+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00pxei4.2bo1113d.g00pxei4.2bo12887%2Fa25011642164_44WUR2_24SYL6_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fmachida%252F4897137050024%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fmachida%252Fi%252F10536793%252F%26amp%3Brafcid%3Dwsc_i_is_33f72da33714639c415e592c9633ecd7"
                                  rel="nofollow"
                                  ><img
                                    border="0"
                                    alt=""
                                    src="https://thumbnail.image.rakuten.co.jp/@0_mall/machida/cabinet/img10800000/10805926.jpg?_ex=128x128"
                                /></a>
                              </td>
                              <td style="font-size: 12px; vertical-align: middle; border-style: none; padding: 10px">
                                <p style="padding: 0; margin: 0">
                                  <a
                                    href="https://rpx.a8.net/svt/ejp?a8mat=44WUR2+24SYL6+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00pxei4.2bo1113d.g00pxei4.2bo12887%2Fa25011642164_44WUR2_24SYL6_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Fmachida%252F4897137050024%252F%26amp%3Bm%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Fmachida%252Fi%252F10536793%252F%26amp%3Brafcid%3Dwsc_i_is_33f72da33714639c415e592c9633ecd7"
                                    rel="nofollow"
                                    >【01/31発売★予約】【新品】【PS5】崩壊：スターレイル　ディスクギフトパック　開拓者エディション[予約品]</a
                                  >
                                </p>
                                <p style="color: #666; margin-top: 5px; line-height: 1.5"></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WUR2+24SYL6+2HOM+BWGDT" alt="" />
                      </el-link>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AdsCarouselAmiami class="my-5" />
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
const news = NEWS.find((item) => item.id === pageId);
if (!news) {
  navigateTo('/');
}

const description = [news.description].join('\n');
useSeoMeta({ title: news.title, ogTitle: news.title, description, ogDescription: description });

const href = ref('');
onMounted(() => {
  href.value = location?.href;
});
</script>
<style lang="scss" scoped>
table.item-info {
  th,
  td {
    border: 1px solid lightgray;
    padding: 0.25em;
    word-break: break-all;
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
