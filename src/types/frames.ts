export type Frames = {
  type: string;
  products: Product[];
};

export type Product = {
  name: string;
  slug: string;
  card_image: string;
  description: string;
  details: Detail[];
};

export type Detail = {
  detailed_description: string;
  intro_text_1: string;
  intro_text_2?: string;
  intro_text_3?: string;
  colors: Color[];
  specs: Spec[];
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

export type Spec = {
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
