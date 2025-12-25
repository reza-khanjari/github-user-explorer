import { useEffect, useRef, useState, type FormEvent } from "react";
import SearchInput from "@ui/SearchInput";
import useUserSearch from "@features/user/hooks/useUserSearch";
import SearchHistory from "@ui/SearchHistory";

import { FaSearch } from "react-icons/fa";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { submitUsername } = useUserSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const rawValue = inputRef.current?.value ?? "";
    const success = submitUsername(rawValue);
    if (!success) return;
    setIsOpen(false);
    setQuery("");
  }

  useEffect(() => {
    if (isFocused && query.trim().length === 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [query, isFocused]);

  return (
    <div className="my-6 flex w-full flex-col rounded-2xl border border-white/15 bg-white/5 px-6 py-8 shadow-xl backdrop-blur-xl md:max-w-105">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-max flex-col items-center"
      >
        <label
          className="mr-auto w-full text-sm font-bold text-white capitalize"
          htmlFor=""
        >
          username
        </label>
        <div className="flex w-full items-center justify-center gap-x-4">
          <div className="relative my-1 flex w-full">
            <SearchInput
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              ref={inputRef}
            />
            <SearchHistory onSelect={() => setIsOpen(false)} isOpen={isOpen} />
          </div>
          <button
            id="submitButton"
            type="submit"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
          >
            <FaSearch className="size-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
