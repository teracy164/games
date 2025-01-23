export interface ArticleItem {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  link;
  game?: '原神' | '鳴潮';
  hashTags?: string[];
}
