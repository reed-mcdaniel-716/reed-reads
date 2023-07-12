type IndustryIdentifiers = {
  type: String;
  identifier: String;
};

type ImageLinks = {
  smallThumbnail?: String;
  thumbnail?: String;
  small?: String;
  medium?: String;
  large?: String;
  extraLarge?: String;
};

export type GoogleBookVolumeDetails = {
  id: String;
  title: String;
  subTitle: String;
  authors: String[];
  publisher: String;
  publishedDate: String;
  industryIdentifiers: IndustryIdentifiers[];
  description: String;
  pageCount: Number;
  categories: String[];
  imageLinks: ImageLinks;
  canonicalVolumeLink: String;
  language: String;
};
