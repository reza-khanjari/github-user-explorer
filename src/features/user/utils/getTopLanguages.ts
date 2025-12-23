import type { GithubRepo } from "@shared/types/github";

function getTopLanguages(repos: GithubRepo[], limit = 5) {
  const langMap: Record<string, number> = {};
  repos.forEach((repo) => {
    if (!repo.language) return;
    langMap[repo.language] = (langMap[repo.language] ?? 0) + 1;
  });

  return Object.entries(langMap)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => {
      if (a.value !== b.value) {
        return b.value - a.value;
      }
      return a.label.localeCompare(b.label);
    })
    .slice(0, limit);
}

export default getTopLanguages;
