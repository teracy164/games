import type { ArticleItem } from '~/types/articles';

/** ニュースアイテム（追加するときはcreatedAt降順となるように追加する） */
export const NEWS: ArticleItem[] = [
  {
    id: 'genshin-eula-figure-20250121',
    createdAt: '2025/01/21',
    title: '【原神】エウルアのフィギュアが登場！！あみあみにて予約開始！！',
    link: '/articles/20250121-genshin-eula-figure',
    game: '原神',
    hashTags: ['原神', 'GenshinImpact'],
  },
];
