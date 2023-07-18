import axios from "axios";
import {
  GoogleBookVolume,
  IndustryIdentifier,
  ImageLink,
} from "../utils/types";

export const baseUrl = "https://www.googleapis.com/books/v1/volumes";

// construct an array of GoogleBookVolume from API response
export const booksFromResults = (results: any[]): GoogleBookVolume[] => {
  let industryIds: IndustryIdentifier[] = [];
  let imgLinks: ImageLink[] = [];
  let bookVolumes: GoogleBookVolume[] = [];

  results.forEach((result) => {
    result.volumeInfo.industryIdentifiers.forEach((id: any) => {
      const newIndustryId = {
        type: id.type,
        identifier: id.identifier,
      } as IndustryIdentifier;
      industryIds.push(newIndustryId);
    });

    result.volumeInfo.imageLinks.forEach((link: any) => {
      const newImageLink = {
        smallThumbnail: link.smallThumbnail,
        thumbnail: link.thumbnail,
        small: link.small,
        medium: link.medium,
        large: link.large,
        extraLarge: link.extraLarge,
      } as ImageLink;
      imgLinks.push(newImageLink);
    });

    // finish volume definition
    const newVolume = {
      id: result.id,
      title: result.volumeInfo.title,
      subTitle: result.volumeInfo.subTitle,
      authors: result.volumeInfo.authors,
      publisher: result.volumeInfo.publisher,
      publishedDate: result.volumeInfo.publishedDate,
      industryIdentifiers: industryIds,
    } as GoogleBookVolume;
    bookVolumes.push(newVolume);
  });
  return bookVolumes;
};

// query Google Books API for volumes base on search string
export const fetchBooksFromApi = async (
  searchString: string
): Promise<GoogleBookVolume[]> => {
  const config = {
    baseURL: baseUrl,
    method: "GET",
    params: {
      q: searchString,
    },
  };

  try {
    const response = await axios(config);
    console.log(response);
    const bookResults = response.data.items;
    const bookVolumes = booksFromResults(bookResults);
    return bookVolumes;
  } catch (error) {
    console.error(error);
    return [] as GoogleBookVolume[];
  }
};
