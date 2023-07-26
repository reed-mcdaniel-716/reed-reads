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

const fetchBooksThunk = createAsyncThunk(
  "search/fetchBooks",
  async (searchString: string, thunkApi) => {
    // figure out why this isn't being triggered
    console.log("triggered thunk...");
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
      console.log("clear string reducer");
      return { ...state, searchString: "" };
    },
    setSearchString: (state, action) => {
      console.log(`setting search string to ${action.payload}`);
      return { ...state, searchString: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksThunk.pending, (state) => {
        return {
          ...state,
          bookVolumes: [] as GoogleBookVolume[],
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
          bookVolumes: [] as GoogleBookVolume[],
          errorMessage: "failed to fetch books",
        };
      });
  },
});

// EXPORTS
export default searchSlice.reducer;
