export type IndustryIdentifier = {
  type: string;
  identifier: string;
};

export type ImageLink = {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
};

export type GoogleBookVolume = {
  id: string;
  title: string;
  subTitle: string;
  authors: String[];
  publisher: string;
  publishedDate: string;
  industryIdentifiers: IndustryIdentifier[];
  description: string;
  pageCount: Number;
  categories: String[];
  imageLinks: ImageLink;
  canonicalVolumeLink: string;
  language: string;
};
