import { describe, expect, test } from "vitest";
import { mockRepos } from "@test/mocks/mockRepos";
import type { GithubRepo } from "@shared/types/github";
import getTopForkedRepos from "./getTopForkedRepos";

describe("getTopForkedRepos", () => {
  test("returns the top 5 repositories sorted by forks_count in descending order", () => {
    const results = getTopForkedRepos(mockRepos as GithubRepo[]);
    expect(results).toHaveLength(5);
    expect(results).toEqual([
      {
        label: "repo-5",
        value: 98,
      },
      {
        label: "repo-4",
        value: 64,
      },
      {
        label: "repo-2",
        value: 12,
      },
      {
        label: "repo-3",
        value: 11,
      },
      {
        label: "repo-1",
        value: 10,
      },
    ]);
  });

  test("returns the top repositories based on a custom limit sorted by forks_count", () => {
    const results = getTopForkedRepos(mockRepos as GithubRepo[], 6);
    expect(results).toHaveLength(6);
    expect(results).toEqual([
      {
        label: "repo-5",
        value: 98,
      },
      {
        label: "repo-4",
        value: 64,
      },
      {
        label: "repo-2",
        value: 12,
      },
      {
        label: "repo-3",
        value: 11,
      },
      {
        label: "repo-1",
        value: 10,
      },
      {
        label: "repo-6",
        value: 7,
      },
    ]);
  });

  test("returns all repositories sorted by forks_count when total repos are less than the default limit", () => {
    const limitedRepos = mockRepos.slice(0, 3);
    const results = getTopForkedRepos(limitedRepos as GithubRepo[]);
    expect(results).toHaveLength(3);
    expect(results).toEqual([
      {
        label: "repo-2",
        value: 12,
      },
      {
        label: "repo-3",
        value: 11,
      },
      {
        label: "repo-1",
        value: 10,
      },
    ]);
  });
});
