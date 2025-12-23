import { type MouseEventHandler, type ReactNode } from "react";
interface Button {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  id?: string;
  as?: string;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
function Button({
  className,
  children,
  type = "button",
  as,
  id,
  href,
  onClick,
}: Button) {
  const styles = `${className}  inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/7 font-semibold text-white shadow-[0_0_10px_rgba(128,0,255,0.25)] backdrop-blur-xl transition-colors hover:border-white/45 hover:bg-white/10 active:bg-white/20`;

  if (as === "a") {
    return (
      <a className={styles} href={href}>
        {children}
      </a>
    );
  }
  if (!as) {
    return (
      <button id={id} onClick={onClick} type={type} className={styles}>
        {children}
      </button>
    );
  }
}

export default Button;
