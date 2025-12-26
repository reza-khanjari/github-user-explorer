import Logo from "./Logo";
import { ImHome } from "react-icons/im";
import { NavLink } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

function Header() {


  return (
    <header className="fixed top-0 z-10 w-full md:static">
      <nav>
        <div className="mx-auto flex h-16 items-center justify-between gap-6 bg-slate-800 px-8 text-white shadow-lg md:max-w-2xl md:rounded-2xl md:px-12 lg:h-18 lg:max-w-4xl lg:gap-10 lg:px-16">
          <Logo />
          <div className="flex items-center justify-center gap-x-4">
            <NavLink
              to="/home"
              className="group flex items-center gap-2 leading-none"
            >
              <ImHome className="block text-2xl text-[#7666df] group-hover:text-[#54489d] lg:text-[26px]" />
              <span className="text-lg leading-none font-bold lg:text-2xl">
                Home
              </span>
            </NavLink>

            <HeaderSearch />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
