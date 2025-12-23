import { useQuery } from "@tanstack/react-query";
import { getUser } from "@api/githubApi";
import { useParams } from "react-router-dom";

function useUser() {
  const { username } = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username as string),
    enabled: !!username,
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000 * 10,
    retry: false,
  });

  const reposCount = data?.public_repos;

  return { data, isLoading, error, reposCount, refetch };
}

export default useUser;
