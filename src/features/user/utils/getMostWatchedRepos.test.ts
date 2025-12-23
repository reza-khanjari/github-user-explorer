import { describe, expect, test } from "vitest";
import { mockRepos } from "@test/mocks/mockRepos";
import getMostWatchedRepos from "./getMostWatchedRepos";
import type { GithubRepo } from "@shared/types/github";

describe("getMostWatchedRepos", () => {
  test("returns the top 5 repositories sorted by watchers_count in descending order", () => {
    const results = getMostWatchedRepos(mockRepos as GithubRepo[]);
    expect(results).toHaveLength(5);
    expect(results).toEqual([
      { label: "repo-4", value: 74 },
      { label: "repo-1", value: 45 },
      { label: "repo-3", value: 10 },
      { label: "repo-5", value: 10 },
      { label: "repo-2", value: 7 },
    ]);
  });
  test("returns the top repositories based on a custom limit sorted by watchers_count", () => {
    const results = getMostWatchedRepos(mockRepos as GithubRepo[], 6);
    expect(results).toHaveLength(6);
    expect(results).toEqual([
      { label: "repo-4", value: 74 },
      { label: "repo-1", value: 45 },
      { label: "repo-3", value: 10 },
      { label: "repo-5", value: 10 },
      { label: "repo-2", value: 7 },
      { label: "repo-6", value: 6 },
    ]);
  });
  test("returns all repositories sorted by watchers_count when total repos are less than the default limit", () => {
    const limitedRepos = mockRepos.slice(0, 3);
    const results = getMostWatchedRepos(limitedRepos as GithubRepo[]);
    expect(results).toHaveLength(3);
    expect(results).toEqual([
      { label: "repo-1", value: 45 },
      { label: "repo-3", value: 10 },
      { label: "repo-2", value: 7 },
    ]);
  });
});
