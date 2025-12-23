import type { RootState } from "../store";

export const selectSearchHistory = (state: RootState) =>
  state.searchHistory.items;
