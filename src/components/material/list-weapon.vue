<template>
  <div>
    <h2>&lt;武器 - Weapon&gt;</h2>
    TODO
    <!-- <div class="flex items-center">
      <div v-for="rank in ['S', 'A', 'B']" class="mr-2">
        <input
          :id="`radio-list-weapon-${rank}`"
          v-model="selectedRank"
          type="radio"
          name="list-weapon-rank"
          :value="rank"
          @change="changeRank"
        />
        <label :for="`radio-list-weapon-${rank}`" class="px-2">{{ rank }}</label>
      </div>
    </div>
    <div class="material-list">
      <div>
        <h3>突破素材 - Breakthrough</h3>
        <table class="border">
          <thead>
            <tr>
              <th>Lv</th>
              <th>シェルコイン</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.breakthrough">
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
              <th>Exp</th>
              <th>必要数 - Required</th>
              <th>Exp</th>
              <th>必要数 - Required</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.exp">
              <td>{{ item.lv }}</td>
              <td>{{ item.require.toLocaleString() }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td>{{ item.sumExp.toLocaleString() }}</td>
              <td>{{ item.sum.rank }} x {{ item.sum.num }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
const { $meicho } = useNuxtApp();

const selectedRank = ref<'S' | 'A' | 'B'>('S');

const materials = ref($meicho.getWeaponMaterials(selectedRank.value));

const changeRank = () => {
  materials.value = $meicho.getWeaponMaterials(selectedRank.value);
};
</script>
