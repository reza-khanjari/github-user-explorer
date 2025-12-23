import { describe, expect, test } from "vitest";
import getTopStarredRepos from "./getTopStarredRepos";
import { mockRepos } from "@test/mocks/mockRepos";
import type { GithubRepo } from "@shared/types/github";

describe("getTopStarredRepos", () => {
  test("returns the top 5 repositories sorted by stargazers_count in descending order", () => {
    const results = getTopStarredRepos(mockRepos as GithubRepo[]);
    expect(results).toHaveLength(5);
    expect(results).toEqual([
      {
        label: "repo-4",
        value: 68,
      },
      {
        label: "repo-6",
        value: 45,
      },
      {
        label: "repo-2",
        value: 18,
      },
      {
        label: "repo-3",
        value: 5,
      },
      {
        label: "repo-5",
        value: 5,
      },
    ]);
  });

  test("returns the top repositories based on a custom limit sorted by stargazers_count", () => {
    const results = getTopStarredRepos(mockRepos as GithubRepo[], 6);
    expect(results).toHaveLength(6);
    expect(results).toEqual([
      {
        label: "repo-4",
        value: 68,
      },
      {
        label: "repo-6",
        value: 45,
      },
      {
        label: "repo-2",
        value: 18,
      },
      {
        label: "repo-3",
        value: 5,
      },
      {
        label: "repo-5",
        value: 5,
      },
      {
        label: "repo-1",
        value: 3,
      },
    ]);
  });

  test("returns all repositories sorted by stargazers_count when total repos are less than the default limit", () => {
    const limitedRepos = mockRepos.slice(0, 3);
    const results = getTopStarredRepos(limitedRepos as GithubRepo[]);
    expect(results).toHaveLength(3);
    expect(results).toEqual([
      {
        label: "repo-2",
        value: 18,
      },
      {
        label: "repo-3",
        value: 5,
      },
      {
        label: "repo-1",
        value: 3,
      },
    ]);
  });
});
