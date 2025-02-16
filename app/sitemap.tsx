import { MetadataRoute } from 'next';
import { getArticles } from '@/lib/newt';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASE_URL || ''; // URLは.envに記載
  const lastModified = new Date();

  // 静的パス
  const staticPaths = [
    {
      url: `${baseURL}/`,
      lastModified,
    },
    // {
    //   url: `${baseURL}/about`,
    //   lastModified,
    // },
    // 他の静的パスを追加
  ];

  // 記事のパスを取得
  const { articles } = await getArticles();
  const articlePaths = articles.map((article) => ({
    url: `${baseURL}/articles/${article.slug}`,
    lastModified: new Date(article._sys.updatedAt),
  }));

  // 全てのパスを結合
  const allPaths = [...staticPaths, ...articlePaths];

  return allPaths;
}