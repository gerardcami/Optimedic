export type Frames = {
  type: string;
  products: Product[];
};

export type Product = {
  name: string;
  slug: string;
  card_image: string;
  description: string;
  details: Details;
};

export type Details = {
  detailed_description: string;
  intro_text_1: string;
  intro_text_2?: string;
  intro_text_3?: string;
  intro_image: string;
  colors: Color[];
  specs: Specs;
  loupe_options?: LoupeOption[];
};

export type Color = {
  name: string;
  image: string;
};

export type LoupeOption = {
  name: string;
  slug: string;
};

export type Specs = {
  materials?: string;
  sizes?: string;
  weight?: string;
  light_intensity?: string;
  color_rendering_index?: string;
  color_temperature?: string;
  est_charge_time?: string;
  est_batery_life?: string;
  included_batteries?: string;
};
