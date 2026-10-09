import { getMarkdownHtml } from "./markdown";

export function getInsightHtml(slug: string): string | null {
  return getMarkdownHtml("insights", slug);
}
