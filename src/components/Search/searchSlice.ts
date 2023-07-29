import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleBookVolume } from "../../utils/types";
import { fetchBooksFromApi } from "../../utils/apiHelpers";

// STATE INITIALIZATION
type SearchState = {
  searchString: string;
  bookVolumes: GoogleBookVolume[];
  errorMessage: string;
};

const initialSearchState: SearchState = {
  searchString: "",
  bookVolumes: [] as GoogleBookVolume[],
  errorMessage: "",
} as SearchState;

// THUNKS

export const fetchBooksThunk = createAsyncThunk(
  "search/fetchBooks",
  async (searchString: string) => {
    const newBookVolumes = await fetchBooksFromApi(searchString);
    return { newBookVolumes: newBookVolumes, searchString: searchString };
  }
);

// SLICE
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    clearSearchString: (state) => {
      return { ...state, searchString: "" };
    },
    setSearchString: (state, action) => {
      return { ...state, searchString: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksThunk.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(fetchBooksThunk.fulfilled, (state, action) => {
        return {
          ...state,
          bookVolumes: action.payload.newBookVolumes,
          searchString: action.payload.searchString,
        };
      })
      .addCase(fetchBooksThunk.rejected, (state) => {
        return {
          ...state,
          errorMessage: "failed to fetch books",
        };
      });
  },
});

// EXPORTS
export default searchSlice.reducer;
