import { getArticles } from './articles';
import team from '../data/team.json';

export interface Writer {
  id: string;
  name: string;
  articleCount: number;
  subjects: string[];
  issues: string[];
  location: string;
}

// Build a quick lookup of name -> location from the team data so writers who
// are also on the editorial team can show their location on their card.
const teamLocationByName: Record<string, string> = {};
team.forEach((member) => {
  if (member.bio) {
    teamLocationByName[member.name] = member.bio;
  }
});

export function getWriters(): Writer[] {
  const articles = getArticles();

  // Group published articles by author name.
  const byAuthor = new Map<
    string,
    { subjects: Set<string>; issues: Set<string>; latestDate: string }
  >();

  articles.forEach((article) => {
    const author = article.author?.trim();
    if (!author) return;

    if (!byAuthor.has(author)) {
      byAuthor.set(author, {
        subjects: new Set(),
        issues: new Set(),
        latestDate: article.date,
      });
    }

    const entry = byAuthor.get(author)!;
    if (article.subject) entry.subjects.add(article.subject);
    if (article.issue) entry.issues.add(article.issue);
    if (new Date(article.date).getTime() > new Date(entry.latestDate).getTime()) {
      entry.latestDate = article.date;
    }
  });

  const writers: Writer[] = [];
  let idCounter = 1;
  byAuthor.forEach((entry, name) => {
    writers.push({
      id: String(idCounter++),
      name,
      articleCount: articles.filter((a) => a.author?.trim() === name).length,
      subjects: [...entry.subjects].sort(),
      issues: [...entry.issues].sort(),
      location: teamLocationByName[name] ?? '',
    });
  });

  // Sort by article count descending, then alphabetically by name.
  return writers.sort((a, b) => {
    if (b.articleCount !== a.articleCount) return b.articleCount - a.articleCount;
    return a.name.localeCompare(b.name);
  });
}
