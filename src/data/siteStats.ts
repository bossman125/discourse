export interface StatItem {
  id: string;
  label: string;
  value: number;
}

import { getArticles } from '../utils/articles';

export const siteStats: StatItem[] = [
  { id: 'contributors', label: 'Contributors', value: 8 },
  { id: 'countries', label: 'Countries', value: 8 },
  { id: 'articles', label: 'Articles Published', value: getArticles().filter(a => a.published).length },
  { id: 'team', label: 'Editorial Team', value: 6 },
];
