import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSearchHistory } from "@store/searchHistory/searchHistory.selectors";
import { motion } from "framer-motion";
import {
  clearHistory,
  removeItem,
  setHistory,
  type HistoryRecord,
} from "@store/searchHistory/searchHistory.slice";
import { FaTrash } from "react-icons/fa";
import useLocalStorage from "@hooks/useLocalStorage";
import { useEffect, useRef } from "react";

function SearchHistory({
  isOpen,
  onSelect,
}: {
  isOpen: boolean;
  onSelect: () => void;
}) {
  const [storedHistory, setStoredHistory] = useLocalStorage<HistoryRecord[]>(
    "searchHistory",
    [],
  );
  const navigate = useNavigate();
  const history = useAppSelector(selectSearchHistory);
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && storedHistory.length > 0)
      dispatch(setHistory(storedHistory));
    initialized.current = true;
  }, [storedHistory]);

  useEffect(() => {
    setStoredHistory(history);
  }, [history, setStoredHistory]);

  if (history.length === 0 || isOpen) return null;
  return (
    <>
      (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-full right-0 left-0 z-50 h-max w-full rounded-2xl border border-white/15 bg-[#361C87]/80 px-6 py-4 shadow-2xl shadow-black/40 backdrop-blur-2xl"
      >
        <ul className="flex flex-col items-center gap-y-2">
          {history.map((item) => (
            <li
              className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg border-white/25 bg-white/25 px-4 py-1 text-center text-black hover:border-white/45 hover:bg-white/20 active:bg-white/25"
              key={item.id}
            >
              <button
                type="button"
                className="w-full cursor-pointer text-sm text-black/75"
                onClick={() => {
                  navigate(`/user/${item.username}`);
                  onSelect();
                }}
              >
                {item.username}
              </button>
              <FaTrash onClick={() => dispatch(removeItem(item.id))} />
            </li>
          ))}
        </ul>

        <button
          className="mt-2 w-full cursor-pointer text-center hover:text-white/80"
          type="button"
          onClick={() => dispatch(clearHistory())}
        >
          Clear
        </button>
      </motion.div>
      )
    </>
  );
}

export default SearchHistory;
