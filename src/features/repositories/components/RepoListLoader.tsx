import Skeleton from "@ui/Skeleton";

const skeletonLoader = [...Array(6)].map((_, i) => {
  return <Skeleton key={i} className="h-full w-full px-4 py-8 md:px-8" />;
});
function RepoListLoader() {
  return (
    <div className="mx-auto my-8 grid min-h-350 w-full  grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
      {skeletonLoader}
    </div>
  );
}

export default RepoListLoader;
