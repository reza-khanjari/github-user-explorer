import type { GithubRepo } from "@shared/types/github";

function getMostWatchedRepos(repos: GithubRepo[], limit = 5) {
  const top: GithubRepo[] = [];
  for (const repo of repos) {
    if (top.length < limit) {
      top.push(repo);
      top.sort((a, b) => b.watchers_count - a.watchers_count);
    } else if (repo.watchers_count > top[top.length - 1].watchers_count) {
      top[top.length - 1] = repo;
      top.sort((a, b) => b.watchers_count - a.watchers_count);
    }
  }

  return top.map((repo) => ({
    label: repo.name,
    value: repo.watchers_count,
  }));
}

export default getMostWatchedRepos;
