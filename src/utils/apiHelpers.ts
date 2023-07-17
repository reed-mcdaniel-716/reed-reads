import axios from "axios";
import { GoogleBookVolume } from "../utils/types";

export const baseUrl = "https://www.googleapis.com/books/v1/volumes";

// construct an array of GoogleBookVolume from API response
export const booksFromResults = (results: any[]): GoogleBookVolume[] => {
  return [] as GoogleBookVolume[];
};

// query Google Books API for volumes base on search string
export const fetchBooksFromApi = (searchString: string) => {};
