import fs from "fs";
import path from "path";
import { marked } from "marked";

// Reads an article's Markdown from src/content/insights/<slug>.md at build time
// and returns HTML. Returns null when the file does not exist.
export function getInsightHtml(slug: string): string | null {
  const file = path.join(process.cwd(), "src", "content", "insights", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const md = fs.readFileSync(file, "utf8");
  return marked.parse(md, { async: false, gfm: true }) as string;
}
