/** レアリティ */
export type RARITY = 'premium' | 'advanced' | 'medium' | 'basic';

/** レベルアップ素材 */
export interface MaterialExp {
  /** from～to形式で定義 */
  lv: string;
  require: number;
  materials: { rarity: RARITY; num: number };
  sumExp: number;
  sum: { rarity: RARITY; num: number };
}

/** 突破素材 */
export interface MaterialAscend {
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
export interface MaterialSkill {
  lv: number;
  money: number;
  materials: { rank: string; num: number };
  sum: { A: number; B: number; C: number; money: number };
  /** ﾊﾑｽﾀｰｹｰｼﾞの必要数 */
  ex?: number;
}

/** コアスキル素材 */
export interface MaterialCoreSkill {
  no: string;
  lv: number;
  money: number;
  /** エキスパート素材数 */
  expert: number;
  /** 週ボス素材数 */
  boss: number;
  sum: { expert: number; boss: number; money: number };
}
