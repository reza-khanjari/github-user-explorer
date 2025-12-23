import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getReposPaginated } from "@api/githubApi";
import { useParams, useSearchParams } from "react-router-dom";

function usePaginatedRepos() {
  const queryClient = useQueryClient();
  const [params, setParams] = useSearchParams();

  const page = Number(params.get("page")) || 1;

  const updatePage = (page: string) => {
    const updated = new URLSearchParams(params);
    updated.set("page", page);
    setParams(updated);
  };

  const { username } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reposPaginated", username, page],
    queryFn: () => getReposPaginated(username as string, page),
    enabled: !!username,
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000 * 10,
    retry: 1,
  });

  const lastPage = !data || data.length < 6;
  if (username) {
    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: ["reposPaginated", username, page - 1],
        queryFn: () => getReposPaginated(username as string, page - 1),
      });
    }
    if (!lastPage) {
      queryClient.prefetchQuery({
        queryKey: ["reposPaginated", username, page + 1],
        queryFn: () => getReposPaginated(username as string, page + 1),
      });
    }
  }

  return { updatePage, data, isLoading, error, refetch };
}

export default usePaginatedRepos;
