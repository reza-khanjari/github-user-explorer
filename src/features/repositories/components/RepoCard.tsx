import { FaEye, FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import type { GithubRepo } from "@shared/types/github";
import Card from "@ui/Card";
import Heading from "@ui/Heading";
import InfoBadge from "@ui/InfoBadge";
import Button from "@ui/Button";

function RepoCard({ item }: { item: GithubRepo }) {
  return (
    <Card
      key={item.id}
      className="h-full max-w-150 px-4 py-8 transition-all hover:border-[#B67CFF]/40 hover:shadow-[0_0_14px_rgba(182,124,255,0.25)] md:px-8"
    >
      <Heading className="line-clamp-2 min-h-20" as="h3">
        {item.name}
      </Heading>
      <p className="mt-6 line-clamp-2 min-h-8">
        {item.description
          ? item.description
          : "There is not a description for this repo"}
      </p>

      <div className="my-8 flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-4 md:gap-y-0">
        <InfoBadge
          icon={<FaStar size={21} color="gold" />}
          label="Stars"
          count={item.stargazers_count || 0}
        />
        <InfoBadge
          icon={<FaCodeFork size={21} color="#C9A3FF" />}
          label="forks"
          count={item.forks_count || 0}
        />
        <InfoBadge
          icon={<FaEye size={21} color="#6EC8FF" />}
          label="watchers"
          count={item.watchers_count || 0}
        />
      </div>

      <div className="mb-4 space-y-0.5 text-sm text-white/70">
        <p>Created: {item.created_at}</p>
        <p>
          Updated:{" "}
          {item.updated_at
            ? item.updated_at
            : "There is not an updated date for this repo"}
        </p>
      </div>

      <Button
        as="a"
        href={item.html_url}
        className="mx-auto my-3 mt-auto max-w-36 px-4 py-1 text-sm"
        type="button"
      >
        View on GitHub
      </Button>
    </Card>
  );
}

export default RepoCard;
