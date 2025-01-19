import type { MaterialAscend, MaterialExp, MaterialSkill } from '~/types/material';

export class MeichoPlugin {
  /**
   * 日本語：英語
   *
   * 共鳴者：Resonators
   *
   * ｼｪﾙｺｲﾝ：Shell Credit
   * 消費：Cost
   *
   * 【レアリティ：Rarity】
   *
   * 特級（金）：Premium
   * 高級（紫）：Advanced
   * 中級（青）：Medium
   * 初級（緑）：Basic
   *
   * 【経験値：EXP】
   * キャラ経験値：
   * 　共鳴強化剤：Resonance Potion
   * 音該経験値
   * 　レコードセット：Sealed Tube
   *
   * 突破：Ascend
   *
   * 【武器種】
   * 刀：Sword　　　　 ⇒　スキル素材　金属ドロップ：  Metallic Drip
   * 長刃：Broadlade　⇒　スキル素材　海蝕キメラ：Waveworn Residue239
   * 拳銃：Pistols　　　⇒　スキル素材　結晶燃素：Phlogistom
   * 手甲：Gauntlets　⇒　スキル素材　声律のXX：Cadence
   * 増幅器：Rectifier　⇒　スキル素材 螺旋：Helix
   * Energy Core
   *
   * 【スキル：Forte】
   * 基本攻撃：Normal Attack
   * 共鳴スキル：Resonance Skill
   * 共鳴回路：Forte Circuit
   * 共鳴開放：Resonance Liberation
   * 変奏スキル：Intro Skill
   * 終奏スキル：Outro Skill
   *
   * 音該：Echo
   */

  /** キャラの育成素材一覧を取得 */
  getCharacterMaterials() {
    return {
      ascend: this.getCharacterAscendMaterials(),
      exp: this.getCharacterExpMaterials(),
      skill: this.getCharacterSkillMaterials(),
    };
  }

