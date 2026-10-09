import fs from "fs";
import path from "path";
import { marked } from "marked";

// Reads src/content/<folder>/<slug>.md at build time and returns HTML,
// or null when the file does not exist.
export function getMarkdownHtml(folder: string, slug: string): string | null {
  const file = path.join(process.cwd(), "src", "content", folder, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return marked.parse(fs.readFileSync(file, "utf8"), { async: false, gfm: true }) as string;
}
