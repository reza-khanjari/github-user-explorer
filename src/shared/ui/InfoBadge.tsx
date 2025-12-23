import type { JSX } from "react";

interface infoBadge {
  className?: string;
  label: string;
  count: string | number;
  icon?: JSX.Element;
}

function InfoBadge({ className, label, count, icon }: infoBadge) {
  return (
    <div
      className={`${className} flex w-35 cursor-pointer flex-col items-center justify-center rounded-4xl border-2 border-white/40 bg-white/7 px-8 py-2 font-semibold text-white shadow-[0_0_10px_rgba(128,0,255,0.25)] backdrop-blur-xl transition-colors hover:border-white/45 hover:bg-white/10 active:bg-white/20`}
    >
      <span className="w-full text-center font-bold md:text-lg">{count}</span>
      <div className="flex w-full items-center justify-center gap-1">
        <p className="w-full text-center text-sm font-semibold text-white/80 capitalize">
          {label}
        </p>
        {icon ? <div>{icon}</div> : null}
      </div>
    </div>
  );
}

export default InfoBadge;
