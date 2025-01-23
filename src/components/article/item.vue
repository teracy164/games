<template>
  <div>
    <p class="text-gray-300 text-xs">{{ item.createdAt }}</p>
    <NuxtLink :to="item.link">
      <el-link type="primary">
        {{ item.title }}
      </el-link>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { type ArticleItem } from '~/types/articles';
const { item } = defineProps<{ item: ArticleItem }>();
</script>
