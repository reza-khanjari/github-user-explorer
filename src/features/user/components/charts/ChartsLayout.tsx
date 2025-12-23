import { useMemo } from "react";
import Skeleton from "@ui/Skeleton";
import useAllRepos from "../../hooks/useAllRepos";
import BaseBarChart from "./BaseBarChart";
import driveRepoAnalytics from "../../utils/driveRepoAnalytics";
import ErrorStateCard from "@ui/ErrorStateCard";

function Charts() {
  const { data, isLoading, error, refetch } = useAllRepos();
  const analytics = useMemo(
    () => (data ? driveRepoAnalytics(data) : null),
    [data],
  );

  const topStarredRepos = analytics?.topStarredRepos ?? [];
  const topForkedRepos = analytics?.topForkedRepos ?? [];
  const topLanguages = analytics?.topLanguages ?? [];
  const mostWatchedRepos = analytics?.mostWatchedRepos ?? [];
  if (error) {
    return <ErrorStateCard retry={refetch} error={error.message} />;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton className="min-h-150 w-full" />
      ) : data?.length === 0 ? (
        <div className="flex min-h-52 w-full max-w-150 items-center justify-center rounded-xl border border-white/15 bg-white/8 px-4">
          <p className="text-2xl font-bold md:text-4xl">
            No Repository was found
          </p>
        </div>
      ) : (
        <div className="my-16 grid min-h-150 w-full grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2">
          <BaseBarChart
            data={topStarredRepos}
            name="Top Starred Repos"
            color="#FFD166"
          />
          <BaseBarChart
            data={mostWatchedRepos}
            name="Most Watched Repos"
            color="#7AE582"
          />
          <BaseBarChart
            data={topForkedRepos}
            name="Top Forked Repos"
            color="#FF6B6B"
          />
          <BaseBarChart
            data={topLanguages}
            name="Top Languages Used"
            color="#4ECDC4"
          />
        </div>
      )}
    </>
  );
}

export default Charts;
