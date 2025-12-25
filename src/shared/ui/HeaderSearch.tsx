import useIsMobile from "@hooks/useIsMobile";
import HeaderSearchMobile from "./HeaderSearchMobile";
import HeaderSearchDesktop from "./HeaderSearchDesktop";

function HeaderSearch() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <HeaderSearchMobile /> : <HeaderSearchDesktop />}</>;
}

export default HeaderSearch;
