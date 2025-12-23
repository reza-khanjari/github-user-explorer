import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getReposPaginated } from "@api/githubApi";
import type { GithubRepo } from "@shared/types/github";

function useInfiniteRepos(perPage = 6) {
  const { username } = useParams();
  const query = useInfiniteQuery<GithubRepo[]>({
    queryKey: ["reposInfinite", username],
    queryFn: ({ pageParam = 1 }) =>
      getReposPaginated(username as string, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === perPage ? allPages.length + 1 : undefined,

    enabled: !!username,
    staleTime: 20 * 1000,
    gcTime: 60 * 1000 * 10,
    retry: false,
  });

  return {
    flatData: query.data?.pages.flat() ?? [],
    pages: query.data?.pages ?? [],
    fetchNextPage: () => query.fetchNextPage(),
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export default useInfiniteRepos;
