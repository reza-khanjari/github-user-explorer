import Charts from "./charts/ChartsLayout";
import UserProfileCard from "./UserProfileCard";

function UserPageLayout() {
  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <UserProfileCard />
      <Charts />
    </div>
  );
}

export default UserPageLayout;
