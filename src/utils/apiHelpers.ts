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
  let imgLink: ImageLink;
  let bookVolumes: GoogleBookVolume[] = [];

  if (results.length === 0) {
    return bookVolumes;
  }
  results.forEach((result) => {
    result.volumeInfo.industryIdentifiers.forEach((id: any) => {
      const newIndustryId = {
        type: id.type,
        identifier: id.identifier,
      } as IndustryIdentifier;
      industryIds.push(newIndustryId);
    });

    imgLink = {
      smallThumbnail: result.volumeInfo.imageLinks?.smallThumbnail,
      thumbnail: result.volumeInfo.imageLinks?.thumbnail,
      small: result.volumeInfo.imageLinks?.small,
      medium: result.volumeInfo.imageLinks?.medium,
      large: result.volumeInfo.imageLinks?.large,
      extraLarge: result.volumeInfo.imageLinks?.extraLarge,
    } as ImageLink;
    const newVolume = {
      id: result.id,
      title: result.volumeInfo.title,
      subTitle: result.volumeInfo.subTitle,
      authors: result.volumeInfo.authors,
      publisher: result.volumeInfo.publisher,
      publishedDate: result.volumeInfo.publishedDate,
      industryIdentifiers: industryIds,
      description: result.volumeInfo.description,
      pageCount: result.volumeInfo.pageCount,
      categories: result.volumeInfo.categories,
      imageLinks: imgLink,
      canonicalVolumeLink: result.volumeInfo.canonicalVolumeLink,
      language: result.volumeInfo.language,
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
    const bookResults = response.data.items;
    const bookVolumes = booksFromResults(bookResults);
    return bookVolumes;
  } catch (error) {
    return [] as GoogleBookVolume[];
  }
};
