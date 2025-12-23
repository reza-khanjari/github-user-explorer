import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllRepos } from "@api/githubApi";

function useAllRepos() {
  const { username } = useParams();

  return useQuery({
    queryKey: ["allRepos", username],
    queryFn: () => getAllRepos(username as string),
    enabled: !!username,
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000 * 10,
    retry: false,
  });
}

export default useAllRepos;
