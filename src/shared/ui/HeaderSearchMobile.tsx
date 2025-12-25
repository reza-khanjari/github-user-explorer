import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SearchHistory from "./SearchHistory";
import useHeaderSearch from "./useHeaderSearch";

function HeaderSearchMobile() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const { handleSubmit, inputRef } = useHeaderSearch(() =>
    setIsSearchOpen(false),
  );
  useEffect(() => {
    const KeyDownHandler = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsSearchOpen(false);
    if (isSearchOpen) {
      const orginalOverFlow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
      document.addEventListener("keydown", KeyDownHandler);
      return () => {
        document.body.style.overflow = orginalOverFlow;
        document.removeEventListener("keydown", KeyDownHandler);
      };
    }
  }, [isSearchOpen, inputRef]);
  return (
    <div className="w-full">
      <FaSearch
        className="cursor-pointer text-xl md:hidden"
        onClick={() => setIsSearchOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {isSearchOpen ? (
          <motion.div
            onClick={() => setIsSearchOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          >
            <motion.form
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, maxWidth: 0 }}
              animate={{ opacity: 1, maxWidth: "18.5rem" }}
              exit={{ opacity: 0, maxWidth: 0 }}
              transition={{ duration: 0.25 }}
              className="relative top-16 m-auto flex w-full space-y-6"
            >
              <SearchInput ref={inputRef} />
              <SearchHistory
                onSelect={() => {
                  setIsSearchOpen(false);
                }}
              />
            </motion.form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default HeaderSearchMobile;
