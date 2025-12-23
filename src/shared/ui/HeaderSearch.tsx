import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import useUserSearch from "@features/user/hooks/useUserSearch";
import { FaSearch } from "react-icons/fa";
import SearchHistory from "./SearchHistory";
import useIsMobile from "@hooks/useIsMobile";
import useClickOutSide from "@hooks/useClickOutSide";

function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const { submitUsername } = useUserSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const rawValue = inputRef.current?.value ?? "";
    submitUsername(rawValue, setIsOpen);
    inputRef.current!.value = "";
  }

  useClickOutSide(wrapperRef, () => setIsOpen(false));

  return (
    <form onSubmit={handleSubmit}>
      {isMobile ? (
        <div className="w-full">
          <FaSearch
            className="cursor-pointer text-xl md:hidden"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          />
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.div
                ref={wrapperRef}
                initial={{ opacity: 0, maxWidth: 0 }}
                animate={{ opacity: 1, maxWidth: "18.5rem" }}
                exit={{ opacity: 0, maxWidth: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-21 left-1/2 -translate-x-1/2 overflow-hidden md:hidden"
              >
                <SearchInput onFocus={() => setIsOpen(true)} ref={inputRef} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : (
        <div ref={wrapperRef} className="relative hidden w-full md:block">
          <SearchInput onFocus={() => setIsOpen(true)} ref={inputRef} />
          <SearchHistory onSelect={() => setIsOpen(false)} isOpen={isOpen} />
        </div>
      )}
    </form>
  );
}

export default HeaderSearch;
