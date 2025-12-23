import type { GithubRepo } from "@shared/types/github";
import getMostWatchedRepos from "./getMostWatchedRepos";
import getTopForkedRepos from "./getTopForkedRepos";
import getTopLanguages from "./getTopLanguages";
import getTopStarredRepos from "./getTopStarredRepos";

function driveRepoAnalytics(repos: GithubRepo[]) {
  return {
    topStarredRepos: getTopStarredRepos(repos),
    topForkedRepos: getTopForkedRepos(repos),
    topLanguages: getTopLanguages(repos),
    mostWatchedRepos: getMostWatchedRepos(repos),
  };
}

export default driveRepoAnalytics;
