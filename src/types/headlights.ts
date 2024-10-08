export type Headlights = {
  TITLE: string;
  SUBTITLE: string;
  DESCRIPTION_1: string;
  DESCRIPTION_2: string;
  DESCRIPTION_3: string;
  TEXTS: Texts;
  PRODUCT_PATH: string;
  PRODUCTS: Product[];
};

export type Product = {
  type: string;
  products: ProductElement[];
};

export type ProductElement = {
  name: string;
  slug: string;
  card_image: string;
  description: string;
  details: Details;
};

export type Details = {
  detailed_description: string;
  intro?: Intro;
  specs: Specs;
  features?: Feature[];
};

export type Feature = {
  title: string;
  description: string;
};

export type Intro = {
  intro_text_1: string;
  intro_text_2: string;
  intro_text_3: string;
  intro_image: string;
  intro_text_4?: string;
};

export type Specs = {
  weight: string;
  light_intensity: string;
  color_rendering_index: string;
  intensity_control?: string;
  color_temperature: string;
  focus: string;
  est_charge_time: string;
  est_battery_life: string;
  battery_type?: string;
};

export type Texts = {
  text_product_image: string;
  text_features: string;
  text_specs: string;
  text_weight: string;
  text_light_intensity: string;
  text_color_rendering_index: string;
  text_intensity_control: string;
  text_color_temperature: string;
  text_focus: string;
  text_est_charge_time: string;
  text_est_battery_life: string;
  text_battery_type: string;
};
