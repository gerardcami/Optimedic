export type Loupes = {
  type: string;
  products: Product[];
};

export type Product = {
  name: string;
  slug: string;
  cover_image: string;
  description: string;
  specs?: Spec[];
  frame_options?: FrameOption[];
  magnification_variants?: MagnificationVariant[];
};

export type FrameOption = {
  name: string;
  slug: string;
};

export type MagnificationVariant = {
  variant: string;
  field_width: string;
  field_depth: string;
};

export type Spec = {
  magnification_power: string;
  weight: string;
  field_width: string;
  field_depth: string;
};
