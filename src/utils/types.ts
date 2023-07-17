type IndustryIdentifiers = {
  type: string;
  identifier: string;
};

type ImageLinks = {
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
  industryIdentifiers: IndustryIdentifiers[];
  description: string;
  pageCount: Number;
  categories: String[];
  imageLinks: ImageLinks;
  canonicalVolumeLink: string;
  language: string;
};
