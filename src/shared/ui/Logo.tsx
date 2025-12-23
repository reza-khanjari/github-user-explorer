import { ImGithub } from "react-icons/im";

function Logo() {
  return (
    <div className="flex items-center space-x-3 leading-none">
      <ImGithub className="block text-2xl text-[#7666df] group-hover:text-[#6D5ECF] lg:text-4xl" />
      <span className="text-lg leading-none font-bold tracking-tight text-wrap capitalize lg:text-2xl">
        Github Explorer
      </span>
    </div>
  );
}

export default Logo;
