import type { GithubRepo } from "@shared/types/github";

function getTopForkedRepos(repos: GithubRepo[], limit = 5) {
  const top: GithubRepo[] = [];
  for (const repo of repos) {
    if (top.length < limit) {
      top.push(repo);
      top.sort((a, b) => b.forks_count - a.forks_count);
    } else if (repo.forks_count > top[top.length - 1].forks_count) {
      top[top.length - 1] = repo;
      top.sort((a, b) => b.forks_count - a.forks_count);
    }
  }
  return top.map((repo) => ({
    label: repo.name,
    value: repo.forks_count,
  }));
}

export default getTopForkedRepos;
