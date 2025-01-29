import type { ArticleItem } from '~/types/articles';

/** ニュースアイテム（追加するときはcreatedAt降順となるように追加する） */
export const NEWS: ArticleItem[] = [
  {
    id: '20250129-goods-kafka',
    createdAt: '2025/01/29',
    title: '【崩壊スターレイル】カフカの1/7スケールフィギュアが予約開始！【2026年01月発売予定】',
    description: '崩壊スターレイルに登場する「カフカ」の1/7スケールフィギュアが登場',
    link: '/articles/hsr/20250129-goods-kafka',
    game: '崩壊スターレイル',
    hashTags: ['崩壊スターレイル', 'スタレ', 'HonkaiStarRail'],
  },
  {
    id: '20250129-goods',
    createdAt: '2025/01/29',
    title: '【崩壊スターレイル】花火人形のHuggyが予約開始！【2025年7月発売予定】',
    description: '崩壊スターレイルに登場する「花火」が使う花火人形がHuggyとなって登場',
    link: '/articles/hsr/20250129-goods',
    game: '崩壊スターレイル',
    hashTags: ['崩壊スターレイル', 'スタレ', 'HonkaiStarRail'],
  },
  {
    id: 'genshin-wafer2-20250123',
    createdAt: '2025/01/23',
    title: '【原神】シールウエハース第２弾の予約開始！！【2025年5月発売予定】',
    description: '原神シールウエハース第２弾のよやくが始まりました。発売日は2025年5月を予定しています。',
    link: '/articles/20250123-genshin-wafer2',
    game: '原神',
    hashTags: ['原神', 'GenshinImpact'],
  },
  {
    id: 'genshin-wafer-20250123',
    createdAt: '2025/01/23',
    title: '【原神】シールウエハースが発売間近！！【01/27発売】',
    description: '原神シールウエハースが2025年1月27発売！',
    link: '/articles/20250123-genshin-wafer',
    game: '原神',
    hashTags: ['原神', 'GenshinImpact'],
  },
  {
    id: 'genshin-eula-figure-20250121',
    createdAt: '2025/01/21',
    title: '【原神】エウルアのフィギュアが登場！！あみあみにて予約開始！！',
    description: '原神のエウルアのフィギュアが登場！！',
    link: '/articles/20250121-genshin-eula-figure',
    game: '原神',
    hashTags: ['原神', 'GenshinImpact'],
  },
];
