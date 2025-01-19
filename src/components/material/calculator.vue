<template>
  <div class="calculator" :key="updKey">
    <h1 class="legend">
      <label class="bg-red-500 px-2" style="border-radius: 2px">育成計算機 - Material calculator</label>
    </h1>
    <div class="conditions">
      <div class="flex flex-col mb-2">
        <label>
          【
          <input id="check-character" type="checkbox" v-model="form.character.include" @change="calcMaterials" />
          <label for="check-character">キャラ - Character</label>
          】
        </label>
        <div class="pl-5">
          <div class="flex items-center">
            <label for="calc-select-character-lv" style="width: 4em">Lv</label>
            <select id="calc-select-character-lv" v-model="form.character.lv" @change="calcMaterials" :disabled="!form.character.include">
              <option v-for="lv in [0, 20, 40, 50, 60, 70, 80, 90]" :value="lv">{{ lv }}</option>
            </select>
            <input
              id="character-ascend"
              v-model="form.character.isAscend"
              type="checkbox"
              style="margin-left: 1em"
              @change="calcMaterials"
              :disabled="!form.character.include || form.character.lv === 90"
            />
            <label for="character-ascend">突破する(Ascend)</label>
          </div>
        </div>
      </div>
    </div>

    <div class="require-materials">
      <h2 class="text-xl font-bold">
        <label class="bg-red-400 px-2" style="border-radius: 2px">必要素材 - Required</label>
      </h2>

      <table>
        <tr>
          <th>シェルコイン - ShellCredit</th>
          <td>{{ result.money.toLocaleString() }}</td>
        </tr>

        <tr>
          <th>経験値素材(Exp)</th>
          <td>
            <span class="rarity premium"> {{ MEICHO_RARITY_LABEL.premium }}</span>
            x
            {{ result.character.lv.premium }}
          </td>
        </tr>
        <tr>
          <th>雑魚素材(Enemy)</th>
          <td>
            <span v-for="rarity in Object.keys(result.character.enemy)" class="mr-2">
              <span class="rarity" :class="{ [rarity]: true }"> {{ MEICHO_RARITY_LABEL[rarity] }}</span>
              x
              {{ result.character.enemy[rarity] }}
            </span>
          </td>
        </tr>
        <tr>
          <th>ボス素材(Boss)</th>
          <td>
            {{ result.character.boss }}
          </td>
        </tr>
        <tr>
          <th>採集素材(collection)</th>
          <td>{{ result.character.collection }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { MaterialExp, MaterialAscend } from '@/types/material';
import { MEICHO_RARITY_LABEL } from '~/shared/meicho/constants';

const { $meicho } = useNuxtApp();

const updKey = ref(0);

/*
  ビルドしたjsで起動した際、imgのsrcを動的に変更すると画像が表示されない。
  回避のために正式なパスを取得する
*/
const images = import.meta.glob('/public/**/*', { eager: true });

const getImagePath = (path: string) => {
  const item = images[`/public${path}`] as any;
  if (item) {
    return item.default;
  }
  return '';
};

const form = reactive({
  character: {
    include: true,
    lv: 90,
    isAscend: true,
  },
});

const result = reactive({
  character: {
    lv: { premium: 0 },
    collection: 0,
    enemy: { premium: 0, advanced: 0, medium: 0, basic: 0 },
    boss: 0,
  },
  money: 0,
});

const calcMaterials = () => {
  result.money = 0;
  result.character.lv = { premium: 0 };
  result.character.collection = 0;
  result.character.enemy = { premium: 0, advanced: 0, medium: 0, basic: 0 };
  result.character.boss = 0;

  const materials = {
    character: $meicho.getCharacterMaterials(),
  };

  const filterExp = (list: MaterialExp[], lv: number) => {
    return list.filter((item) => {
      const matches = item.lv.match(/^(\d*)～(\d*)$/);
      const to = matches?.length > 2 ? Number(matches[2]) : 0;
      return to <= lv;
    });
  };

  const filterAscend = (list: MaterialAscend[], lv: number, includeAscend: boolean) => {
    return list.filter((item) => {
      if (item.lv < lv) return true;
      if (item.lv === lv) {
        return includeAscend;
      }
      return false;
    });
  };

  if (form.character.include) {
    // キャラ突破素材の算出
    filterAscend(materials.character.ascend, form.character.lv, form.character.isAscend).forEach((item) => {
      result.money += item.money;
      console.log(item);
      result.character.collection += item.collection.num;
      result.character.boss += item.boss.num;

      result.character.enemy[item.enemy.rarity] += item.enemy.num;
    });
    // // キャラレベル素材の算出
    const listExp = filterExp(materials.character.exp, form.character.lv);
    console.log(listExp);
    const requiredExp = filterExp(materials.character.exp, form.character.lv).reduce((sum, item) => sum + item.require, 0);
    console.log('required exp', requiredExp, $meicho.calcRequiredExpMaterials(requiredExp));
    result.character.lv.premium = $meicho.calcRequiredExpMaterials(requiredExp);

    // filterExp(materials.character.exp, form.character.lv).forEach((item) => {
    //   result.character.lv[item.materials.rarity] += item.materials.num;
    // });
  }
};

onMounted(() => {
  calcMaterials();
});
</script>
<style lang="scss" scoped>
.calculator {
  margin: 1em 0;
  padding: 0.5em;
  padding-top: 1.5em;
  border: 1px solid white;
  position: relative;

  .legend {
    position: absolute;
    top: -1em;
    font-size: 1.4em;
    padding: 0 0.5em;
    background-color: black;
  }
  .conditions {
    border-bottom: 1px solid white;
    .skill {
      display: flex;
      align-items: center;
      margin-right: 1em;
      label {
        width: 5em;
        display: flex;

        img {
          width: 1.5em;
          height: 1.5em;
        }
      }
      select {
        width: 2.5em;
      }
    }
  }

  .require-materials {
    table {
      th,
      td {
        border: 1px solid white;
        padding: 0.25em;
      }
      th {
        text-align: left;
      }
    }
  }
}
</style>
