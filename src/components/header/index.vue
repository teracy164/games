<template>
  <div class="header">
    <div class="flex items-center">
      <div class="menu-item font-bold text-lg" @click="navigateTo('/')">{{ SERVICE_NAME }}</div>
    </div>
    <div class="menu-item" @click="visibleDrawer = true">menu</div>

    <el-drawer v-model="visibleDrawer" :with-header="false" class="header-menu-drawer">
      <div>
        <h1>
          <span class="border-b px-2">鳴潮</span>
        </h1>
        <div class="pl-5">
          <NuxtLink class="sub-menu-item" to="/ww/">
            <el-link type="primary"> 育成計算機 </el-link>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-5">
        <h1>
          <span class="border-b mx-2">ゼンレスゾーンゼロ</span>
        </h1>
        <div class="pl-5">
          <p>以下のサイトにて公開中</p>
          <el-link type="primary">
            <a :href="ZZZ_TOOLS_URL" target="_blank">{{ ZZZ_TOOLS_URL }}</a>
          </el-link>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import { SERVICE_NAME, ZZZ_TOOLS_URL } from '~/shared/project';

const visibleDrawer = ref(false);
</script>
<style lang="scss">
.header {
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;

  .logo:hover {
    background-color: #333;
  }
  .menu-item {
    cursor: pointer;
    margin: 0 0.5em;
    padding: 0 0.5em;
    border-radius: 5px;
    a {
      text-decoration: none;
      color: white;
    }
  }
  .menu-item:hover {
    background-color: #333;
  }
}
.header-menu-drawer {
  background-color: #111 !important;
  color: white !important;
  border-left: 1px solid white;

  .sub-menu-item {
    width: 100%;
    padding: 0.25em 0.5em;

    &:hover {
      background-color: #333;
    }
  }
}
</style>
