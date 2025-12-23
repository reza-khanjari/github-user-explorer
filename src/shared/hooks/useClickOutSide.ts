import { useEffect } from "react";

function useClickOutSide<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void,
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      const element = ref.current;
      if (!element) return;
      if (element.contains(e.target as Node)) return;
      handler();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutSide;
