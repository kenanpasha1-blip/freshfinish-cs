import data from "@/content/seo-agent.json";

/**
 * Wording written by the portal's SEO agent (freshfinish-ops lib/seo-climber).
 * The agent commits content/seo-agent.json straight to main, one page at a
 * time, to move pages Google already shows us for up its results. Keyed by
 * path. Everything is optional, and a page with no entry renders as written.
 */
export type AgentPage = {
  title?: string;
  description?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
  updatedAt?: string;
};

const pages = (data as { pages: Record<string, AgentPage> }).pages ?? {};

export function agentPage(path: string): AgentPage | undefined {
  return pages[path];
}
