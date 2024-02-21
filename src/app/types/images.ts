export type Image = {
  src: string;
  alt: string;
};

export type GalleryImage = Image & {
  description: string;
};
