import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
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

// ACTIONS
const clearSearchString = createAction("clearSearchString");

const setSearchString = createAction(
  "setSearchString",
  function prepare(inputString: string) {
    return {
      payload: {
        searchString: inputString,
      },
    };
  }
);

// THUNKS

const fetchBooksThunk = createAsyncThunk("fetchBooks", async (_, thunkApi) => {
  const state = thunkApi.getState() as SearchState;
  const searchString = state.searchString;
  const newBookVolumes = await fetchBooksFromApi(searchString);
  return newBookVolumes;
});

// SLICE
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    [clearSearchString.type]: (state) => {
      return { ...state, searchString: "" };
    },
    [setSearchString.type]: (state, action) => {
      console.log(`setting search string to ${action.payload.searchString}`);
      return { ...state, searchString: action.payload.searchString };
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
          bookVolumes: action.payload,
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
export { clearSearchString, setSearchString };
export default searchSlice.reducer;
