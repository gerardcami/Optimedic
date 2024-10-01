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
  name: Name;
  slug: Slug;
};

export enum Name {
  DragonFly = "DragonFly™",
  Phantom = "Phantom™",
  Rydon = "Rydon™",
  Tempo = "Tempo™",
  TempoRefinedFit = "Tempo™ Refined Fit",
  Triumph = "Triumph™",
  Victory = "Victory™",
}

export enum Slug {
  Dragonfly = "dragonfly",
  Phantom = "phantom",
  Rydon = "rydon",
  Tempo = "tempo",
  TempoRefinedFit = "tempo-refined-fit",
  Triumph = "triumph",
  Victory = "victory",
}

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
