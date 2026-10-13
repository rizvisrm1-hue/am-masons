import fs from "fs";
import path from "path";
import { getMarkdownHtml } from "./markdown";

export function getInsightHtml(slug: string): string | null {
  return getMarkdownHtml("insights", slug);
}

// Pulls question/answer pairs from an article's markdown, where each question
// is a bold line ending in "?" followed by its answer paragraph.
export function getInsightFaqs(slug: string): { question: string; answer: string }[] {
  const file = path.join(process.cwd(), "src", "content", "insights", `${slug}.md`);
  if (!fs.existsSync(file)) return [];
  const md = fs.readFileSync(file, "utf8");
  const faqs: { question: string; answer: string }[] = [];
  const re = /^\*\*([^*\n]+\?)\*\*[ \t]*\n+([^\n]+)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md)) !== null) {
    const answer = m[2].replace(/\*\*|__|_|\[([^\]]+)\]\([^)]+\)/g, (_s, link) => link ?? "").trim();
    if (answer && !answer.startsWith("**")) faqs.push({ question: m[1].trim(), answer });
  }
  return faqs;
}

const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

// "13 Oct 2026" -> "2026-10-13"
export function toIsoDate(date: string): string | undefined {
  const [d, mon, y] = date.trim().split(/\s+/);
  const mm = MONTHS[mon?.slice(0, 3)];
  if (!d || !mm || !y) return undefined;
  return `${y}-${mm}-${d.padStart(2, "0")}`;
}
