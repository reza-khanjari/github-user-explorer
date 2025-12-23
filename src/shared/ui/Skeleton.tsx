function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={`${className} skeleton-glass rounded-2xl border-2 border-white/40 bg-white/7 backdrop-blur-xl`}
    ></div>
  );
}

export default Skeleton;
