import type { GithubRepo } from "@shared/types/github";
import RepoCard from "./RepoCard";

function RepoGrid({ data }: { data: GithubRepo[] }) {
  return (
    <div className="mx-auto my-8 grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
      {data.map((item: GithubRepo) => (
        <RepoCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default RepoGrid;
