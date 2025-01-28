export interface ArticleItem {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  link;
  game?: '原神' | '崩壊スターレイル' | '鳴潮';
  hashTags?: string[];
}
