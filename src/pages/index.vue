<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="m-2">
      <a href="https://zzz.teracy.link/" target="_blank" class="text-xl">
        <el-link type="primary" :underline="false" style="font-size: 24px">
          <Card class="text-center btn" style="width: 300px; max-width: 90vw">
            ゼンレスゾーンゼロ
            <div class="mt-5 text-sm">
              以下サイトにて公開中
              <p>https://zzz.teracy.link/</p>
            </div>
          </Card>
        </el-link>
      </a>
    </div>

    <div class="m-2">
      <NuxtLink to="/ww">
        <el-link type="primary" :underline="false" style="font-size: 24px">
          <Card class="text-center btn" style="width: 300px; max-width: 90vw"> 鳴潮 </Card>
        </el-link>
      </NuxtLink>
    </div>

    <AdsCarouselAmiami class="my-5" />
  </div>
</template>
