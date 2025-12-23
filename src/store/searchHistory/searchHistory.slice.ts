import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type HistoryRecord = {
  id: string;
  username: string;
};

interface SearchHistoryState {
  items: Array<HistoryRecord>;
}

const initialState: SearchHistoryState = {
  items: [],
};

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<HistoryRecord[]>) => {
      state.items = action.payload;
    },

    addSearch: (state, action: PayloadAction<string>) => {
      const newItem = {
        id: new Date().toISOString(),
        username: action.payload,
      };
      state.items.unshift(newItem);
      if (state.items.length > 5) state.items.pop();
    },
    clearHistory: (state) => {
      state.items = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setHistory, addSearch, clearHistory, removeItem } =
  searchHistorySlice.actions;
export default searchHistorySlice.reducer;
