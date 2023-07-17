import {
  createSlice,
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { GoogleBookVolume } from "../../utils/types";
import { fetchBooksFromApi } from "../../utils/apiHelpers";

type SearchState = {
  searchString: string;
  bookVolumes: GoogleBookVolume[];
};

const initialSearchState: SearchState = {
  searchString: "",
  bookVolumes: [] as GoogleBookVolume[],
} as SearchState;

// ACTIONS
const setSearchString = createAction(
  "search/setSearchString",
  function prepare(inputString: string) {
    return {
      payload: {
        searchString: inputString,
      },
    };
  }
);
const clearSearchString = createAction("search/clearSearchString");

// REDUCERS and THUNKS
// finish up thunk then other reducers

const fetchBooks = createAsyncThunk(
  "search/fetchBooks",
  async (_, thunkApi) => {
    const state = thunkApi.getState() as SearchState;
    const searchString = state.searchString;
    return fetchBooksFromApi(searchString);
  }
);

// SLICE
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {},
});

// EXPORTS
const { actions, reducer } = searchSlice;
