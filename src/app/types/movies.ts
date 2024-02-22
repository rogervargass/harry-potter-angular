export interface Movie {
  id: string;
  type: string;
  attributes: Attributes;
  links: Links;
}

export interface Attributes {
  slug: string;
  box_office: string;
  budget: string;
  cinematographers: string[];
  directors: string[];
  distributors: string[];
  editors: string[];
  music_composers: string[];
  poster: string;
  producers: string[];
  rating: string;
  release_date: string;
  running_time: string;
  screenwriters: string[];
  summary: string;
  title: string;
  trailer: string;
  wiki: string;
}

export interface Links {
  self: string;
}
