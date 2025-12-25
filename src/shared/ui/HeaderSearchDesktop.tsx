import {  useRef, useState } from "react";
import SearchHistory from "./SearchHistory";
import SearchInput from "./SearchInput";
import useClickOutSide from "../hooks/useClickOutSide";
import useHeaderSearch from "./useHeaderSearch";

function HeaderSearchDesktop() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { handleSubmit, inputRef } = useHeaderSearch(()=> setIsHistoryOpen(false));
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutSide(wrapperRef, () => setIsHistoryOpen(false));
  
  return (
    <form onSubmit={handleSubmit}>
      <div ref={wrapperRef} className="relative hidden w-full md:block">
        <SearchInput onFocus={() => setIsHistoryOpen(true)} ref={inputRef} />
        <SearchHistory
          onSelect={() => setIsHistoryOpen(false)}
          isOpen={isHistoryOpen}
        />
      </div>
    </form>
  );
}

export default HeaderSearchDesktop;
