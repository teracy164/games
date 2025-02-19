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
        崩壊スターレイル公式Xの開拓者ラジオにて今後のアップデートについて発表されました。
        <br />
        主な内容はオンパロスのストーリーに関するものですが、その中に気になる１文がありました。

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <Tweet tweet-id="1887003217659089117" style="width: 500px; max-width: 90vw" />
          </div>
        </div>
        <p>
          なんと、
          <span class="text-red-300">
            「過去に登場したキャラクターを先頭に出しづらい」という問題に対し、キャラクターの強化や調整を行っていく
          </span>
          と明言されています！
        </p>

        <AdsCarouselAmiami class="my-5" />

        <div>
          <br />
          <p>
            最近ではホタルを始めとした靭性無視のキャラが実装されて銀狼の弱点を埋め込みが不要になったり、
            ゼーレや彦卿といった初期のアタッカーが現環境では火力不足だったりと明らかに出番が少なくなっているキャラが増えていました。
            <br />
            <br />
            私自身カフカが推しなんですが、虚無・雷のアタッカーだと黄泉が強すぎて出番がなくて寂しさを感じていました。
            <br />
            <br />
            強化の内容については言及されていないので、続報に期待しましょう！！
          </p>
          <br />
          <p>詳細はHoYoLABをご覧ください</p>
          <el-link type="primary">
            <a href="https://www.hoyolab.com/article/36867900?utm_source=sns&utm_medium=twitter&utm_id=6">
              開発者ラジオ | Ver.3.0 オンパロス特別編 崩壊：スターレイル | HoYoLAB
            </a>
          </el-link>
        </div>
        <!-- <p>
          <img
            src="https://upload-os-bbs.hoyolab.com/upload/2025/02/05/228ac9ac21e59c3237d17ea6fbbbeecc_5179631966579274644.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
          />
        </p> -->
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/articles';
import Tweet from 'vue-tweet';

const route = useRoute();
const pageId = String(route.fullPath)
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
img {
  width: 100%;
  height: 800px;
  object-fit: cover;
  object-position: 50% 96%;
}
</style>
