import { useEffect, useState } from "react";
import SearchHistory from "./SearchHistory";
import SearchInput from "./SearchInput";
import useHeaderSearch from "./useHeaderSearch";

function HeaderSearchDesktop() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { handleSubmit, inputRef } = useHeaderSearch(() => {
    (setIsHistoryOpen(false), setQuery(""));
  });


  useEffect(() => {
    if (query.trim().length === 0 && isFocused) {
      setIsHistoryOpen(true);
    } else {
      setIsHistoryOpen(false);
    }
  }, [query,isFocused]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative hidden w-full md:block">
        <SearchInput
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
        />
        <SearchHistory
          onSelect={() => setIsHistoryOpen(false)}
          isOpen={isHistoryOpen}
        />
      </div>
    </form>
  );
}

export default HeaderSearchDesktop;