  /** キャラ突破素材一覧を取得 */
  getCharacterAscendMaterials(): MaterialAscend[] {
    // ★5・★4ともに素材の数は同じ
    return [
      { lv: 20, money: 5000, enemy: { rarity: 'basic', num: 4 }, boss: { num: 0 }, collection: { num: 0 } },
      { lv: 40, money: 10000, enemy: { rarity: 'medium', num: 4 }, boss: { num: 3 }, collection: { num: 4 } },
      { lv: 50, money: 15000, enemy: { rarity: 'medium', num: 8 }, boss: { num: 6 }, collection: { num: 8 } },
      { lv: 60, money: 20000, enemy: { rarity: 'advanced', num: 4 }, boss: { num: 9 }, collection: { num: 12 } },
      { lv: 70, money: 40000, enemy: { rarity: 'advanced', num: 8 }, boss: { num: 12 }, collection: { num: 16 } },
      { lv: 80, money: 80000, enemy: { rarity: 'premium', num: 4 }, boss: { num: 16 }, collection: { num: 20 } },
    ].reduce((list, item, index) => {
      const d = {
        ...item,
        sum: {
          enemy: {
            premium: 0,
            advanced: 0,
            medium: 0,
            basic: 0,
          },
          boss: { num: 0 },
          collection: { num: 0 },
          money: 0,
        },
      } as MaterialAscend;
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        const prev = list[index - 1];
        Object.assign(d.sum.enemy, prev.sum.enemy);
        d.sum.boss.num = prev.sum.boss.num;
        d.sum.collection.num = prev.sum.collection.num;
        d.sum.money = prev.sum.money;
      }
      d.sum.enemy[item.enemy.rarity] += item.enemy.num;
      d.sum.boss.num += item.boss.num;
      d.sum.collection.num += item.collection.num;
      d.sum.money += item.money;
      return list.concat(d);
    }, [] as MaterialAscend[]);
  }

  /** キャラの経験値素材一覧を取得 */
  getCharacterExpMaterials(): MaterialExp[] {
    // S・Aともに素材の数は同じ
    return [
      { lv: '0～20', require: 33300 },
      { lv: '21～40', require: 175500 },
      { lv: '41～50', require: 188300 },
      { lv: '51～60', require: 286600 },
      { lv: '61～70', require: 413000 },
      { lv: '71～80', require: 572400 },
      { lv: '81～90', require: 768900 },
    ].reduce((list, item, index) => {
      const d = {
        ...item,
        materials: { rarity: 'premium', num: this.calcRequiredExpMaterials(item.require) },
        sumExp: 0,
        sum: { rarity: 'premium', num: 0 },
      } as MaterialExp;
      if (index > 0) {
        d.sumExp = list[index - 1].sumExp;
      }
      d.sumExp += d.require;
      d.sum.num = this.calcRequiredExpMaterials(d.sumExp);
      list.push(d);
      return list;
    }, [] as MaterialExp[]);
  }

  /** 経験値から必要な経験値素材の数を算出 */
  calcRequiredExpMaterials(exp: number) {
    // 特級で算出
    return Math.ceil(exp / 20000);
  }

  /** キャラのスキル素材一覧を取得 */
  getCharacterSkillMaterials() {
    // S・Aともに素材の数は同じ
    return [
      { lv: 2, money: 2000, materials: { rank: 'C', num: 2 } },
      { lv: 3, money: 3000, materials: { rank: 'C', num: 3 } },
      { lv: 4, money: 6000, materials: { rank: 'B', num: 2 } },
      { lv: 5, money: 9000, materials: { rank: 'B', num: 3 } },
      { lv: 6, money: 12000, materials: { rank: 'B', num: 4 } },
      { lv: 7, money: 18000, materials: { rank: 'B', num: 6 } },
      { lv: 8, money: 45000, materials: { rank: 'A', num: 5 } },
      { lv: 9, money: 67500, materials: { rank: 'A', num: 8 } },
      { lv: 10, money: 90000, materials: { rank: 'A', num: 10 } },
      { lv: 11, money: 112500, materials: { rank: 'A', num: 12 } },
      { lv: 12, money: 135000, materials: { rank: 'A', num: 15 }, ex: 1 },
    ].reduce((list, item, index) => {
      const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } } as MaterialSkill;
      if (index > 0) {
        // ひとつ前の累計情報をコピー
        Object.assign(d.sum, list[index - 1].sum);
      }
      d.sum[item.materials.rank] += item.materials.num;
      d.sum.money += item.money;
      return list.concat(d);
    }, [] as MaterialSkill[]);
  }

  /** 武器の育成素材一覧を取得 */
  getWeaponMaterials(rank: 'S' | 'A' | 'B' = 'S') {
    return {
      ascend: this.getWeaponAscendMaterials(rank),
      exp: this.getWeaponExpMaterials(rank),
    };
  }

  /** 武器突破素材一覧を取得 */
  getWeaponAscendMaterials(rank: 'S' | 'A' | 'B' = 'S'): MaterialAscend[] {
    // TODO キャラと武器で型を分ける
    return [];
    const table: { [rank: string]: Partial<MaterialAscend>[] } = {
      // S: [
      //   { lv: 10, money: 12000, materials: { rank: 'C', num: 4 } },
      //   { lv: 20, money: 28000, materials: { rank: 'B', num: 12 } },
      //   { lv: 30, money: 60000, materials: { rank: 'B', num: 20 } },
      //   { lv: 40, money: 100000, materials: { rank: 'A', num: 10 } },
      //   { lv: 50, money: 200000, materials: { rank: 'A', num: 20 } },
      // ],
      // A: [
      //   { lv: 10, money: 9600, materials: { rank: 'C', num: 3 } },
      //   { lv: 20, money: 22400, materials: { rank: 'B', num: 10 } },
      //   { lv: 30, money: 48000, materials: { rank: 'B', num: 16 } },
      //   { lv: 40, money: 80000, materials: { rank: 'A', num: 8 } },
      //   { lv: 50, money: 160000, materials: { rank: 'A', num: 16 } },
      // ],
      // B: [
      //   { lv: 10, money: 7200, materials: { rank: 'C', num: 2 } },
      //   { lv: 20, money: 16800, materials: { rank: 'B', num: 7 } },
      //   { lv: 30, money: 36000, materials: { rank: 'B', num: 12 } },
      //   { lv: 40, money: 60000, materials: { rank: 'A', num: 6 } },
      //   { lv: 50, money: 120000, materials: { rank: 'A', num: 12 } },
      // ],
    };
    // return table[rank].reduce((list, item, index) => {
    //   const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } } as MaterialAscend;
    //   if (index > 0) {
    //     // ひとつ前の累計情報をコピー
    //     Object.assign(d.sum, list[index - 1].sum);
    //   }
    //   d.sum[item.materials.rank] += item.materials.num;
    //   d.sum.money += item.money;
    //   return list.concat(d);
    // }, [] as MaterialAscend[]);
  }

  /** 武器の経験値素材一覧 */
  getWeaponExpMaterials(rank: 'S' | 'A' | 'B'): MaterialExp[] {
    const table: { [rank: string]: Partial<MaterialExp>[] } = {
      S: [
        { lv: '0～10', require: 4000 },
        { lv: '11～20', require: 16000 },
        { lv: '21～30', require: 40000 },
        { lv: '31～40', require: 90000 },
        { lv: '41～50', require: 150000 },
        { lv: '51～60', require: 300000 },
      ],
      A: [
        { lv: '0～10', require: 3200 },
        { lv: '11～20', require: 12800 },
        { lv: '21～30', require: 32000 },
        { lv: '31～40', require: 72000 },
        { lv: '41～50', require: 120000 },
        { lv: '51～60', require: 240000 },
      ],
      B: [
        { lv: '0～10', require: 2400 },
        { lv: '11～20', require: 9600 },
        { lv: '21～30', require: 24000 },
        { lv: '31～40', require: 54000 },
        { lv: '41～50', require: 90000 },
        { lv: '51～60', require: 180000 },
      ],
    };

    return table[rank].reduce((list, item, index) => {
      const d = {
        ...item,
        materials: { rarity: 'premium', num: Math.ceil(item.require / 20000) },
        sumExp: 0,
        sum: { rarity: 'premium', num: 0 },
      } as MaterialExp;
      if (index > 0) {
        d.sumExp = list[index - 1].sumExp;
      }
      d.sumExp += d.require;
      d.sum.num = Math.ceil(d.sumExp / 3000);
      list.push(d);
      return list;
    }, [] as MaterialExp[]);
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      meicho: new MeichoPlugin(),
    },
  };
});
