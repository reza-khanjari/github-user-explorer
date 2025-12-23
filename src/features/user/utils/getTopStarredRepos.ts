import type { GithubRepo } from "@shared/types/github";

function getTopStarredRepos(repos: GithubRepo[], limit = 5) {
  const top: GithubRepo[] = [];
  for (const repo of repos) {
    if (top.length < limit) {
      top.push(repo);
      top.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (repo.stargazers_count > top[top.length - 1].stargazers_count) {
      top[top.length - 1] = repo;
      top.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
  }
  return top.map((repo) => ({
    label: repo.name,
    value: repo.stargazers_count,
  }));
}

export default getTopStarredRepos;
