<template>
  <div>
    <h2>&lt;キャラ - Character&gt;</h2>
    <div class="material-list">
      <div>
        <h3 class="font-bold">突破素材 - Breakthrough</h3>
        <table class="border">
          <thead>
            <tr>
              <th rowspan="2">Lv</th>
              <th colspan="4">
                段階ごと<br />
                Step by Step
              </th>
              <th colspan="4">累計<br />Total</th>
            </tr>
            <tr>
              <th>シェルコイン<br />Shell Credit</th>
              <th>雑魚敵素材<br />Enemy</th>
              <th>ボス素材<br />Boss</th>
              <th>採集素材<br />Collection</th>
              <th>シェルコイン<br />Shell Credit</th>
              <th>雑魚敵素材<br />Enemy</th>
              <th>ボス素材<br />Boss</th>
              <th>採集素材<br />Collection</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.breakthrough">
              <td>{{ item.lv }}</td>
              <td>{{ item.money.toLocaleString() }}</td>
              <td>
                <span class="rarity" :class="{ [item.enemy.rarity]: true }"> {{ rarityLabel[item.enemy.rarity] }}</span>
                <span> x </span>
                <span>{{ item.enemy.num }}</span>
              </td>
              <td>{{ item.boss.num }}</td>
              <td>{{ item.collection.num }}</td>

              <td>{{ item.sum.money.toLocaleString() }}</td>
              <td>
                <template v-for="key in Object.keys(item.sum.enemy)">
                  <span class="material mr-2" v-if="item.sum.enemy[key]">
                    <span class="rarity" :class="{ [key]: true }"> {{ rarityLabel[key] }}</span>
                    <span> x </span>
                    <span>{{ item.sum.enemy[key] }}</span>
                  </span>
                </template>
              </td>
              <td>{{ item.sum.boss.num }}</td>
              <td>{{ item.sum.collection.num }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>育成素材 - Exp</h3>
        <table class="border">
          <thead>
            <tr>
              <th rowspan="2">Lv</th>
              <th colspan="2">段階ごと</th>
              <th colspan="2">累計</th>
            </tr>
            <tr>
              <th>経験値</th>
              <th>素材</th>
              <th>経験値</th>
              <th>素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.exp">
              <td>{{ item.lv }}</td>
              <td>{{ item.require.toLocaleString() }}</td>
              <td>
                <span class="rarity" :class="{ [item.materials.rarity]: true }"> {{ rarityLabel[item.materials.rarity] }}</span>
                <span> x </span>
                <span>{{ item.materials.num }}</span>
              </td>
              <td>{{ item.sumExp.toLocaleString() }}</td>
              <td>
                <span class="rarity" :class="{ [item.sum.rarity]: true }"> {{ rarityLabel[item.sum.rarity] }}</span>
                <span> x </span>
                <span>{{ item.sum.num }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>スキル</h3>
        TODO
        <!-- <table class="border">
          <thead>
            <tr>
              <th>Lv</th>
              <th>シェルコイン</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.skill">
              <td>{{ item.lv }}</td>
              <td>{{ item.money.toLocaleString() }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p class="flex items-center">
                  <NuxtImg src="/images/denny.webp" alt="シェルコイン" style="width: 1em; height: 1em" />
                  <span class="mx-1">x</span>
                  {{ item.sum.money.toLocaleString() }}
                </p>
                <template v-for="key in Object.keys(item.sum)">
                  <span class="material" v-if="key !== 'money' && item.sum[key]">{{ key }} x {{ item.sum[key] }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { RARITY } from '~/types/material';

const { $meicho } = useNuxtApp();

const materials = $meicho.getCharacterMaterials();

const rarityLabel = {
  premium: '特級(Premium)',
  advanced: '高級(Advanced)',
  medium: '中級(Medium)',
  basic: '基本(Basic)',
};
</script>
<style lang="scss" scoped>
.rarity {
  padding: 0 3px;
  border-radius: 5px;

  &.premium {
    background-color: rgb(129, 110, 1);
  }
  &.advanced {
    background-color: rgb(92, 0, 92);
  }
  &.medium {
    background-color: rgb(106, 161, 184);
  }
  &.basic {
    background-color: gray;
  }
}
</style>
