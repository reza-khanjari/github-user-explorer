import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import Button from "@ui/Button";
import Card from "@ui/Card";
import ErrorStateCard from "@ui/ErrorStateCard";
import Heading from "@ui/Heading";
import InfoBadge from "@ui/InfoBadge";
import Skeleton from "@ui/Skeleton";
import useUser from "../hooks/useUser";

function UserProfileCard() {
  const { data, isLoading, error, refetch } = useUser();

  function formatCount(n: number): string {
    if (n > 10 ** 6) {
      return `${(n / 10 ** 6).toFixed(2)} M`;
    }
    if (n > 10 ** 3) {
      return `${(n / 10 ** 3).toFixed(2)} K`;
    }
    return n.toString();
  }
  if (error) {
    return <ErrorStateCard retry={refetch} error={error.message} />;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton className="min-h-108 w-full max-w-150" />
      ) : (
        <Card className="max-w-150 p-8">
          <Heading as="h4" className="tracking-wide text-white/90 uppercase">
            User Profile
          </Heading>
          <main className="xs:gap-x-4 my-4 flex items-center gap-x-8 md:gap-x-2">
            <div className="mx-auto my-4 max-w-2/10">
              <UserAvatar url={data.avatar_url} />
            </div>

            <div className="w-8/10">
              <Heading as="h2" className="mt-6 text-wrap leading-none text-white">
                {data.name}
              </Heading>
              <p className="text-sm font-medium text-white/70">@{data.login}</p>
              <p className="mt-1 max-w-sm text-sm font-light text-white/60 md:text-left">
                {data.bio ? data.bio : "There is not a bio  for the user"}
              </p>

              <Button
                as="a"
                type="button"
                href={`https://github.com/${data.login}`}
                className="my-3 max-w-max px-4 py-1 text-sm"
              >
                View on Github
              </Button>
            </div>
          </main>
          <footer>
            <div className="my-4 flex flex-col items-center justify-center gap-y-6 md:flex-row md:gap-x-4 md:gap-y-0">
              <InfoBadge
                label="followers"
                count={formatCount(data.followers)}
              />
              <InfoBadge
                label="following"
                count={formatCount(data.following)}
              />
              <InfoBadge label="repos" count={formatCount(data.public_repos)} />
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
              <NavLink
                className="mx-auto rounded-2xl border border-white/15 bg-white/10 px-6 py-2 text-center text-xl font-semibold tracking-wider "
                to={`/user/${data.login}/repos`}
              >
                View Repositories
              </NavLink>
            </div>
          </footer>
        </Card>
      )}
    </>
  );
}

export default UserProfileCard;
