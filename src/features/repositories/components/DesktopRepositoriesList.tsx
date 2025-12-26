import { useSearchParams } from "react-router-dom";
import useUser from "@features/user/hooks/useUser";
import usePaginatedRepos from "../hooks/useReposPaginated";
import ErrorStateCard from "@ui/ErrorStateCard";
import Card from "@ui/Card";
import Heading from "@ui/Heading";
import RepoListLoader from "./RepoListLoader";
import RepoGrid from "./RepoGrid";
import Pagination from "@ui/Pagination";

function DesktopRepositoriesList() {
  const [params] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const perPage = 6;
  const { reposCount } = useUser();
  const totalPages = Math.ceil((reposCount ?? 0) / perPage);

  const { data, isLoading, error, refetch, updatePage } = usePaginatedRepos();

  if (error) {
    return <ErrorStateCard retry={refetch} error={error.message} />;
  }

  return (
    <Card className="mx-auto flex w-full px-4 py-8 md:max-w-300 md:px-8">
      <Heading className="my-4 text-center text-white" as="h1">
        Repositories List
      </Heading>

      {isLoading ? (
        <RepoListLoader />
      ) : data.length === 0 ? (
        <p className="mt-8 text-center text-2xl font-light tracking-wide">
          This user doesn’t have any public repositories
        </p>
      ) : (
        <RepoGrid data={data} />
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(p) => updatePage(p.toString())}
      />
    </Card>
  );
}

export default DesktopRepositoriesList;
