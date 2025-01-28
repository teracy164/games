<template>
  <div class="h-full flex flex-col justify-center items-center">
    <NuxtLink to="/zzz" class="m-5">
      <el-link type="primary" :underline="false" style="font-size: 24px">
        <Card class="text-center btn" style="width: 300px; max-width: 90vw"> ゼンレスゾーンゼロ </Card>
      </el-link>
    </NuxtLink>

    <NuxtLink to="/meicho" class="m-5">
      <el-link type="primary" :underline="false" style="font-size: 24px">
        <Card class="text-center btn" style="width: 300px; max-width: 90vw"> 鳴潮 </Card>
      </el-link>
    </NuxtLink>

    <AdsCarouselAmiami class="my-5" />
  </div>
</template>
