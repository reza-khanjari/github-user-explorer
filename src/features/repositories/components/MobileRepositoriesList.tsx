import { useEffect, useRef } from "react";
import InfiniteScrollProgress from "@ui/InfiniteScrollProgress";
import useUser from "@features/user/hooks/useUser";
import useInfiniteRepos from "../hooks/useInfiniteRepos";
import ErrorStateCard from "@ui/ErrorStateCard";
import Card from "@ui/Card";
import Heading from "@ui/Heading";
import RepoListLoader from "./RepoListLoader";
import RepoGrid from "./RepoGrid";

function MobileRepositoriesList() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const { reposCount } = useUser();

  const {
    flatData,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteRepos();

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (error) {
    return <ErrorStateCard retry={refetch} error={error.message} />;
  }

  const progress =
    reposCount && Math.min((flatData.length / reposCount) * 100, 100);

  return (
    <>
      <Card className="mx-auto flex w-full px-4 py-8">
        <Heading className="my-4 text-center text-white" as="h1">
          Repositories List
        </Heading>

        {isLoading ? (
          <RepoListLoader />
        ) : flatData.length === 0 ? (
          <p className="mt-8 text-center text-2xl font-light tracking-wide">
            This user doesn’t have any public repositories
          </p>
        ) : (
          <RepoGrid data={flatData} />
        )}

        {flatData.length > 0 && (
          <div
            ref={loaderRef}
            className="background-glass mx-auto rounded-4xl px-3 py-2 text-sm"
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "Scroll down to load more"
                : "All repositories loaded"}
          </div>
        )}
      </Card>

      {flatData.length > 0 && <InfiniteScrollProgress value={progress} />}
    </>
  );
}

export default MobileRepositoriesList;
