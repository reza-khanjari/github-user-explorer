import { type ReactNode } from "react";

function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex w-full flex-col rounded-2xl border border-white/15 bg-white/5 shadow-xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
