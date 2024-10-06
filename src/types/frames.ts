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

export type FramesTexts = {
  text_color_options: string;
  text_color: string;
  text_specs?: string;
  text_materials?: string;
  text_sizes?: string;
  text_weight?: string;
  text_light_intensity?: string;
  text_color_rendering_index?: string;
  text_color_temperature?: string;
  text_est_charge_time?: string;
  text_est_battery_life?: string;
  text_included_batteries?: string;
  text_loupe_options?: string;
  text_all_loupe_options?: string;
};
