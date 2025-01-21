import type { MEICHO_RARITY_LABEL } from '~/shared/meicho/constants';

/** レアリティ */
export type RARITY = 'premium' | 'advanced' | 'medium' | 'basic';

/** レベルアップ素材 */
export interface MeichoMaterialExp {
  /** from～to形式で定義 */
  lv: string;
  require: number;
  materials: { rarity: RARITY; num: number };
  sumExp: number;
  sum: { rarity: RARITY; num: number };
}

/** 突破素材 */
export interface MeichoMaterialAscend {
  lv: number;
  money: number;
  /** 雑魚的素材 */
  enemy: {
    rarity: RARITY;
    num: number;
  };
  /** フィールド採集物 */
  collection: {
    num: number;
  };
  /**怒涛級（フィールドボス）素材 */
  boss: {
    num: number;
  };
  /** 累計 */
  sum: {
    enemy: {
      /** 雑魚敵の特級（金）素材 */
      premium: number;
      /** 雑魚敵の高級（紫）素材 */
      advanced: number;
      /** 雑魚敵の中級（青）素材 */
      medium: number;
      /** 雑魚敵の基本（青）素材 */
      basic: number;
    };
    boss: {
      num: number;
    };
    collection: { num: number };
    /** シェルコイン */
    money: number;
  };
}

/** スキル素材 */
export interface MeichoMaterialSkill {
  lv: number;
  money: number;
  /** 週ボス素材 */
  boss: { num: number };
  enemy: { rarity: string; num: number };
  /** 武器素材（凝素­領域で入手できる素材） */
  weapon: { rarity: string; num: number };
  sum: {
    money: number;
    boss: { num: number };
    enemy: {
      /** 特級（金）素材 */
      premium: number;
      /** 高級（紫）素材 */
      advanced: number;
      /** 中級（青）素材 */
      medium: number;
      /** 基本（青）素材 */
      basic: number;
    };
    weapon: {
      /** 特級（金）素材 */
      premium: number;
      /** 高級（紫）素材 */
      advanced: number;
      /** 中級（青）素材 */
      medium: number;
      /** 基本（青）素材 */
      basic: number;
    };
  };
}
