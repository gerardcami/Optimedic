export type Loupes = {
	TITLE: string
	SUBTITLE: string
	DESCRIPTION_1: string
	DESCRIPTION_2: string
	DESCRIPTION_3: string
	TEXTS: Texts
	FRAMES_PATH: string
	PRODUCT_PATH: string
	PRODUCTS: Product[]
}

export type Product = {
	type: string
	products: ProductElement[]
}

export type ProductElement = {
	name: string
	slug: string
	card_image: string
	description: string
	details?: Details
}

export type Details = {
	detailed_description: string
	intro_text_1: string
	intro_text_2: string
	intro_image: string
	specs_image: string
	specs?: Specs
	frame_options: FrameOption[]
	intro_text_3?: string
}

export type FrameOption = {
	name: string
	slug: string
}

export type Specs = {
	magnification_power?: string
	weight: string
	field_width?: string
	field_depth?: string
}

export type Texts = {
	text_product_image: string
	text_title_specs: string
	text_intro_specs_1: string
	text_intro_specs_2: string
	text_specs_disclaimer: string
	text_magnification_power: string
	text_weight: string
	text_field_width: string
	text_field_depth: string
	text_frame_options: string
}
