import useIsMobile from "@hooks/useIsMobile";
import DesktopRepositoriesList from "./DesktopRepositoriesList";
import MobileRepositoriesList from "./MobileRepositoriesList";

function RepositoriesList() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileRepositoriesList /> : <DesktopRepositoriesList />;
}

export default RepositoriesList;
