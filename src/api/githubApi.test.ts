import { describe, it, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "@test/mocks/server";
import { getUser, getReposPaginated } from "./githubApi";

describe("GitHub API Tests", () => {
  it("getUser → should return user data on success", async () => {
    server.use(
      http.get("https://api.github.com/users/john", () => {
        return HttpResponse.json({
          login: "john",
          id: 1,
          public_repos: 12,
        });
      }),
    );

    const data = await getUser("john");
    expect(data.login).toBe("john");
    expect(data.id).toBe(1);
    expect(data.public_repos).toBe(12);
  });

  it("getUser → should throw 'User Not found' on 404", async () => {
    server.use(
      http.get("https://api.github.com/users/john", () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    await expect(getUser("john")).rejects.toThrow(/User not found/i);
  });

  it("getUser → should throw 'Failed to fetch user' on non-404 errors", async () => {
    server.use(
      http.get("https://api.github.com/users/john", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    await expect(getUser("john")).rejects.toThrow(/Failed to fetch user/i);
  });

  it("getReposPaginated → should return repositories on success", async () => {
    server.use(
      http.get("https://api.github.com/users/john/repos", ({ request }) => {
        const url = new URL(request.url);
        expect(url.searchParams.get("page")).toBe("1");
        expect(url.searchParams.get("per_page")).toBe("6");
        return HttpResponse.json([
          { id: 1, name: "repo-1" },
          { id: 2, name: "repo-2" },
        ]);
      }),
    );
    const data = await getReposPaginated("john", 1, 6);
    expect(data.length).toBe(2);
    expect(data[0].name).toBe("repo-1");
  });

  it("getReposPaginated → should throw 'No Repository was found' on 404", async () => {
    server.use(
      http.get("https://api.github.com/users/john/repos", () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    await expect(getReposPaginated("john", 1, 6)).rejects.toThrow(
      "No Repository was found",
    );
  });

  it("getReposPaginated → should throw 'Failed to fetch repositories' on other errors", async () => {
    server.use(
      http.get("https://api.github.com/users/john/repos", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    await expect(getReposPaginated("john", 1, 6)).rejects.toThrow(
      "Failed to fetch repositories",
    );
  });
});
