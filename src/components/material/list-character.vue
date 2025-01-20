<template>
  <div>
    <h2>
      <label>キャラ - Character</label>
    </h2>
    <div class="material-list">
      <div>
        <h3 class="font-bold">突破素材 - Ascend Materials</h3>
        <div style="overflow-x: auto; max-width: 90vw">
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
                <th style="min-width: 4.5em">ｼｪﾙｺｲﾝ<br />Shell Credit</th>
                <th style="min-width: 10em">雑魚敵素材<br />Enemy</th>
                <th style="min-width: 3em">ボス素材<br />Boss</th>
                <th style="min-width: 3em">採集素材<br />Collection</th>
                <th style="min-width: 4.5em">ｼｪﾙｺｲﾝ<br />Shell Credit</th>
                <th style="min-width: 8em">雑魚敵素材<br />Enemy</th>
                <th style="min-width: 3em">ボス素材<br />Boss</th>
                <th style="min-width: 3em">採集素材<br />Collection</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in materials.ascend">
                <td>{{ item.lv }}</td>
                <td>{{ item.money.toLocaleString() }}</td>
                <td>
                  <span class="rarity" :class="{ [item.enemy.rarity]: true }"> {{ MEICHO_RARITY_LABEL[item.enemy.rarity] }}</span>
                  <span> x </span>
                  <span>{{ item.enemy.num }}</span>
                </td>
                <td>{{ item.boss.num }}</td>
                <td>{{ item.collection.num }}</td>

                <td>{{ item.sum.money.toLocaleString() }}</td>
                <td>
                  <div class="flex flex-col">
                    <template v-for="key in Object.keys(item.sum.enemy)">
                      <div class="material whitespace-nowrap" style="width: 10em; margin: 2px">
                        <span class="rarity" :class="{ [key]: true }"> {{ MEICHO_RARITY_LABEL[key] }}</span>
                        <span> x </span>
                        <span>{{ item.sum.enemy[key] }}</span>
                      </div>
                    </template>
                  </div>
                </td>
                <td>{{ item.sum.boss.num }}</td>
                <td>{{ item.sum.collection.num }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-2">
        <h3>育成素材 - Exp</h3>
        <div style="overflow-x: auto; max-width: 90vw">
          <table class="border">
            <thead>
              <tr>
                <th rowspan="2" style="min-width: 4em">Lv</th>
                <th colspan="2">段階ごと<br />Step By Step</th>
                <th colspan="2">累計<br />Total</th>
              </tr>
              <tr>
                <th>経験値<br />Required Exp</th>
                <th>素材<br />Exp Materials</th>
                <th>経験値<br />Required Exp</th>
                <th>素材<br />Exp Materials</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in materials.exp">
                <td>{{ item.lv }}</td>
                <td>{{ item.require.toLocaleString() }}</td>
                <td>
                  <div class="whitespace-nowrap">
                    <span class="rarity" :class="{ [item.materials.rarity]: true }"> {{ MEICHO_RARITY_LABEL[item.materials.rarity] }}</span>
                    <span> x </span>
                    <span>{{ item.materials.num }}</span>
                  </div>
                </td>
                <td>{{ item.sumExp.toLocaleString() }}</td>
                <td>
                  <div class="whitespace-nowrap">
                    <span class="rarity" :class="{ [item.sum.rarity]: true }"> {{ MEICHO_RARITY_LABEL[item.sum.rarity] }}</span>
                    <span> x </span>
                    <span>{{ item.sum.num }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MEICHO_RARITY_LABEL } from '~/shared/meicho/constants';

const { $meicho } = useNuxtApp();

const materials = $meicho.getCharacterMaterials();
</script>
