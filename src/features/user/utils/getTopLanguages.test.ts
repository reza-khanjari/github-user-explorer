import { describe, expect, test } from "vitest";
import getTopLanguages from "./getTopLanguages";
import { mockRepos } from "@test/mocks/mockRepos";
import type { GithubRepo } from "@shared/types/github";

describe("getTopLanguages", () => {
  test("return top 5 languages have been used in repositories", () => {
    const results = getTopLanguages(mockRepos as GithubRepo[]);

    expect(results).toHaveLength(5);
    expect(results).toEqual([
      { label: "html", value: 3 },
      { label: "Go", value: 2 },
      { label: "java", value: 2 },
      { label: "java-script", value: 2 },
      { label: "python", value: 1 },
    ]);
  });
  test("returns the top languages based on a custom limit", () => {
    const results = getTopLanguages(mockRepos as GithubRepo[], 6);

    expect(results).toHaveLength(6);
    expect(results).toEqual([
      { label: "html", value: 3 },
      { label: "Go", value: 2 },
      { label: "java", value: 2 },
      { label: "java-script", value: 2 },
      { label: "python", value: 1 },
      { label: "Rust", value: 1 },
    ]);
  });
  test("returns all languages when total repos are less than the default limit", () => {
    const limitedRepos = mockRepos.slice(0, 4);

    const results = getTopLanguages(limitedRepos as GithubRepo[]);

    expect(results).toHaveLength(3);
    expect(results).toEqual([
      { label: "java", value: 2 },
      { label: "html", value: 1 },
      { label: "python", value: 1 },
    ]);
  });
});
