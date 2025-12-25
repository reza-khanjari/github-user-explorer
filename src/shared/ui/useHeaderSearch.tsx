import useUserSearch from "@/features/user/hooks/useUserSearch";
import { useRef } from "react";

function useHeaderSearch(onSuccess?: () => void) {
  const { submitUsername } = useUserSearch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const rawValue = inputRef.current?.value ?? "";
    const success = submitUsername(rawValue);
    if (!success) return;
    if (inputRef.current) inputRef.current.value = "";
    onSuccess?.();
  }
  return { handleSubmit, inputRef };
}

export default useHeaderSearch;
