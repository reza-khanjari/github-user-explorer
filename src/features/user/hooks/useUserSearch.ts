import { useNavigate } from "react-router-dom";
import validateUsername from "@utils/validateUsername";
import toast from "react-hot-toast";
import { useAppDispatch } from "@store/hooks";
import { addSearch } from "@store/searchHistory/searchHistory.slice";


function useUserSearch() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function submitUsername(
    rawValue: string,
  
  ) {
    const username = rawValue.trim().toLowerCase();
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      toast.error(usernameValidation.errorMsg!);
      return;
    }
    dispatch(addSearch(username));
    navigate(`/user/${username}`);
    return true
  }

  return { submitUsername };
}

export default useUserSearch;
