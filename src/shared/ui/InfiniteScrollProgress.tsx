function InfiniteScrollProgress({ value }: { value: number }) {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full">
      <div className="overflow-hidden border border-x-0 border-white/40 bg-white/7 font-semibold backdrop-blur-xl">
        <div
          className="bg-linear from-primary to-secondary h-2 bg-linear-to-r transition-all"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default InfiniteScrollProgress;
