<template>
  <Card class="w-[160px] max-w-[95vw]" style="padding: 0.5em">
    <h3>
      <label class="bg-red-400 px-2">{{ title }}</label>
    </h3>
    <div>
      <ArticleItem v-for="item in news" :item="item" class="mb-2" />
    </div>
  </Card>
</template>
<script lang="ts" setup>
import { NEWS } from '@/shared/articles';

const { dispNum, title = '最近のニュース' } = defineProps<{ dispNum?: number; title?: string }>();

const news = ref([]);

if (dispNum > 0) {
  news.value = NEWS.slice(0, dispNum);
} else {
  news.value = NEWS;
}
</script>
