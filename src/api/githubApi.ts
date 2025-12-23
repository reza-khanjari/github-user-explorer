import type { GithubRepo } from "@/shared/types/github";

export async function getUser(username: string | undefined) {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("User Not found");
    }

    throw new Error("Failed to fetch user");
  }

  return res.json();
}

export async function getReposPaginated(
  username: string,
  page: number,
  per_page = 6,
) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}`,
  );
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("No Repository was found");
    }
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}
export async function getAllRepos(username: string) {
  const allRepos: GithubRepo[] = [];
  let page = 1;
  const per_page = 100;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}`,
    );

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("No Repository was found");
      }
      throw new Error("Failed to fetch repositories");
    }
    const data = await res.json();
    if (data.length === 0) break;
    allRepos.push(...data);
    page++;
  }

  return allRepos;
}
