export interface Article {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  issue: string;
  date: string;
  published: boolean;
  subject: string;
}

const articleFiles = import.meta.glob('../articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

function parseFrontmatter(fileContent: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const [, frontmatterStr, content] = match;
  const data: Record<string, any> = {};

  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Convert boolean strings to boolean
      if (value === 'true') value = true;
      if (value === 'false') value = false;

      data[key] = value;
    }
  });

  return { data, content };
}

export function getArticles(): Article[] {
  const articles: Article[] = [];

  for (const path in articleFiles) {
    const fileContent = articleFiles[path] as string;
    const { data, content } = parseFrontmatter(fileContent);

    articles.push({
      id: data.id,
      title: data.title,
      author: data.author,
      summary: data.summary,
      content: content.trim(),
      issue: data.issue,
      date: data.date,
      published: data.published ?? true,
      subject: data.subject,
    });
  }

  return articles
    .filter(article => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleById(id: string): Article | undefined {
  return getArticles().find(article => article.id === id);
}
