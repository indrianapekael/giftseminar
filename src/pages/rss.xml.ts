import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '@/lib/db';
import { withBase } from '@/lib/url';
import siteConfig from '@/site.config';

function parseTags(tags: string | null | undefined) {
  if (!tags) return [];
  try {
    const parsed = JSON.parse(tags);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return String(tags)
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }
}

export async function GET(context: APIContext) {
  const rows: any[] = await getAllPosts();

  return rss({
    title: `${siteConfig.name} — Blog`,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: rows.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.published_at),
      link: withBase(`/blog/${post.slug}/`),
      categories: parseTags(post.tags),
      author: post.author || undefined,
    })),
    customData: `<language>en-us</language>`,
  });
}
