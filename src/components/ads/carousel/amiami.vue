<template>
  <AdsCarousel :items="items" />
</template>
<script lang="ts" setup>
const adAmiami = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+66H9D" rel="nofollow">
  <img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=250118024166&amp;wid=001&amp;eno=01&amp;mid=s00000003017001038000&amp;mc=1">
</a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+66H9D" alt="">
 `;

// アベンチュリンねんどろいどどーる
const adAve = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-183997%26a8%3DJgHMsgTYwGp2_fpLukS8lKotNZesmYHBUYpEyHPBzFnStNPGyGvESNnLu8zNodHJzguKwNvDMmQrxs00000003017001%26_gl%3D1%252a1xlhkv%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTc0MjY4MzQ4Ni4xMTguMS4xNzQyNjgzNjIxLjAuMC4w" rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-183997.jpg"/></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="" />
`;

// カフカフィギュア
const adKafka = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181818%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1g1f9nt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEzMzc0Ny41MS4xLjE3MzgxMzM3NzkuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181818.jpg"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">
`;

// 八重神子フィギュア
const adMiko = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-183456%26a8%3DJgHMsgTYwGp2_fpLukS8lKotNZesmYHBUYpEyHPBzFnStNPGyGvESNnLu8zNodHJzguKwNvDMmQrxs00000003017001%26_gl%3D1%252anokx2y%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTc0MTM1NDgzNC4xMDUuMS4xNzQxMzU1MDk5LjAuMC4w" rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-183456.jpg"/></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="" />
`;

// エウルアフィギュア
const ad1 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181372%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a4qnya7%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM0MjMuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181372.jpg"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">`;

// タルタル魔王武装フィギュア
const ad2 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-179675%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252abfri8s%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM0NTcuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/244/FIGURE-179675.jpg"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">
`;
// 原神シールウエハース２フィギュア
const ad3 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DGOODS-04584518%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252ak0u0gt%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM1MDUuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/GOODS-04584518.jpg"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">
`;
// フモフィギュア
const ad4 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181645%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a679im%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM1NTIuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181645.jpg"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">
`;
// パムフィギュア
const ad5 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181644%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252aca84xd%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM2ODYuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181644.jpg"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">`;
// 景元フィギュア
const ad6 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZYY+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-180320%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qnPXr_R.s97.1uesN9JaFmlANzezshGAN.mvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252au2qprq%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczODEwMTkzNy41MC4xLjE3MzgxMDM1ODUuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/244/FIGURE-180320.jpg"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZYY+NA2+BWGDT" alt="">
`;

const items = [adAmiami, adAve, adMiko, adKafka, ad1, ad2, ad3, ad4, ad5, ad6];
</script>
