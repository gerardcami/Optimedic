import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, e as renderHead, f as renderSlot } from './astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Popover, Transition, PopoverGroup, PopoverButton, PopoverPanel, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const SEO_TITLE$1 = "Optimedic";
const SEO_DESCRIPTION$1 = "";
const HEADER$1 = {
	HOME_LINK: "/",
	NAV_ITEMS: [
		{
			name: "Productos",
			href: ""
		},
		{
			name: "Eventos",
			href: "/eventos"
		},
		{
			name: "Sobre nosotros",
			href: "/sobre-nosotros"
		},
		{
			name: "Contacto",
			href: "/contacto"
		}
	]
};
const FOOTER$1 = {
	SECTIONS: [
		{
			TITLE: "Relacionado",
			LINKS: [
				{
					name: "Home",
					href: "/"
				},
				{
					name: "Eventos",
					href: "/eventos"
				},
				{
					name: "Sobre nosotros",
					href: "/sobre-nosotros"
				},
				{
					name: "Contacto",
					href: "/contacto"
				}
			]
		},
		{
			TITLE: "Productos",
			LINKS: [
				{
					name: "Lupas",
					href: "/productos/lupas"
				},
				{
					name: "Monturas",
					href: "/productos/monturas"
				},
				{
					name: "Iluminadores frontales",
					href: "/productos/iluminadores-frontales"
				},
				{
					name: "MicroAire",
					href: "/productos/microaire"
				},
				{
					name: "Renuvion",
					href: "/productos/renuvion"
				}
			]
		},
		{
			TITLE: "Legal",
			LINKS: [
				{
					name: "Política de privacidad",
					href: "/politica-de-privacidad"
				},
				{
					name: "Política de cookies",
					href: "/politica-de-cookies"
				}
			]
		},
		{
			TITLE: "Contacto",
			LINKS: [
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-mail' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path><path d='M3 7l9 6l9 -6'></path></svg>",
					data: "info@optimedic.es",
					href: "mailto:info@optimedic.es"
				},
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-phone' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path></svg>",
					data: "+34 938 43 03 36",
					href: "tel:+34 938 43 03 36"
				},
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-whatsapp' width='22' height='22' viewBox='0 0 22 22' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path><path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path></svg>",
					data: "Whatsapp",
					href: "https://wa.me/34687427703"
				}
			]
		}
	],
	COPYRIGHT: "Todos los derechos reservados."
};
const PAGE_NOT_FOUND$1 = {
	TITLE: "Página no encontrada",
	BUTTON: "Volver a inicio",
	HOME_PAGE: "/"
};
const HOME_PAGE$1 = {
	TITLE: "Optimedic",
	SLOGAN: "La precisión a su medida",
	FEATURES: [
		{
			title: "Calidad",
			description: "Todos nuestros productos y servicios destacan por su <strong>calidad</strong> y <strong>precisión</strong>",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-stars' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path><path d='M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path><path d='M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path></svg>"
		},
		{
			title: "Líderes de mercado",
			description: "Optimedic está <strong>constantemente</strong> superando los límites para brindar los <strong>últimos productos</strong>",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-rosette-number-1' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M10 10l2 -2v8'></path><path d='M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1'></path></svg>"
		},
		{
			title: "Confianza",
			description: "Más de <strong>200 médicos referentes</strong> ya han confiado en nosotros",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-heart-handshake' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path><path d='M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25'></path><path d='M12.5 15.5l2 2'></path><path d='M15 13l2 2'></path></svg>"
		},
		{
			title: "Post venta",
			description: "Realizamos un servicio de venta y post-venta <strong>completamente personalizado</strong>",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-shopping-bag-check' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248'></path><path d='M9 11v-5a3 3 0 0 1 6 0v5'></path><path d='M15 19l2 2l4 -4'></path></svg>"
		}
	],
	PRODUCTS: [
		{
			name: "Loupes",
			img: "/public/img/oscar-alonso1.jpg",
			subcategories: [
				{
					name: "Lupas",
					description: "Encuentre su aumento ideal con nuestras lupas.",
					href: "/productos/lupas"
				},
				{
					name: "Monturas",
					description: "Monturas duraderas y estéticamente atractivas que superarán sus expectativas de rendimiento y estilo.",
					href: "/productos/monturas"
				},
				{
					name: "Iluminadores frontales",
					description: "Monturas duraderas y estéticamente atractivas que superarán sus expectativas de rendimiento y estilo.",
					href: "/productos/iluminadores-frontales"
				}
			]
		},
		{
			name: "Surgery",
			img: "/public/img/IMG_0415.png",
			subcategories: [
				{
					name: "MicroAire",
					description: "Un potente instrumento de precisión diseñado para la extracción de grasa de pequeño o gran volumen, el contorno corporal y la recolección de grasa.",
					href: "/productos/microaire"
				},
				{
					name: "Renuvion",
					description: "El único dispositivo aprobado por la FDA para su uso después de una liposucción y el único dispositivo aprobado por la FDA para contraer el tejido blando subcutáneo.",
					href: "/productos/renuvion"
				}
			]
		},
		{
			name: "Eventos",
			img: "/public/img/barcelona-oculoplastics-resumen-grafico-sorteo-gafas-lupa.jpg",
			subcategories: [
				{
					name: "Organización de eventos",
					description: "Organizamos eventos para sus empresas.",
					href: "/productos/eventos"
				}
			]
		}
	]
};
const LOUPES$1 = {
	TITLE: "Lupas",
	SUBTITLE: "El aumento excepcional es esencial para todo, desde los exámenes rutinarios hasta los complicados. Trabajaremos con usted para encontrar el mejor nivel de aumento que le permita realizar su trabajo lo mejor posible.",
	DESCRIPTION_1: "Nuestros niveles de aumento van de <strong>2,5 a 5,5</strong>, incluyendo dos lupas de aumento variable, <strong>EyeZoom™</strong> y <strong>EyeZoom™ Mini</strong>. EyeZoom ofrece <strong>tres niveles de aumento en una sola lupa</strong> y ha ganado el <strong>Cellerant Best of Class Technology Award</strong> (premio de tecnología Mejor en su clase de Cellerant) <strong>tres veces</strong> desde su lanzamiento.",
	DESCRIPTION_2: "La <strong>graduación, distancia de trabajo y el ángulo de inclinación</strong> es personalizado. Además, <strong>se incluyen</strong> protectores laterales, banda para la cabeza, estuche personalizado, destornillador óptico y gamuza.",
	DESCRIPTION_3: "Todos los sistemas ópticos están hechos con <strong>lentes de vidrio recocido fino de grado A</strong> con revestimientos antiarañazos y antirreflejos. Todas las lentes de soporte están hechas con <strong>material de policarbonato de alto índice</strong>.",
	TEXTS: {
		text_product_image: "Imagen del producto",
		text_title_specs: "Especificaciones",
		text_intro_specs_1: "Todos los sistemas ópticos están fabricados con lentes de vidrio recocido fino de grado A fusionadas con revestimientos antirrayado y antirreflejos.",
		text_intro_specs_2: "La distancia de trabajo y el ángulo de declinación se personalizan para cada usuario.",
		text_specs_disclaimer: "Las especificaciones proporcionadas son aproximadas y pueden variar según factores individuales, como la distancia de trabajo específica de cada usuario.",
		text_magnification_power: "Potencia de aumento",
		text_weight: "Peso",
		text_field_width: "Amplitud de campo",
		text_field_depth: "Profundidad de campo",
		text_frame_options: "Opciones de montura"
	},
	FRAMES_PATH: "/productos/monturas/",
	PRODUCT_PATH: "/productos/lupas/",
	PRODUCTS: [
		{
			type: "Aumento fijo",
			products: [
				{
					name: "HDL™ 2.5 Micro",
					slug: "hdl-25-micro",
					card_image: "/public/img/loupes/hdl-25-micro/card.webp",
					description: "Esta óptica de tamaño micro ofrece una comodidad ligera y una visualización superior para todo tipo de usuarios de lupas.",
					details: {
						detailed_description: "Óptica de tamaño micro que ofrece una comodidad ligera sin sacrificar el aumento.",
						intro_text_1: "Superando los límites de una microóptica típica, esta lupa proporciona un generoso campo de visión con claridad de borde a borde.",
						intro_text_2: "Con un tamaño tan compacto, se dispone de espacio de visión adicional por encima del telescopio, lo que facilita la lectura de gráficos y las consultas con los pacientes.",
						intro_image: "/public/img/loupes/hdl-25-micro/intro.webp",
						specs_image: "/public/img/loupes/hdl-25-micro/specs.webp",
						specs: {
							magnification_power: "2,5x",
							weight: "39,15 g",
							field_width: "8,75 cm",
							field_depth: "17,8 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 2.5 Macro",
					slug: "hdl-25-macro",
					card_image: "/public/img/loupes/hdl-25-macro/card.webp",
					description: "Esta lupa quirúrgica hecha a medida presenta una claridad de borde a borde y un generoso campo de visión para el usuario.",
					details: {
						detailed_description: "Las pruebas realizadas por terceros confirman que nuestras lupas ofrecen la calidad de imagen más nítida del sector, con la mejor resolución óptica y transmisión de luz de su categoría.",
						intro_text_1: "La HDL™ 2.5 Macro se distingue por su gran amplitud de campo, que permite introducir instrumentos en el campo de visión con facilidad.",
						intro_text_2: "El bisel alargado también reduce la inclinación de la cabeza al aprovechar los ángulos de declinación más pronunciados.",
						intro_text_3: "Un reciente estudio de laboratorio de terceros confirma que ofrecemos la lupa de 2,5 aumentos más nítida del sector.",
						intro_image: "/public/img/loupes/hdl-25-macro/intro.webp",
						specs_image: "/public/img/loupes/hdl-25-macro/specs.webp",
						specs: {
							magnification_power: "2,5x",
							weight: "50,7 g",
							field_width: "10,4 cm",
							field_depth: "12,7 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 3.0",
					slug: "hdl-30",
					card_image: "/public/img/loupes/hdl-30/card.webp",
					description: "La lupa ideal para los clínicos que desean un mayor aumento sin renunciar a una sensación de ligereza.",
					details: {
						detailed_description: "Compacta y ligera, esta lupa está diseñada para ofrecer una comodidad raramente asociada a las ópticas galileanas de potencia de aumento equivalente.",
						intro_text_1: "Esta lupa hecha a medida cuenta con una claridad de borde a borde y un generoso campo de visión.",
						intro_text_2: "Con un diseño compacto y ligero, la HDL™ 3.0x es la lupa ideal para los médicos que desean un mayor aumento sin renunciar a la sensación de ligereza.",
						intro_image: "/public/img/loupes/hdl-30/intro.webp",
						specs_image: "/public/img/loupes/hdl-30/specs.webp",
						specs: {
							magnification_power: "3,0x",
							weight: "48,7 g",
							field_width: "7,9 cm",
							field_depth: "19 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 3.5x",
					slug: "hdl-35x",
					card_image: "/public/img/loupes/hdl-35x/card.webp",
					description: "Aumento de mayor precisión diseñado con un amplio campo de visión.",
					details: {
						detailed_description: "Aumento de mayor precisión diseñado con un amplio campo de visión.",
						intro_text_1: "Nuestras lupas de campo ampliado de 3,5x aumentos están diseñadas para profesionales que realizan procedimientos exigentes.",
						intro_text_2: "Los prismas HDL™ permiten interacciones precisas, mayor visibilidad y un ángulo de declinación personalizable que le permite realizar los procedimientos que necesita con precisión.",
						intro_image: "/public/img/loupes/hdl-35x/intro.webp",
						specs_image: "/public/img/loupes/hdl-35x/specs.webp",
						specs: {
							magnification_power: "3,5x",
							weight: "67,5 g",
							field_width: "8,9 cm",
							field_depth: "9,1 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 4.5x",
					slug: "hdl-45x",
					card_image: "/public/img/loupes/hdl-45x/card.webp",
					description: "Aumento de mayor precisión diseñado con un amplio campo de visión.",
					details: {
						detailed_description: "Mayor aumento diseñado para una mayor precisión y rendimiento.",
						intro_text_1: "Con un aumento de 4,5x, estas lupas prismáticas de campo ampliado están diseñadas para profesionales que buscan un mayor detalle y aumento.",
						intro_text_2: "Los prismas HDL™ ofrecen una mayor visibilidad y un ángulo de declinación personalizable, al tiempo que le permiten realizar los procedimientos que necesita con precisión.",
						intro_image: "/public/img/loupes/hdl-45x/intro.webp",
						specs_image: "/public/img/loupes/hdl-45x/specs.webp",
						specs: {
							magnification_power: "4,5x",
							weight: "71,5 g",
							field_width: "7,5 cm",
							field_depth: "6,7 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							}
						]
					}
				},
				{
					name: "HDL™ 5.5x",
					slug: "hdl-55x",
					card_image: "/public/img/loupes/hdl-55x/card.webp",
					description: "Nuestro mayor aumento autónomo diseñado para ofrecer precisión y rendimiento.",
					details: {
						detailed_description: "Nuestro mayor aumento autónomo diseñado para ofrecer precisión y rendimiento.",
						intro_text_1: "Con un aumento de 5,5x, estas lupas prismáticas de campo ampliado están diseñadas para profesionales que realizan procedimientos exigentes.",
						intro_text_2: "Los prismas HDL™ permiten interacciones precisas, visibilidad mejorada y un ángulo de declinación personalizable que le permite realizar los procedimientos que necesita con precisión.",
						intro_image: "/public/img/loupes/hdl-55x/intro.webp",
						specs_image: "/public/img/loupes/hdl-55x/specs.webp",
						specs: {
							magnification_power: "5,5x",
							weight: "74,4 g",
							field_width: "6,4 cm",
							field_depth: "5,9 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		},
		{
			type: "Lupas intercambiables",
			products: [
				{
					name: "OmniOptic™",
					slug: "omnioptic",
					card_image: "/public/img/loupes/omnioptic/card.webp",
					description: "Descubra la primera y única lupa de aumento intercambiable que permite a los clínicos seleccionar el poder de ampliación óptimo para cada procedimiento.",
					details: {
						detailed_description: "La primera y única lupa de aumentos intercambiables.",
						intro_text_1: "Con la posibilidad de elegir entre cuatro niveles diferentes de aumento (que van de 2,5x a 5,5x), el OmniOptic es un sistema ideal para los usuarios que buscan aumentar su potencia de aumento a lo largo de su carrera.",
						intro_text_2: "El diseño exclusivo incluye un anclaje magnético integrado en la lente portadora de la montura, lo que permite a los clínicos aumentar la potencia de aumento sin tener que adquirir varios pares de lupas.",
						intro_image: "/public/img/loupes/omnioptic/intro.webp",
						specs_image: "/public/img/loupes/omnioptic/specs.webp",
						specs: {
							magnification_power: "2,5x · 3,5x · 4,5x · 5,5x",
							weight: "57,3 g en 2,5x · 75,3 g en 3,5x · 79,1 g en 4,5x · 82,1 g en 5,5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							}
						]
					}
				}
			]
		},
		{
			type: "Aumento variable",
			products: [
				{
					name: "EyeZoom™",
					slug: "eyezoom",
					card_image: "/public/img/loupes/eyezoom/card.webp",
					description: "La primera lupa de aumento ajustable, EyeZoom™ ofrece tres niveles de aumento ajustables que van de 3x a 5x.",
					details: {
						detailed_description: "La primera y única lupa de aumento variable 3 en 1. Cambia sin problemas entre los niveles de aumento 3x, 4x y 5x.",
						intro_text_1: "Su día es variable, sus lupas también deberían serlo. Nuestra tecnología ofrece claridad de borde a borde, resolución de alta definición y la posibilidad de cambiar entre aumentos. Consiga unas lupas tan ágiles como usted.",
						intro_text_2: "A medida que aumenta el aumento, disminuye el campo de visión. Es la física del aumento. Con EyeZoom™ obtendrá lo mejor de ambos.",
						intro_text_3: "Destaque con nuestra galardonada tecnología EyeZoom™.",
						intro_image: "/public/img/loupes/eyezoom/intro.webp",
						specs_image: "/public/img/loupes/eyezoom/specs.webp",
						specs: {
							magnification_power: "3x · 4x · 5x",
							weight: "82,2 g",
							field_width: "9,5 cm en 3x · 7,4 cm en 4x · 6,1 cm en 5x",
							field_depth: "11,9 cm en 3x · 9,7 cm en 4x · 7,6 cm en 5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "EyeZoom™ Mini",
					slug: "eyezoom-mini",
					card_image: "/public/img/loupes/eyezoom-mini/card.webp",
					description: "La EyeZoom™ Mini, la segunda lupa de aumento ajustable lanzada bajo la marca EyeZoom™, ofrece aumentos que van de 2,5x a 3,5x.",
					details: {
						detailed_description: "La segunda incorporación a la familia de aumentos variables Orascoptic permite alternar sin problemas entre los niveles de aumento 2,5x y 3,5x.",
						intro_text_1: "EyeZoom™ Mini incorpora una tecnología de aumento variable en dos pasos que permite al usuario alternar entre 2,5x y 3,5x.",
						intro_text_2: "Una distancia de trabajo constante en cada nivel de aumento ayuda a reducir la necesidad de reposicionamiento al alternar entre los niveles de aumento.",
						intro_image: "/public/img/loupes/eyezoom-mini/intro.webp",
						specs_image: "/public/img/loupes/eyezoom-mini/specs.webp",
						specs: {
							magnification_power: "2,5x · 3,5x",
							weight: "73,7 g",
							field_width: "7,5 cm en 2.5x · 8,1 cm en 3.5x",
							field_depth: "12,1 cm en 2.5x · 9,6 cm en 3.5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "EyeZoom™ Max",
					slug: "eyezoom-max",
					card_image: "/public/img/loupes/eyezoom-max/card.webp",
					description: "La primera lupa que ofrece niveles de aumento ajustables de 3,5x y 6,5x.",
					details: {
						detailed_description: "La última incorporación a la familia de aumentos variables de Orascoptic y nuestro mayor aumento hasta la fecha. Cambie sin problemas entre los niveles de aumento 3,5x y 6,5x.",
						intro_text_1: "EyeZoom™ Max, nuestra mayor potencia de aumento hasta la fecha, ofrece una resolución de alta definición y una agudeza visual mejorada.",
						intro_text_2: "El generoso tamaño de campo del aumento de 3,5x, combinado con la capacidad de realizar procedimientos precisos con el aumento de 6,5x, crea una experiencia versátil con la lupa.",
						intro_text_3: "Ideal para los médicos generales que realizan procedimientos de endodoncia, EyeZoom™ Max elimina la necesidad de cambiar de lupa durante los procedimientos.",
						intro_image: "/public/img/loupes/eyezoom-max/intro.webp",
						specs_image: "/public/img/loupes/eyezoom-max/specs.webp",
						specs: {
							magnification_power: "3,5x · 6,5x",
							weight: "92,7 g",
							field_width: "8,8 cm en 3,5x · 5,6 cm en 6,5x",
							field_depth: "8,8 cm en 3,5x · 5,0 cm en 6,5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		},
		{
			type: "Ergo",
			products: [
				{
					name: "HDL™ Ergo 3.5x",
					slug: "hdl-ergo-35x",
					card_image: "/public/img/loupes/hdl-ergo-35x/card.webp",
					description: "Al utilizar prismas refractivos que permiten a los clínicos sentarse erguidos y reducir la inclinación del cuello, la lupa HDL™ Ergo es una opción ergonómica que ofrece comodidad durante todo el día.",
					details: {
						detailed_description: "Centrada en la ergonomía, esta lupa de desviación está diseñada para mejorar la postura y reducir las molestias en el cuello.",
						intro_text_1: "La lupa Ergo de alta definición le permite trabajar con comodidad y preservar su carrera. Nuestra óptica de deflexión mejora la postura sin sacrificar la visión. Al utilizar prismas refractivos que permiten a los clínicos sentarse erguidos y reducir la inclinación del cuello, la lupa HDL Ergo es una opción ergonómica que ofrece comodidad durante todo el día.",
						intro_text_2: "Nuestra lupa Ergo de alta definición con aumento verificado de 3,5x supera a la competencia.",
						intro_text_3: "Mejore su postura, mejore su rendimiento.",
						intro_image: "/public/img/loupes/hdl-ergo-35x/intro.webp",
						specs_image: "/public/img/loupes/hdl-ergo-35x/specs.webp",
						specs: {
							magnification_power: "3,5x",
							weight: "67,6 g",
							field_width: "8,5 cm",
							field_depth: "8 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL Ergo™ 5.0x",
					slug: "hdl-ergo-50x",
					card_image: "/public/img/loupes/hdl-ergo-50x/card.webp",
					description: "Nuestro nivel más alto ofrecido en una lupa de deflexión, lo que la convierte en la lupa elegida por los clínicos que realizan procedimientos exigentes y desean proteger su postura.",
					details: {
						detailed_description: "Nuestro mayor aumento Ergo y centrada en la ergonomía, esta lupa de desviación está diseñada para mejorar la postura y reducir las molestias en el cuello.",
						intro_text_1: "La lupa Ergo de alta definición le permite trabajar con comodidad y preservar su carrera. Nuestra óptica de deflexión mejora la postura sin sacrificar la visión. Al utilizar prismas refractivos que permiten a los clínicos sentarse erguidos y reducir la inclinación del cuello, la lupa HDL Ergo es una opción ergonómica que ofrece comodidad durante todo el día.",
						intro_text_2: "Nuestro aumento HDL Ergo 5.0x es nuestro nivel más alto ofrecido en una lupa de desviación, convirtiéndola en la lupa de elección para los clínicos que realizan procedimientos exigentes.",
						intro_text_3: "Mejore su postura, mejore su rendimiento.",
						intro_image: "/public/img/loupes/hdl-ergo-50x/intro.webp",
						specs_image: "/public/img/loupes/hdl-ergo-50x/specs.webp",
						specs: {
							magnification_power: "5,0x",
							weight: "67,2 g",
							field_width: "6,5 cm",
							field_depth: "6,5 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		}
	]
};
const FRAMES$1 = {
	TITLE: "Monturas",
	SUBTITLE: "Tanto si prefiere estilos deportivos como icónicos, estamos seguros de que tenemos una montura que le encantará.",
	DESCRIPTION_1: "Escoger la montura correcta para su telescopio es tan importante como escoger la <strong>ampliación correcta</strong>. En <strong>Optimedic</strong>, nos esforzamos para ofrecerle monturas <strong>duraderas</strong> y <strong>estéticamente atractivas</strong> que superarán sus expectativas de <strong>rendimiento</strong> y <strong>estilo</strong>.",
	DESCRIPTION_2: "La <strong>graduación, distancia de trabajo y el ángulo de inclinación</strong> es personalizado. Además, <strong>se incluyen</strong> protectores laterales, banda para la cabeza, estuche personalizado, destornillador óptico y gamuza.",
	DESCRIPTION_3: "Las <strong>puntas de las patillas flexibles</strong> para un <strong>ajuste seguro</strong>, las <strong>monturas reforzadas</strong> para mantener la <strong>convergencia ocular</strong> y las <strong>plaquetas nasales ajustables</strong> para un <strong>confort óptimo</strong> hacen que nuestras monturas destaquen por encima de las demás.",
	TEXTS: {
		text_selected_color: "Color seleccionado",
		text_available_color: "Color disponible",
		text_product_image: "Imagen del producto",
		text_color_options: "Opciones de color",
		text_color: "Color",
		text_specs: "Especificaciones",
		text_materials: "Materiales",
		text_sizes: "Tamaños disponibles",
		text_weight: "Peso",
		text_light_intensity: "Intensidad de luz",
		text_color_rendering_index: "CRI (Índice de Reproducción cromática)",
		text_color_temperature: "Temperatura de color",
		text_est_charge_time: "Tiempo de carga estimado",
		text_est_battery_life: "Duración de batería estimada",
		text_included_batteries: "Baterías",
		text_loupe_options: "Opciones de lupa",
		text_all_loupe_options: "Disponible con todas las lupas"
	},
	LOUPES_PATH: "/productos/lupas/",
	PRODUCT_PATH: "/productos/monturas/",
	PRODUCTS: [
		{
			type: "Deportiva",
			products: [
				{
					name: "Rydon™",
					slug: "rydon",
					card_image: "/public/img/frames/rydon/card.webp",
					description: "Lleve la personalización a un nuevo nivel con bisagras de patillas flexibles, patillas plegables y almohadillas nasales ajustables.",
					details: {
						detailed_description: "Esta clásica y cómoda montura deportiva ofrece un ajuste personalizado y elegante con bisagras de patillas flexibles, los brazos de las patillas plegables y almohadillas nasales ajustables",
						intro_text_1: "Diseñadas y fabricadas por el famoso icono de las gafas Rudy Project®, la montura Rydon™ ofrece un ajuste verdaderamente a medida para cada usuario. Con las bisagras flexibles, las terminales de las patillas flexibles y las plaquetas nasales ajustables, esta montura lleva la personalización a un nuevo nivel.",
						intro_text_2: "La construcción exclusiva de semibordeado admite también dos formas de lente de soporte diferentes, lo que permite adaptar más la lupa al usuario al acomodar ángulos de declinación pronunciados y geometrías faciales específicas.",
						intro_text_3: "La Rydon admite una amplia gama de prescripciones incluidas las bifocales.",
						intro_image: "/public/img/frames/rydon/intro.webp",
						colors: [
							{
								name: "Negro",
								image: "/public/img/frames/rydon/black.png"
							},
							{
								name: "Azul",
								image: "/public/img/frames/rydon/blue.png"
							},
							{
								name: "Carbono",
								image: "/public/img/frames/rydon/carbon.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/rydon/merlot.png"
							},
							{
								name: "Carey",
								image: "/public/img/frames/rydon/carey.png"
							}
						],
						specs: {
							materials: "Carbono, magnesio, silicio, grilamida y titanio avanzados",
							sizes: "Tamaño único"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Phantom™",
					slug: "phantom",
					card_image: "/public/img/frames/phantom/card.webp",
					description: "Phantom, fabricada en titanio ligero, es la montura deportiva con graduación incorporada más ligera del mercado.",
					details: {
						detailed_description: "Comodidad ligera sin comprometer el rendimiento.",
						intro_text_1: "Fabricada en titanio ligero, Phantom es la montura deportiva con graduación incorporada más ligera del mercado. Phantom es un 15% más ligera que la principal competidora, con graduación.",
						intro_text_2: "Todas las mejores características - puntas de patilla flexibles, puente nasal ajustable, canal de control de cables y bisagras flexibles - sin el peso añadido.",
						intro_text_3: "Disponible en cinco colores impresionantes, Phantom es la elección perfecta para quienes priorizan la comodidad y el estilo.",
						intro_image: "/public/img/frames/phantom/intro.webp",
						colors: [
							{
								name: "Negro",
								image: "/public/img/frames/phantom/black.png"
							},
							{
								name: "Iris",
								image: "/public/img/frames/phantom/iris.png"
							},
							{
								name: "Oro rosa",
								image: "/public/img/frames/phantom/rosegold.png"
							},
							{
								name: "Zafiro",
								image: "/public/img/frames/phantom/sapphire.png"
							},
							{
								name: "Pizarra",
								image: "/public/img/frames/phantom/slate.png"
							}
						],
						specs: {
							materials: "Titanio",
							sizes: "Pequeño · Mediano"
						}
					}
				}
			]
		},
		{
			type: "Icónica",
			products: [
				{
					name: "Triumph™",
					slug: "triumph",
					card_image: "/public/img/frames/triumph/card.webp",
					description: "Esta montura icónica emplea una función de control de cables incorporada y está disponible en cinco impresionantes colores bicolores.",
					details: {
						detailed_description: "Esta montura icónica emplea una función integrada de control por cable y admite todos los niveles de aumento.",
						intro_text_1: "Combinando rendimiento y comodidad, Triumph™ es una ligera montura de titanio construida exclusivamente para lupas. El control por cable integrado elimina las distracciones y optimiza la eficacia. Elija cualquier nivel de aumento e incorpore su estilo personal con una de las cinco combinaciones de colores bicolores de moda. Las patillas ajustables y el puente nasal permiten un ajuste personalizado y una mayor comodidad.",
						intro_text_2: "Triumph™ está disponible en tamaño pequeño, mediano y grande y admite todo tipo de graduaciones.",
						intro_image: "/public/img/frames/triumph/intro.webp",
						colors: [
							{
								name: "Negro",
								image: "/public/img/frames/triumph/black.png"
							},
							{
								name: "Dorado",
								image: "/public/img/frames/triumph/gold.png"
							},
							{
								name: "Oro rosa",
								image: "/public/img/frames/triumph/rosegold.png"
							},
							{
								name: "Zafiro",
								image: "/public/img/frames/triumph/sapphire.png"
							},
							{
								name: "Pizarra",
								image: "/public/img/frames/triumph/slate.png"
							}
						],
						specs: {
							materials: "Titanio",
							sizes: "Pequeño · Mediano · Grande"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Tempo™",
					slug: "tempo",
					card_image: "/public/img/frames/tempo/card.webp",
					description: "Esta montura icónica aporta un diseño elegante y minimalista para el clínico moderno de hoy en día.",
					details: {
						detailed_description: "Esta montura icónica aporta un diseño elegante y minimalista que admite todos los niveles de aumento.",
						intro_text_1: "Fabricada pensando en el rendimiento, la construcción ligera de titanio de Tempo™ es lo suficientemente duradera como para soportar la línea completa de lupas y frontales Orascoptic. La incorporación de patillas ajustables, un canal de control de cables y una almohadilla nasal en forma de silla de montar también permite un ajuste personalizable y una mayor comodidad.",
						intro_text_2: "Tempo™ is available in small, medium, and large and supports all prescription types.",
						intro_image: "/public/img/frames/tempo/intro.webp",
						colors: [
							{
								name: "Amatista",
								image: "/public/img/frames/tempo/amethyst.png"
							},
							{
								name: "Negro",
								image: "/public/img/frames/tempo/black.png"
							},
							{
								name: "Azul",
								image: "/public/img/frames/tempo/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/tempo/merlot.png"
							},
							{
								name: "Pizarra",
								image: "/public/img/frames/tempo/slate.png"
							}
						],
						specs: {
							materials: "Titanio",
							sizes: "Pequeño · Mediano · Grande"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Tempo™ Refined Fit",
					slug: "tempo-refined-fit",
					card_image: "/public/img/frames/tempo-re/card.webp",
					description: "Esta montura de ajuste refinado se ha diseñado para proporcionar una comodidad óptima a los clínicos con pómulos prominentes o un puente nasal bajo.",
					details: {
						detailed_description: "Tempo™ Refined fit. Porque las lupas deben adaptarse cómodamente a todo el mundo.",
						intro_text_1: "Diga adiós a las incómodas lupas que se deslizan por la nariz o se apoyan en las mejillas. Esta versión optimizada de nuestra popular montura Tempo™ se ha diseñado para adaptarse cómodamente a los clínicos que tienen un puente nasal más bajo y pómulos prominentes.",
						intro_text_2: "Diseñado con un exclusivo alambre de puente nasal para permitir un ajuste cómodo y seguro en un puente nasal menos pronunciado, Tempo™ Refined Fit se diseñó con la altura de montura ideal para evitar la desalineación de la óptica causada por monturas apoyadas en los pómulos. ",
						intro_text_3: "Tempo™ Refined Fit está disponible en las tallas refinadas pequeña, mediana y grande y admite todo tipo de prescripciones.",
						intro_image: "/public/img/frames/tempo-re/intro.webp",
						colors: [
							{
								name: "Amatista",
								image: "/public/img/frames/tempo-re/amethyst.png"
							},
							{
								name: "Negro",
								image: "/public/img/frames/tempo-re/black.png"
							},
							{
								name: "Azul",
								image: "/public/img/frames/tempo-re/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/tempo-re/merlot.png"
							},
							{
								name: "Pizarra",
								image: "/public/img/frames/tempo-re/slate.png"
							}
						],
						specs: {
							materials: "Titanio",
							sizes: "Pequeño · Mediano · Grande"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Victory™",
					slug: "victory",
					card_image: "/public/img/frames/victory/card.webp",
					description: "Inspirada en la moda europea, esta montura tiene un perfil pequeño pero sofisticado.",
					details: {
						detailed_description: "Fabricada en titanio, la montura Victory™ admite todas las graduaciones y resulta atractiva para los clínicos que prefieren gafas pequeñas y compactas. ",
						intro_text_1: "La pequeña y sofisticada montura Victory™ se inspira en la moda europea. Su pequeño perfil y su fiable estructura de titanio la convierten en una elección muy popular entre los médicos que buscan una montura de lupa ligera. ",
						intro_image: "/public/img/frames/victory/intro.webp",
						colors: [
							{
								name: "Negro",
								image: "/public/img/frames/victory/black.png"
							},
							{
								name: "Azul",
								image: "/public/img/frames/victory/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/victory/merlot.png"
							},
							{
								name: "Pizarra",
								image: "/public/img/frames/victory/slate.png"
							}
						],
						specs: {
							materials: "Titanio",
							sizes: "Pequeño · Mediano · Grande"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							}
						]
					}
				}
			]
		},
		{
			type: "Potenciada",
			products: [
				{
					name: "Dragonfly™ PRO",
					slug: "dragonfly-pro",
					card_image: "/public/img/frames/dragonfly-pro/card.webp",
					description: "Nuestro modelo premium PRO es compatible con toda la línea de telescopios Orascoptic y está cargado de características adicionales, incluyendo baterías adicionales, múltiples ajustes de intensidad de luz y un acabado de pintura cerámica extremadamente duradero.",
					details: {
						detailed_description: "Nuestro modelo premium PRO es compatible con toda la línea de telescopios Orascoptic y está cargado de características adicionales, incluyendo baterías adicionales, múltiples ajustes de intensidad de luz y un acabado de pintura cerámica extremadamente duradero.",
						intro_text_1: "Ha llegado la era de las lupas potenciadas. Hemos combinado nuestra óptica líder en el sector y nuestra galardonado iluminador frontal en una solución única y ligera.",
						intro_text_2: "Dragonfly™ es nuestra montura con alimentación por batería y circuito totalmente integrados que funciona con un iluminador frontal incorporado, liberándote de la molestia de los cables.",
						intro_text_3: "Dragonfly™ PRO cuenta con Cerakote, un recubrimiento de polímero cerámico que ofrece una durabilidad, dureza, resistencia a los arañazos, resistencia a la corrosión y resistencia química líderes en el sector.",
						intro_image: "/public/img/frames/dragonfly-pro/intro.webp",
						colors: [
							{
								name: "Amatista",
								image: "/public/img/frames/dragonfly-pro/amethyst.png"
							},
							{
								name: "Carbón",
								image: "/public/img/frames/dragonfly-pro/charcoal.png"
							},
							{
								name: "Neptuno",
								image: "/public/img/frames/dragonfly-pro/neptune.png"
							},
							{
								name: "Oliva",
								image: "/public/img/frames/dragonfly-pro/olive.png"
							}
						],
						specs: {
							weight: "129g con oculares HDL™ 2,5 Micro",
							light_intensity: "Bajo/Alto | 66/98 Lúmenes",
							color_rendering_index: "95 CRI",
							color_temperature: "6500º K",
							est_charge_time: "Menos de 2 horas",
							est_battery_life: "Hasta 5 horas 40 minutos <small>dependiendo de la configuración de la luz</small>",
							included_batteries: "6 included"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "HDL™ 3.5x",
								slug: "hdl-35x"
							},
							{
								name: "HDL™ 4.5x",
								slug: "hdl-45x"
							},
							{
								name: "HDL™ 5.5x",
								slug: "hdl-55x"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Dragonfly™ NEO",
					slug: "dragonfly-neo",
					card_image: "/public/img/frames/dragonfly-neo/card.webp",
					description: "Admite 4 potencias de aumento populares - la lupa preferida tanto de los estudiantes de odontología como de los residentes de medicina.",
					details: {
						detailed_description: "Admite 4 potencias de aumento populares - la lupa preferida tanto de los estudiantes de odontología como de los residentes de medicina.",
						intro_text_1: "Ha llegado la era de las lupas potenciadas. Hemos combinado nuestra óptica líder en el sector y nuestra galardonado iluminador frontal en una solución única y ligera.",
						intro_text_2: "Dragonfly™ es nuestra montura con alimentación por batería y circuito totalmente integrados que funciona con un iluminador frontal incorporado, liberándote de la molestia de los cables.",
						intro_text_3: "Nuestro modelo básico NEO está disponible en un solo color y admite cuatro opciones de aumento habituales.",
						intro_image: "/public/img/frames/dragonfly-neo/intro.webp",
						colors: [
							{
								name: "Medianoche",
								image: "/public/img/frames/dragonfly-neo/midnight.png"
							}
						],
						specs: {
							weight: "129g con oculares HDL™ 2,5 Micro",
							light_intensity: "98 Lúmenes",
							color_rendering_index: "95 CRI",
							color_temperature: "6500º K",
							est_charge_time: "Menos de 2 horas",
							est_battery_life: "Hasta 5 horas 40 minutos <small>dependiendo de la configuración de la luz</small>",
							included_batteries: "4 included"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "HDL™ 3.5x",
								slug: "hdl-35x"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							}
						]
					}
				}
			]
		}
	]
};
const HEADLIGHTS$1 = {
	TITLE: "Iluminadores frontales",
	SUBTITLE: "Disponer de una iluminación adecuada durante los procedimientos y exámenes es crucial para asegurarse de no pasar por alto los detalles críticos a simple vista. Aunque la ampliación puede mejorar su campo visual, la iluminación adecuada contribuye a eliminar las sombras que pueden obstaculizar su campo de visión.",
	DESCRIPTION_1: "Nuestros <strong>iluminadores frontales</strong> tienen el <strong>mejor rendimiento lumínico global</strong> entre los principales competidores, según pruebas realizadas por terceros. Gracias a <strong>TruColor™</strong>, nuestra tecnología pionera en faros, todos los faros <strong>Orascoptic</strong> ofrecen una iluminación con un <strong>CRI intenso</strong> que eclipsa a la competencia.",
	DESCRIPTION_2: "Encuentre la solución de iluminación para mejorar su visibilidad reduciendo las sombras en su campo de visión. Nuestra tecnología <strong>TruColor™</strong> mejora el <strong>brillo</strong>, la <strong>nitidez</strong> y la <strong>profundidad</strong>.",
	DESCRIPTION_3: "Cada iluminador frontal es sometido a rigurosas pruebas específicas para asegurar su cumplimiento con los estándares de luz azul establecidos por la <strong>Comisión Electrotécnica Internacional</strong>. Además, nuestras <strong>fuentes de luz inalámbricas</strong> se adaptan perfectamente a todas nuestras <strong>monturas</strong>, garantizando versatilidad y rendimiento óptimo.",
	TEXTS: {
		text_product_image: "Imagen del producto",
		text_features: "Características",
		text_specs: "Especificaciones",
		text_weight: "Peso",
		text_light_intensity: "Intensidad de luz",
		text_color_rendering_index: "CRI (Índice de Reproducción cromática)",
		text_intensity_control: "Control de intensidad",
		text_color_temperature: "Temperatura de color",
		text_focus: "Enfoque",
		text_est_charge_time: "Tiempo de carga estimado",
		text_est_battery_life: "Duración de batería estimada",
		text_battery_type: "Tipo de batería"
	},
	PRODUCT_PATH: "/productos/iluminadores-frontales/",
	PRODUCTS: [
		{
			type: "",
			products: [
				{
					name: "Endeavour™ MD",
					slug: "endeavour-md",
					card_image: "/public/img/headlights/endeavour-md/card.webp",
					description: "Exclusiva para el campo quirúrgico, Endeavour™ MD presenta una distribución uniforme de hasta 85 lúmenes de luz y ofrece hasta 24 horas de salida de luz constante con CRI 92+.",
					details: {
						detailed_description: "Nuestro faro óptimo para cirujanos.",
						intro: {
							intro_text_1: "Exclusivo para el campo quirúrgico, Endeavour™ MD cuenta con una distribución uniforme de hasta 115 lúmenes de luz y ofrece hasta veinticuatro horas de salida de luz constante con CRI 92+.",
							intro_text_2: "Ajuste fácilmente la configuración de la luz sin tener que meter la mano en el bolsillo. Empleando el faro más pequeño de Orascoptic y la batería de mayor duración, Endeavour™ MD es una solución de faro fiable y ligera.",
							intro_text_3: "Endeavour™ MD está disponible con dos paquetes de baterías para garantizar una experiencia sin problemas para cada usuario.",
							intro_image: "/public/img/headlights/endeavour-md/intro.webp"
						},
						specs: {
							weight: "10 g",
							light_intensity: "Bajo/Medio/Alto | 68/90/115 lúmenes",
							color_rendering_index: "92 CRI",
							intensity_control: "Control táctil hasta 115 lúmenes",
							color_temperature: "6500 K",
							focus: "Foco de 6,98 cm <small>con haz enfocado de 30,5 cm</small>",
							est_charge_time: "Hasta 6 horas <small>(Se puede usar mientras se recarga)</small>",
							est_battery_life: "De 11 a 24 horas <small>según el ajuste de luz</small>"
						}
					}
				},
				{
					name: "Endeavour™ XL",
					slug: "endeavour-xl",
					card_image: "/public/img/headlights/endeavour-xl/card.webp",
					description: "Con un 25% más de autonomía que el faro Endeavour™ estándar, el Endeavour™ XL proporciona hasta 24 horas de batería continua.",
					details: {
						detailed_description: "Con mayor autonomía y una luz más brillante que el faro Endeavour™ estándar, el Endeavour™ XL proporciona hasta 24 horas de duración continua de la batería y 115 lúmenes de brillo.",
						intro: {
							intro_text_1: "El iluminador frontal Endeavour™ XL proporciona un haz de luz preciso que ayuda a iluminar detalles críticos que a menudo pueden pasarse por alto a simple vista.",
							intro_text_2: "Con la adición de múltiples intensidades de luz de hasta 115 lúmenes, el iluminador frontal permite al usuario seleccionar la salida de luz óptima para cada procedimiento.",
							intro_text_3: "La tecnología de corriente constante también garantiza que la potencia luminosa de la linterna frontal no disminuya durante el tiempo de funcionamiento de la batería.",
							intro_text_4: "Endeavour™ XL tiene una garantía de tres años para el cable y el LED y de un año para la batería.",
							intro_image: "/public/img/headlights/endeavour-xl/intro.webp"
						},
						specs: {
							weight: "10 g",
							light_intensity: "Bajo/Medio/Alto | 68/90/115 lúmenes",
							color_rendering_index: "92 CRI",
							intensity_control: "Control táctil hasta 115 lúmenes",
							color_temperature: "6500 K",
							focus: "Foco de 6,98 cm <small>con haz enfocado de 30,5 cm</small>",
							est_charge_time: "Hasta 6 horas <small>(Se puede usar mientras se recarga)</small>",
							est_battery_life: "De 11 a 24 horas <small>según el ajuste de luz</small>"
						}
					}
				},
				{
					name: "Spark™",
					slug: "spark",
					card_image: "/public/img/headlights/spark/card.webp",
					description: "Un iluminador frontal inalámbrico que se integra prácticamente con cualquier modelo de lupa o montura de gafas.",
					details: {
						detailed_description: "Spark™ es nuestro innovador iluminador frontal inalámbrico, pendiente de patente, que se integra prácticamente con cualquier modelo de lupa o montura de gafas. Nuestro diseño exclusivo distribuye el peso uniformemente por el puente de la montura minimizando la presión sobre la nariz.",
						features: [
							{
								title: "Punto circular uniforme",
								description: "Una luz enfocada con precisión proporciona una mayor visibilidad durante los procedimientos"
							},
							{
								title: "Compatible con la luz azul",
								description: "Cumple las normas de seguridad de la Comisión Electrotécnica Internacional (CEI) relativas a las pruebas de luz azul"
							},
							{
								title: "Tecnología de corriente constante",
								description: "La luminosidad no disminuye durante el tiempo de funcionamiento de la batería"
							},
							{
								title: "Controles táctiles avanzados",
								description: "Encendido y apagado de la luz con facilidad entre procedimientos y consultas de pacientes"
							},
							{
								title: "Cargador versátil",
								description: "Un cargador micro USB ofrece mayor comodidad para la carga en movimiento"
							},
							{
								title: "Aviso de batería baja",
								description: "Un indicador de batería baja se ilumina cuando la capacidad de la batería está por debajo del veinte por ciento"
							}
						],
						specs: {
							weight: "29,1 g",
							light_intensity: "40 lúmenes",
							color_rendering_index: "92 CRI",
							battery_type: "Ión de litio",
							color_temperature: "6500 K",
							focus: "Foco de 6,98 cm <small>con haz enfocado de 30,5 cm</small>",
							est_charge_time: "Hasta 2 horas",
							est_battery_life: "Hasta 6 horas <small>(2 baterías)</small>"
						}
					}
				}
			]
		}
	]
};
const spanish = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	HEADER: HEADER$1,
	FOOTER: FOOTER$1,
	PAGE_NOT_FOUND: PAGE_NOT_FOUND$1,
	HOME_PAGE: HOME_PAGE$1,
	LOUPES: LOUPES$1,
	FRAMES: FRAMES$1,
	HEADLIGHTS: HEADLIGHTS$1
};

const SEO_TITLE = "Optimedic";
const SEO_DESCRIPTION = "";
const HEADER = {
	HOME_LINK: "/en/",
	NAV_ITEMS: [
		{
			name: "Products",
			href: ""
		},
		{
			name: "Events",
			href: "/en/events"
		},
		{
			name: "About Us",
			href: "/en/about-us"
		},
		{
			name: "Contact",
			href: "/en/contact"
		}
	],
	LANGUAGES: {
		es: "Spanish",
		en: "English",
		ca: "Catalan"
	}
};
const FOOTER = {
	SECTIONS: [
		{
			TITLE: "Related",
			LINKS: [
				{
					name: "Home",
					href: "/en/"
				},
				{
					name: "Events",
					href: "/en/events"
				},
				{
					name: "About Us",
					href: "/en/about-us"
				},
				{
					name: "Contact",
					href: "/en/contact"
				}
			]
		},
		{
			TITLE: "Products",
			LINKS: [
				{
					name: "Magnifiers",
					href: "/en/products/magnifiers"
				},
				{
					name: "Frames",
					href: "/en/products/frames"
				},
				{
					name: "Front Lights",
					href: "/en/products/front-lights"
				},
				{
					name: "MicroAire",
					href: "/en/products/microaire"
				},
				{
					name: "Renuvion",
					href: "/en/products/renuvion"
				}
			]
		},
		{
			TITLE: "Legal",
			LINKS: [
				{
					name: "Privacy Policy",
					href: "/en/privacy-policy"
				},
				{
					name: "Cookie Policy",
					href: "/en/cookie-policy"
				}
			]
		},
		{
			TITLE: "Contact",
			LINKS: [
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-mail' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path><path d='M3 7l9 6l9 -6'></path></svg>",
					data: "info@optimedic.es",
					href: "mailto:info@optimedic.es"
				},
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-phone' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path></svg>",
					data: "+34 938 43 03 36",
					href: "tel:+34 938 43 03 36"
				},
				{
					svgIcon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-whatsapp' width='22' height='22' viewBox='0 0 22 22' stroke-width='2' stroke='#99a3af' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path><path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path></svg>",
					data: "Whatsapp",
					href: "https://wa.me/34687427703"
				}
			]
		}
	],
	COPYRIGHT: "All rights reserved."
};
const PAGE_NOT_FOUND = {
	TITLE: "Page Not Found",
	BUTTON: "Return to Home",
	HOME_PAGE: "/en/"
};
const HOME_PAGE = {
	TITLE: "Optimedic",
	SLOGAN: "Precision tailored to you",
	FEATURES: [
		{
			title: "Quality",
			description: "All our products and services stand out for their <strong>quality</strong> and <strong>precision</strong>",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-stars' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path><path d='M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path><path d='M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path></svg>"
		},
		{
			title: "Market Leaders",
			description: "Optimedic is <strong>constantly</strong> pushing boundaries to offer the <strong>latest products</strong>",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-rosette-number-1' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M10 10l2 -2v8'></path><path d='M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1'></path></svg>"
		},
		{
			title: "Trust",
			description: "More than <strong>200 leading doctors</strong> have already trusted us",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-heart-handshake' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path><path d='M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25'></path><path d='M12.5 15.5l2 2'></path><path d='M15 13l2 2'></path></svg>"
		},
		{
			title: "After-sales Service",
			description: "We offer a <strong>completely personalized</strong> sales and after-sales service",
			icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-shopping-bag-check' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248'></path><path d='M9 11v-5a3 3 0 0 1 6 0v5'></path><path d='M15 19l2 2l4 -4'></path></svg>"
		}
	],
	PRODUCTS: [
		{
			name: "Loupes",
			img: "/en/public/img/oscar-alonso1.jpg",
			subcategories: [
				{
					name: "Loupes",
					description: "Find your ideal magnification with our loupes.",
					href: "/en/products/loupes"
				},
				{
					name: "Frames",
					description: "Durable and aesthetically pleasing frames that will exceed your expectations in performance and style.",
					href: "/en/products/frames"
				},
				{
					name: "Headlights",
					description: "Durable and aesthetically pleasing frames that will exceed your expectations in performance and style.",
					href: "/en/products/headlights"
				}
			]
		},
		{
			name: "Surgery",
			img: "/public/img/IMG_0415.png",
			subcategories: [
				{
					name: "MicroAire",
					description: "A powerful precision instrument designed for small or large volume fat extraction, body contouring, and fat harvesting.",
					href: "/en/products/microaire"
				},
				{
					name: "Renuvion",
					description: "The only device approved by the FDA for use after liposuction and the only device approved by the FDA to contract subcutaneous soft tissue.",
					href: "/en/products/renuvion"
				}
			]
		},
		{
			name: "Events",
			img: "/public/img/barcelona-oculoplastics-resumen-grafico-sorteo-gafas-lupa.jpg",
			subcategories: [
				{
					name: "Event Organization",
					description: "We organize events for your company.",
					href: "/en/products/events"
				}
			]
		}
	]
};
const LOUPES = {
	TITLE: "Loupes",
	SUBTITLE: "Exceptional magnification is essential for everything from routine exams to complex procedures. We will work with you to find the best magnification level that allows you to do your job as effectively as possible.",
	DESCRIPTION_1: "Our magnification levels range from <strong>2.5 to 5.5</strong>, including two variable magnification loupes, <strong>EyeZoom™</strong> and <strong>EyeZoom™ Mini</strong>. EyeZoom offers <strong>three levels of magnification in a single loupe</strong> and has won the <strong>Cellerant Best of Class Technology Award</strong> <strong>three times</strong> since its launch.",
	DESCRIPTION_2: "The <strong>prescription, working distance, and inclination angle</strong> are customized. Additionally, <strong>included</strong> are side shields, a headband, a custom case, an optical screwdriver, and a cleaning cloth.",
	DESCRIPTION_3: "All optical systems are made with <strong>fine grade-A annealed glass lenses</strong> with scratch-resistant and anti-reflective coatings. All support lenses are made with <strong>high-index polycarbonate material</strong>.",
	TEXTS: {
		text_product_image: "Product image",
		text_title_specs: "Specifications",
		text_intro_specs_1: "All optical systems are made with fine grade-A annealed glass lenses fused with scratch-resistant and anti-reflective coatings.",
		text_intro_specs_2: "The working distance and declination angle are customized for each user.",
		text_specs_disclaimer: "The provided specifications are approximate and may vary based on individual factors, such as the specific working distance of each user.",
		text_magnification_power: "Magnification power",
		text_weight: "Weight",
		text_field_width: "Field width",
		text_field_depth: "Field depth",
		text_frame_options: "Frame options"
	},
	FRAMES_PATH: "/en/products/frames/",
	PRODUCT_PATH: "/en/products/loupes/",
	PRODUCTS: [
		{
			type: "Fixed magnification",
			products: [
				{
					name: "HDL™ 2.5 Micro",
					slug: "hdl-25-micro",
					card_image: "/public/img/loupes/hdl-25-micro/card.webp",
					description: "This micro-sized optic offers lightweight comfort and superior viewing for all types of loupe users.",
					details: {
						detailed_description: "Micro-sized optics that offer lightweight comfort without sacrificing magnification.",
						intro_text_1: "Pushing the limits of typical micro-optics, this loupe provides a generous field of view with edge-to-edge clarity.",
						intro_text_2: "With such a compact size, extra viewing space is available above the telescope, making it easier to read charts and consult with patients.",
						intro_image: "/public/img/loupes/hdl-25-micro/intro.webp",
						specs_image: "/public/img/loupes/hdl-25-micro/specs.webp",
						specs: {
							magnification_power: "2.5x",
							weight: "39.15 g",
							field_width: "8.75 cm",
							field_depth: "17.8 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 2.5 Macro",
					slug: "hdl-25-macro",
					card_image: "/public/img/loupes/hdl-25-macro/card.webp",
					description: "This custom-made surgical loupe features edge-to-edge clarity and a generous field of view for the user.",
					details: {
						detailed_description: "Third-party testing confirms that our loupes offer the sharpest image quality in the industry, with the best optical resolution and light transmission in their class.",
						intro_text_1: "The HDL™ 2.5 Macro stands out for its large field width, allowing instruments to be easily brought into the field of view.",
						intro_text_2: "The elongated bezel also reduces head tilt by taking advantage of steeper declination angles.",
						intro_text_3: "A recent third-party lab study confirms that we offer the sharpest 2.5x magnification loupe in the industry.",
						intro_image: "/public/img/loupes/hdl-25-macro/intro.webp",
						specs_image: "/public/img/loupes/hdl-25-macro/specs.webp",
						specs: {
							magnification_power: "2.5x",
							weight: "50.7 g",
							field_width: "10.4 cm",
							field_depth: "12.7 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 3.0",
					slug: "hdl-30",
					card_image: "/public/img/loupes/hdl-30/card.webp",
					description: "The ideal loupe for clinicians who want higher magnification without sacrificing a lightweight feel.",
					details: {
						detailed_description: "Compact and lightweight, this loupe is designed to offer comfort rarely associated with Galilean optics of equivalent magnification power.",
						intro_text_1: "This custom-made loupe features edge-to-edge clarity and a generous field of view.",
						intro_text_2: "With a compact and lightweight design, the HDL™ 3.0x is the ideal loupe for clinicians who want higher magnification without sacrificing a lightweight feel.",
						intro_image: "/public/img/loupes/hdl-30/intro.webp",
						specs_image: "/public/img/loupes/hdl-30/specs.webp",
						specs: {
							magnification_power: "3.0x",
							weight: "48.7 g",
							field_width: "7.9 cm",
							field_depth: "19 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 3.5x",
					slug: "hdl-35x",
					card_image: "/public/img/loupes/hdl-35x/card.webp",
					description: "Higher precision magnification designed with a wide field of view.",
					details: {
						detailed_description: "Higher precision magnification designed with a wide field of view.",
						intro_text_1: "Our 3.5x expanded field loupes are designed for professionals performing demanding procedures.",
						intro_text_2: "HDL™ prisms allow for precise interactions, enhanced visibility, and a customizable declination angle that lets you perform the procedures you need with accuracy.",
						intro_image: "/public/img/loupes/hdl-35x/intro.webp",
						specs_image: "/public/img/loupes/hdl-35x/specs.webp",
						specs: {
							magnification_power: "3.5x",
							weight: "67.5 g",
							field_width: "8.9 cm",
							field_depth: "9.1 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL™ 4.5x",
					slug: "hdl-45x",
					card_image: "/public/img/loupes/hdl-45x/card.webp",
					description: "Higher precision magnification designed with a wide field of view.",
					details: {
						detailed_description: "Higher magnification designed for greater precision and performance.",
						intro_text_1: "With a 4.5x magnification, these expanded field prismatic loupes are designed for professionals seeking greater detail and magnification.",
						intro_text_2: "HDL™ prisms provide enhanced visibility and a customizable declination angle while allowing you to perform the procedures you need with precision.",
						intro_image: "/public/img/loupes/hdl-45x/intro.webp",
						specs_image: "/public/img/loupes/hdl-45x/specs.webp",
						specs: {
							magnification_power: "4.5x",
							weight: "71.5 g",
							field_width: "7.5 cm",
							field_depth: "6.7 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							}
						]
					}
				},
				{
					name: "HDL™ 5.5x",
					slug: "hdl-55x",
					card_image: "/public/img/loupes/hdl-55x/card.webp",
					description: "Our highest standalone magnification designed for precision and performance.",
					details: {
						detailed_description: "Our highest standalone magnification designed for precision and performance.",
						intro_text_1: "With a 5.5x magnification, these expanded field prismatic loupes are designed for professionals performing demanding procedures.",
						intro_text_2: "HDL™ prisms allow for precise interactions, enhanced visibility, and a customizable declination angle that enables you to perform the procedures you need with accuracy.",
						intro_image: "/public/img/loupes/hdl-55x/intro.webp",
						specs_image: "/public/img/loupes/hdl-55x/specs.webp",
						specs: {
							magnification_power: "5.5x",
							weight: "74.4 g",
							field_width: "6.4 cm",
							field_depth: "5.9 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		},
		{
			type: "Interchangeable loupes",
			products: [
				{
					name: "OmniOptic™",
					slug: "omnioptic",
					card_image: "/public/img/loupes/omnioptic/card.webp",
					description: "Discover the first and only interchangeable magnification loupe that allows clinicians to select the optimal magnification power for each procedure.",
					details: {
						detailed_description: "The first and only loupe with interchangeable magnifications.",
						intro_text_1: "With the ability to choose between four different magnification levels (ranging from 2.5x to 5.5x), the OmniOptic is an ideal system for users looking to increase their magnification power throughout their career.",
						intro_text_2: "The unique design includes a magnetic anchor integrated into the carrier lens of the frame, allowing clinicians to increase magnification power without having to purchase multiple pairs of loupes.",
						intro_image: "/public/img/loupes/omnioptic/intro.webp",
						specs_image: "/public/img/loupes/omnioptic/specs.webp",
						specs: {
							magnification_power: "2.5x · 3.5x · 4.5x · 5.5x",
							weight: "57.3 g at 2.5x · 75.3 g at 3.5x · 79.1 g at 4.5x · 82.1 g at 5.5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							}
						]
					}
				}
			]
		},
		{
			type: "Variable magnification",
			products: [
				{
					name: "EyeZoom™",
					slug: "eyezoom",
					card_image: "/public/img/loupes/eyezoom/card.webp",
					description: "The first adjustable magnification loupe, EyeZoom™ offers three adjustable magnification levels ranging from 3x to 5x.",
					details: {
						detailed_description: "The first and only 3-in-1 variable magnification loupe. Seamlessly switch between magnification levels of 3x, 4x, and 5x.",
						intro_text_1: "Your day is variable; your loupes should be too. Our technology offers edge-to-edge clarity, high-definition resolution, and the ability to switch between magnifications. Get loupes as agile as you are.",
						intro_text_2: "As magnification increases, field of view decreases. It's the physics of magnification. With EyeZoom™, you’ll get the best of both worlds.",
						intro_text_3: "Stand out with our award-winning EyeZoom™ technology.",
						intro_image: "/public/img/loupes/eyezoom/intro.webp",
						specs_image: "/public/img/loupes/eyezoom/specs.webp",
						specs: {
							magnification_power: "3x · 4x · 5x",
							weight: "82.2 g",
							field_width: "9.5 cm at 3x · 7.4 cm at 4x · 6.1 cm at 5x",
							field_depth: "11.9 cm at 3x · 9.7 cm at 4x · 7.6 cm at 5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "EyeZoom™ Mini",
					slug: "eyezoom-mini",
					card_image: "/public/img/loupes/eyezoom-mini/card.webp",
					description: "The EyeZoom™ Mini, the second adjustable magnification loupe launched under the EyeZoom™ brand, offers magnifications ranging from 2.5x to 3.5x.",
					details: {
						detailed_description: "The second addition to the Orascoptic variable magnification family allows for seamless switching between magnification levels of 2.5x and 3.5x.",
						intro_text_1: "EyeZoom™ Mini incorporates two-step variable magnification technology that enables the user to switch between 2.5x and 3.5x.",
						intro_text_2: "A constant working distance at each magnification level helps reduce the need for repositioning when switching between magnification levels.",
						intro_image: "/public/img/loupes/eyezoom-mini/intro.webp",
						specs_image: "/public/img/loupes/eyezoom-mini/specs.webp",
						specs: {
							magnification_power: "2.5x · 3.5x",
							weight: "73.7 g",
							field_width: "7.5 cm at 2.5x · 8.1 cm at 3.5x",
							field_depth: "12.1 cm at 2.5x · 9.6 cm at 3.5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "EyeZoom™ Max",
					slug: "eyezoom-max",
					card_image: "/public/img/loupes/eyezoom-max/card.webp",
					description: "The first loupe that offers adjustable magnification levels of 3.5x and 6.5x.",
					details: {
						detailed_description: "The latest addition to the Orascoptic variable magnification family and our highest magnification to date. Seamlessly switch between magnification levels of 3.5x and 6.5x.",
						intro_text_1: "EyeZoom™ Max, our highest magnification yet, offers high-definition resolution and enhanced visual acuity.",
						intro_text_2: "The generous field size at 3.5x, combined with the ability to perform precise procedures at 6.5x, creates a versatile loupe experience.",
						intro_text_3: "Ideal for general practitioners performing endodontic procedures, EyeZoom™ Max eliminates the need to switch loupes during procedures.",
						intro_image: "/public/img/loupes/eyezoom-max/intro.webp",
						specs_image: "/public/img/loupes/eyezoom-max/specs.webp",
						specs: {
							magnification_power: "3.5x · 6.5x",
							weight: "92.7 g",
							field_width: "8.8 cm at 3.5x · 5.6 cm at 6.5x",
							field_depth: "8.8 cm at 3.5x · 5.0 cm at 6.5x"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		},
		{
			type: "Ergo",
			products: [
				{
					name: "HDL™ Ergo 3.5x",
					slug: "hdl-ergo-35x",
					card_image: "/public/img/loupes/hdl-ergo-35x/card.webp",
					description: "Using refractive prisms that allow clinicians to sit upright and reduce neck strain, the HDL™ Ergo loupe is an ergonomic option that offers all-day comfort.",
					details: {
						detailed_description: "Focused on ergonomics, this deflection loupe is designed to improve posture and reduce neck discomfort.",
						intro_text_1: "The high-definition Ergo loupe allows you to work comfortably and preserve your career. Our deflection optics improve posture without sacrificing vision. Using refractive prisms that allow clinicians to sit upright and reduce neck strain, the HDL Ergo loupe is an ergonomic option that provides comfort all day long.",
						intro_text_2: "Our high-definition Ergo loupe with verified 3.5x magnification outperforms the competition.",
						intro_text_3: "Improve your posture, improve your performance.",
						intro_image: "/public/img/loupes/hdl-ergo-35x/intro.webp",
						specs_image: "/public/img/loupes/hdl-ergo-35x/specs.webp",
						specs: {
							magnification_power: "3.5x",
							weight: "67.6 g",
							field_width: "8.5 cm",
							field_depth: "8 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				},
				{
					name: "HDL Ergo™ 5.0x",
					slug: "hdl-ergo-50x",
					card_image: "/public/img/loupes/hdl-ergo-50x/card.webp",
					description: "Our highest level offered in a deflection loupe, making it the loupe of choice for clinicians performing demanding procedures and wishing to protect their posture.",
					details: {
						detailed_description: "Our highest magnification Ergo, focused on ergonomics, this deflection loupe is designed to improve posture and reduce neck discomfort.",
						intro_text_1: "The high-definition Ergo loupe allows you to work comfortably and preserve your career. Our deflection optics improve posture without sacrificing vision. Using refractive prisms that allow clinicians to sit upright and reduce neck strain, the HDL Ergo loupe is an ergonomic option that offers all-day comfort.",
						intro_text_2: "Our HDL Ergo 5.0x magnification is our highest level offered in a deflection loupe, making it the loupe of choice for clinicians performing demanding procedures.",
						intro_text_3: "Improve your posture, improve your performance.",
						intro_image: "/public/img/loupes/hdl-ergo-50x/intro.webp",
						specs_image: "/public/img/loupes/hdl-ergo-50x/specs.webp",
						specs: {
							magnification_power: "5.0x",
							weight: "67.2 g",
							field_width: "6.5 cm",
							field_depth: "6.5 cm"
						},
						frame_options: [
							{
								name: "Rydon™",
								slug: "rydon"
							},
							{
								name: "Phantom™",
								slug: "phantom"
							},
							{
								name: "Triumph™",
								slug: "triumph"
							},
							{
								name: "Tempo™",
								slug: "tempo"
							},
							{
								name: "Tempo™ Refined Fit",
								slug: "tempo-refined-fit"
							},
							{
								name: "Victory™",
								slug: "victory"
							},
							{
								name: "DragonFly™ PRO",
								slug: "dragonfly-pro"
							},
							{
								name: "DragonFly™ NEO",
								slug: "dragonfly-neo"
							}
						]
					}
				}
			]
		}
	]
};
const FRAMES = {
	TITLE: "Frames",
	SUBTITLE: "Whether you prefer sporty or iconic styles, we are sure to have a frame you will love.",
	DESCRIPTION_1: "Choosing the right frame for your telescope is just as important as choosing the <strong>correct magnification</strong>. At <strong>Optimedic</strong>, we strive to provide you with <strong>durable</strong> and <strong>visually appealing</strong> frames that will exceed your expectations for <strong>performance</strong> and <strong>style</strong>.",
	DESCRIPTION_2: "The <strong>prescription, working distance, and tilt angle</strong> are personalized. Additionally, <strong>side shields, headband, custom case, optical screwdriver, and cleaning cloth</strong> are included.",
	DESCRIPTION_3: "The <strong>flexible temple tips</strong> for a <strong>secure fit</strong>, <strong>reinforced frames</strong> to maintain <strong>ocular convergence</strong>, and <strong>adjustable nose pads</strong> for <strong>optimal comfort</strong> make our frames stand out from the rest.",
	TEXTS: {
		text_selected_color: "Selected color",
		text_available_color: "Available color",
		text_product_image: "Product image",
		text_color_options: "Color options",
		text_color: "Color",
		text_specs: "Specifications",
		text_materials: "Materials",
		text_sizes: "Available sizes",
		text_weight: "Weight",
		text_light_intensity: "Light intensity",
		text_color_rendering_index: "CRI (Color Rendering Index)",
		text_color_temperature: "Color temperature",
		text_est_charge_time: "Estimated charge time",
		text_est_battery_life: "Estimated battery life",
		text_included_batteries: "Batteries",
		text_loupe_options: "Loupe options",
		text_all_loupe_options: "Available with all loupes"
	},
	LOUPES_PATH: "en/products/loupes/",
	PRODUCT_PATH: "en/products/frames/",
	PRODUCTS: [
		{
			type: "Sport",
			products: [
				{
					name: "Rydon™",
					slug: "rydon",
					card_image: "/public/img/frames/rydon/card.webp",
					description: "Take customization to a new level with flexible temple hinges, folding temples, and adjustable nose pads.",
					details: {
						detailed_description: "This classic and comfortable sports frame offers a stylish, personalized fit with flexible temple hinges, folding temple arms, and adjustable nose pads.",
						intro_text_1: "Designed and manufactured by the renowned eyewear icon Rudy Project®, the Rydon™ frame provides a truly customized fit for every user. With flexible hinges, flexible temple tips, and adjustable nose pads, this frame takes customization to a new level.",
						intro_text_2: "The exclusive semi-rimless construction also accommodates two different lens support shapes, allowing the loupe to be further tailored to the user by accommodating pronounced declination angles and specific facial geometries.",
						intro_text_3: "The Rydon accommodates a wide range of prescriptions, including bifocals.",
						intro_image: "/public/img/frames/rydon/intro.webp",
						colors: [
							{
								name: "Black",
								image: "/public/img/frames/rydon/black.png"
							},
							{
								name: "Blue",
								image: "/public/img/frames/rydon/blue.png"
							},
							{
								name: "Carbon",
								image: "/public/img/frames/rydon/carbon.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/rydon/merlot.png"
							},
							{
								name: "Tortoise",
								image: "/public/img/frames/rydon/carey.png"
							}
						],
						specs: {
							materials: "Advanced carbon, magnesium, silicium, grilamid, and titanium",
							sizes: "One size"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Phantom™",
					slug: "phantom",
					card_image: "/public/img/frames/phantom/card.webp",
					description: "Phantom, made from lightweight titanium, is the lightest sports frame with built-in prescription on the market.",
					details: {
						detailed_description: "Lightweight comfort without compromising performance.",
						intro_text_1: "Made from lightweight titanium, Phantom is the lightest sports frame with built-in prescription on the market. Phantom is 15% lighter than the leading competitor with prescription.",
						intro_text_2: "All the best features - flexible temple tips, adjustable nose bridge, cable control channel, and flexible hinges - without the added weight.",
						intro_text_3: "Available in five stunning colors, Phantom is the perfect choice for those who prioritize comfort and style.",
						intro_image: "/public/img/frames/phantom/intro.webp",
						colors: [
							{
								name: "Black",
								image: "/public/img/frames/phantom/black.png"
							},
							{
								name: "Iris",
								image: "/public/img/frames/phantom/iris.png"
							},
							{
								name: "Rose Gold",
								image: "/public/img/frames/phantom/rosegold.png"
							},
							{
								name: "Sapphire",
								image: "/public/img/frames/phantom/sapphire.png"
							},
							{
								name: "Slate",
								image: "/public/img/frames/phantom/slate.png"
							}
						],
						specs: {
							materials: "Titanium",
							sizes: "Small · Medium"
						}
					}
				}
			]
		},
		{
			type: "Iconic",
			products: [
				{
					name: "Triumph™",
					slug: "triumph",
					card_image: "/public/img/frames/triumph/card.webp",
					description: "This iconic frame features an integrated cable control function and is available in five stunning bicolor combinations.",
					details: {
						detailed_description: "This iconic frame employs an integrated cable control function and supports all levels of magnification.",
						intro_text_1: "Combining performance and comfort, Triumph™ is a lightweight titanium frame built exclusively for loupes. The integrated cable control eliminates distractions and optimizes efficiency. Choose any level of magnification and incorporate your personal style with one of five fashionable bicolor combinations. The adjustable temples and nasal bridge allow for a custom fit and enhanced comfort.",
						intro_text_2: "Triumph™ is available in small, medium, and large sizes and supports all types of prescriptions.",
						intro_image: "/public/img/frames/triumph/intro.webp",
						colors: [
							{
								name: "Black",
								image: "/public/img/frames/triumph/black.png"
							},
							{
								name: "Gold",
								image: "/public/img/frames/triumph/gold.png"
							},
							{
								name: "Rose Gold",
								image: "/public/img/frames/triumph/rosegold.png"
							},
							{
								name: "Sapphire",
								image: "/public/img/frames/triumph/sapphire.png"
							},
							{
								name: "Slate",
								image: "/public/img/frames/triumph/slate.png"
							}
						],
						specs: {
							materials: "Titanium",
							sizes: "Small · Medium · Large"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Tempo™",
					slug: "tempo",
					card_image: "/public/img/frames/tempo/card.webp",
					description: "This iconic frame offers a sleek and minimalist design for today's modern clinician.",
					details: {
						detailed_description: "This iconic frame features a sleek and minimalist design that supports all levels of magnification.",
						intro_text_1: "Designed with performance in mind, the lightweight titanium construction of Tempo™ is durable enough to withstand the full line of loupes and Orascoptic fronts. The inclusion of adjustable temples, a cable control channel, and a saddle-shaped nose pad also allows for customizable fit and increased comfort.",
						intro_text_2: "Tempo™ is available in small, medium, and large sizes and supports all prescription types.",
						intro_image: "/public/img/frames/tempo/intro.webp",
						colors: [
							{
								name: "Amethyst",
								image: "/public/img/frames/tempo/amethyst.png"
							},
							{
								name: "Black",
								image: "/public/img/frames/tempo/black.png"
							},
							{
								name: "Blue",
								image: "/public/img/frames/tempo/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/tempo/merlot.png"
							},
							{
								name: "Slate",
								image: "/public/img/frames/tempo/slate.png"
							}
						],
						specs: {
							materials: "Titanium",
							sizes: "Small · Medium · Large"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Tempo™ Refined Fit",
					slug: "tempo-refined-fit",
					card_image: "/public/img/frames/tempo-re/card.webp",
					description: "This refined fit frame is designed to provide optimal comfort for clinicians with prominent cheekbones or a low nasal bridge.",
					details: {
						detailed_description: "Tempo™ Refined fit. Because loupes should fit comfortably for everyone.",
						intro_text_1: "Say goodbye to uncomfortable loupes that slide down your nose or rest on your cheeks. This optimized version of our popular Tempo™ frame is designed to fit comfortably for clinicians with a lower nasal bridge and prominent cheekbones.",
						intro_text_2: "Designed with a unique nasal bridge wire to allow a comfortable and secure fit on a less pronounced nasal bridge, Tempo™ Refined Fit was designed with the ideal frame height to avoid misalignment of optics caused by frames resting on the cheekbones.",
						intro_text_3: "Tempo™ Refined Fit is available in refined small, medium, and large sizes and supports all types of prescriptions.",
						intro_image: "/public/img/frames/tempo-re/intro.webp",
						colors: [
							{
								name: "Amethyst",
								image: "/public/img/frames/tempo-re/amethyst.png"
							},
							{
								name: "Black",
								image: "/public/img/frames/tempo-re/black.png"
							},
							{
								name: "Blue",
								image: "/public/img/frames/tempo-re/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/tempo-re/merlot.png"
							},
							{
								name: "Slate",
								image: "/public/img/frames/tempo-re/slate.png"
							}
						],
						specs: {
							materials: "Titanium",
							sizes: "Small · Medium · Large"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Victory™",
					slug: "victory",
					card_image: "/public/img/frames/victory/card.webp",
					description: "Inspired by European fashion, this frame features a small yet sophisticated profile.",
					details: {
						detailed_description: "Made from titanium, the Victory™ frame supports all prescriptions and is attractive for clinicians who prefer small, compact glasses.",
						intro_text_1: "The small and sophisticated Victory™ frame is inspired by European fashion. Its small profile and reliable titanium structure make it a very popular choice among doctors looking for a lightweight loupe frame.",
						intro_image: "/public/img/frames/victory/intro.webp",
						colors: [
							{
								name: "Black",
								image: "/public/img/frames/victory/black.png"
							},
							{
								name: "Blue",
								image: "/public/img/frames/victory/blue.png"
							},
							{
								name: "Merlot",
								image: "/public/img/frames/victory/merlot.png"
							},
							{
								name: "Slate",
								image: "/public/img/frames/victory/slate.png"
							}
						],
						specs: {
							materials: "Titanium",
							sizes: "Small · Medium · Large"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "OmniOptic™",
								slug: "omnioptic"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							}
						]
					}
				}
			]
		},
		{
			type: "Powered",
			products: [
				{
					name: "Dragonfly™ PRO",
					slug: "dragonfly-pro",
					card_image: "/public/img/frames/dragonfly-pro/card.webp",
					description: "Our premium PRO model is compatible with the entire Orascoptic telescope line and is loaded with additional features, including extra batteries, multiple light intensity settings, and an extremely durable ceramic paint finish.",
					details: {
						detailed_description: "Our premium PRO model is compatible with the entire Orascoptic telescope line and is loaded with additional features, including extra batteries, multiple light intensity settings, and an extremely durable ceramic paint finish.",
						intro_text_1: "The era of enhanced loupes has arrived. We have combined our industry-leading optics and our award-winning front illuminator into a unique, lightweight solution.",
						intro_text_2: "Dragonfly™ is our frame with integrated battery power and circuit that works with a built-in front illuminator, freeing you from the hassle of wires.",
						intro_text_3: "Dragonfly™ PRO features Cerakote, a ceramic polymer coating that provides durability, hardness, scratch resistance, corrosion resistance, and chemical resistance that is industry-leading.",
						intro_image: "/public/img/frames/dragonfly-pro/intro.webp",
						colors: [
							{
								name: "Amethyst",
								image: "/public/img/frames/dragonfly-pro/amethyst.png"
							},
							{
								name: "Charcoal",
								image: "/public/img/frames/dragonfly-pro/charcoal.png"
							},
							{
								name: "Neptune",
								image: "/public/img/frames/dragonfly-pro/neptune.png"
							},
							{
								name: "Olive",
								image: "/public/img/frames/dragonfly-pro/olive.png"
							}
						],
						specs: {
							weight: "129g with HDL™ 2.5 Micro oculars",
							light_intensity: "Low/High | 66/98 Lumens",
							color_rendering_index: "95 CRI",
							color_temperature: "6500º K",
							est_charge_time: "Less than 2 hours",
							est_battery_life: "Up to 5 hours 40 minutes <small>depending on light settings</small>",
							included_batteries: "6 included"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "HDL™ 3.5x",
								slug: "hdl-35x"
							},
							{
								name: "HDL™ 4.5x",
								slug: "hdl-45x"
							},
							{
								name: "HDL™ 5.5x",
								slug: "hdl-55x"
							},
							{
								name: "EyeZoom™ Mini",
								slug: "eyezoom-mini"
							},
							{
								name: "EyeZoom™",
								slug: "eyezoom"
							},
							{
								name: "EyeZoom™ Max",
								slug: "eyezoom-max"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							},
							{
								name: "HDL Ergo™ 5.0x",
								slug: "hdl-ergo-50x"
							}
						]
					}
				},
				{
					name: "Dragonfly™ NEO",
					slug: "dragonfly-neo",
					card_image: "/public/img/frames/dragonfly-neo/card.webp",
					description: "Supports 4 popular magnification powers - the preferred loupe for both dental students and medical residents.",
					details: {
						detailed_description: "Supports 4 popular magnification powers - the preferred loupe for both dental students and medical residents.",
						intro_text_1: "The era of enhanced loupes has arrived. We have combined our industry-leading optics and our award-winning front illuminator into a unique, lightweight solution.",
						intro_text_2: "Dragonfly™ is our frame with integrated battery power and circuit that works with a built-in front illuminator, freeing you from the hassle of wires.",
						intro_text_3: "Our basic NEO model is available in a single color and supports four common magnification options.",
						intro_image: "/public/img/frames/dragonfly-neo/intro.webp",
						colors: [
							{
								name: "Midnight",
								image: "/public/img/frames/dragonfly-neo/midnight.png"
							}
						],
						specs: {
							weight: "129g with HDL™ 2.5 Micro oculars",
							light_intensity: "98 Lumens",
							color_rendering_index: "95 CRI",
							color_temperature: "6500º K",
							est_charge_time: "Less than 2 hours",
							est_battery_life: "Up to 5 hours 40 minutes <small>depending on light settings</small>",
							included_batteries: "4 included"
						},
						loupe_options: [
							{
								name: "HDL™ 2.5 Micro",
								slug: "hdl-25-micro"
							},
							{
								name: "HDL™ 2.5 Macro",
								slug: "hdl-25-macro"
							},
							{
								name: "HDL™ 3.0",
								slug: "hdl-30"
							},
							{
								name: "HDL™ 3.5x",
								slug: "hdl-35x"
							},
							{
								name: "HDL™ Ergo 3.5x",
								slug: "hdl-ergo-35x"
							}
						]
					}
				}
			]
		}
	]
};
const HEADLIGHTS = {
	TITLE: "Headlights",
	SUBTITLE: "Having adequate lighting during procedures and examinations is crucial to ensure that critical details are not overlooked. While magnification can enhance your field of view, proper lighting helps eliminate shadows that can obstruct your line of sight.",
	DESCRIPTION_1: "Our <strong>headlights</strong> have the <strong>best overall luminous performance</strong> among leading competitors, according to third-party testing. Thanks to <strong>TruColor™</strong>, our pioneering headlight technology, all <strong>Orascoptic</strong> headlights provide illumination with an <strong>intense CRI</strong> that eclipses the competition.",
	DESCRIPTION_2: "Find the lighting solution to enhance your visibility by reducing shadows in your field of view. Our <strong>TruColor™</strong> technology improves <strong>brightness</strong>, <strong>clarity</strong>, and <strong>depth</strong>.",
	DESCRIPTION_3: "Each headlight undergoes rigorous specific testing to ensure compliance with the blue light standards set by the <strong>International Electrotechnical Commission</strong>. Additionally, our <strong>wireless light sources</strong> fit perfectly with all our <strong>mounts</strong>, ensuring versatility and optimal performance.",
	TEXTS: {
		text_product_image: "Product Image",
		text_features: "Features",
		text_specs: "Specifications",
		text_weight: "Weight",
		text_light_intensity: "Light Intensity",
		text_color_rendering_index: "CRI (Color Rendering Index)",
		text_intensity_control: "Intensity Control",
		text_color_temperature: "Color Temperature",
		text_focus: "Focus",
		text_est_charge_time: "Estimated Charge Time",
		text_est_battery_life: "Estimated Battery Life",
		text_battery_type: "Battery Type"
	},
	PRODUCT_PATH: "/products/headlights/",
	PRODUCTS: [
		{
			type: "",
			products: [
				{
					name: "Endeavour™ MD",
					slug: "endeavour-md",
					card_image: "/public/img/headlights/endeavour-md/card.webp",
					description: "Exclusive to the surgical field, the Endeavour™ MD features an even distribution of up to 85 lumens of light and provides up to 24 hours of constant light output with CRI 92+.",
					details: {
						detailed_description: "Our optimal headlight for surgeons.",
						intro: {
							intro_text_1: "Exclusive to the surgical field, the Endeavour™ MD has an even distribution of up to 115 lumens of light and offers up to twenty-four hours of constant light output with CRI 92+.",
							intro_text_2: "Easily adjust the light settings without having to reach into your pocket. Using Orascoptic's smallest headlight and the longest-lasting battery, the Endeavour™ MD is a reliable and lightweight headlight solution.",
							intro_text_3: "The Endeavour™ MD is available with two battery packs to ensure a seamless experience for every user.",
							intro_image: "/public/img/headlights/endeavour-md/intro.webp"
						},
						specs: {
							weight: "10 g",
							light_intensity: "Low/Medium/High | 68/90/115 lumens",
							color_rendering_index: "92 CRI",
							intensity_control: "Touch control up to 115 lumens",
							color_temperature: "6500 K",
							focus: "Focus of 6.98 cm <small>with a focused beam of 30.5 cm</small>",
							est_charge_time: "Up to 6 hours <small>(Can be used while charging)</small>",
							est_battery_life: "From 11 to 24 hours <small>depending on light setting</small>"
						}
					}
				},
				{
					name: "Endeavour™ XL",
					slug: "endeavour-xl",
					card_image: "/public/img/headlights/endeavour-xl/card.webp",
					description: "With 25% more battery life than the standard Endeavour™ headlight, the Endeavour™ XL provides up to 24 hours of continuous battery life.",
					details: {
						detailed_description: "With greater battery life and brighter light than the standard Endeavour™ headlight, the Endeavour™ XL provides up to 24 hours of continuous battery life and 115 lumens of brightness.",
						intro: {
							intro_text_1: "The Endeavour™ XL headlight provides a precise beam of light that helps illuminate critical details that can often be overlooked at first glance.",
							intro_text_2: "With the addition of multiple light intensities of up to 115 lumens, the headlight allows the user to select the optimal light output for each procedure.",
							intro_text_3: "Constant current technology also ensures that the brightness of the headlight does not diminish during battery runtime.",
							intro_text_4: "The Endeavour™ XL has a three-year warranty for the cable and LED, and a one-year warranty for the battery.",
							intro_image: "/public/img/headlights/endeavour-xl/intro.webp"
						},
						specs: {
							weight: "10 g",
							light_intensity: "Low/Medium/High | 68/90/115 lumens",
							color_rendering_index: "92 CRI",
							intensity_control: "Touch control up to 115 lumens",
							color_temperature: "6500 K",
							focus: "Focus of 6.98 cm <small>with a focused beam of 30.5 cm</small>",
							est_charge_time: "Up to 6 hours <small>(Can be used while charging)</small>",
							est_battery_life: "From 11 to 24 hours <small>depending on light setting</small>"
						}
					}
				},
				{
					name: "Spark™",
					slug: "spark",
					card_image: "/public/img/headlights/spark/card.webp",
					description: "A wireless headlight that integrates seamlessly with any model of loupes or eyeglass frames.",
					details: {
						detailed_description: "Spark™ is our innovative wireless headlight, patent-pending, that integrates seamlessly with any model of loupes or eyeglass frames. Our exclusive design distributes weight evenly across the bridge of the frame, minimizing pressure on the nose.",
						features: [
							{
								title: "Uniform Circular Spot",
								description: "A precisely focused light provides greater visibility during procedures."
							},
							{
								title: "Compatible with Blue Light",
								description: "Meets the safety standards set by the International Electrotechnical Commission (IEC) regarding blue light testing."
							},
							{
								title: "Constant Current Technology",
								description: "Brightness does not decrease during battery runtime."
							},
							{
								title: "Advanced Touch Controls",
								description: "Easily turn the light on and off between procedures and patient consultations."
							},
							{
								title: "Versatile Charger",
								description: "A micro USB charger offers greater convenience for on-the-go charging."
							},
							{
								title: "Low Battery Warning",
								description: "A low battery indicator lights up when the battery capacity falls below twenty percent."
							}
						],
						specs: {
							weight: "29.1 g",
							light_intensity: "40 lumens",
							color_rendering_index: "92 CRI",
							battery_type: "Lithium-ion",
							color_temperature: "6500 K",
							focus: "Focus of 6.98 cm <small>with a focused beam of 30.5 cm</small>",
							est_charge_time: "Up to 2 hours",
							est_battery_life: "Up to 6 hours <small>(2 batteries)</small>"
						}
					}
				}
			]
		}
	]
};
const english = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	HEADER: HEADER,
	FOOTER: FOOTER,
	PAGE_NOT_FOUND: PAGE_NOT_FOUND,
	HOME_PAGE: HOME_PAGE,
	LOUPES: LOUPES,
	FRAMES: FRAMES,
	HEADLIGHTS: HEADLIGHTS
};

const LANGUAGES = {
  CATALAN: "ca",
  SPANISH: "es",
  ENGLISH: "en"
};
const getI18N = ({
  currentLocale = "es"
}) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  return spanish;
};

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const footerData = i18n.FOOTER;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#076b61]"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="/" class="flex items-center"> <img src="/public/logo.png" class="h-[60px] me-3" alt="Optimedic Logo" loading="lazy"> </a> </div> <div class="grid grid-cols-2 gap-8 sm:flex sm:gap-[50px]"> ${footerData.SECTIONS.map((section) => renderTemplate`<div> <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white"> ${section.TITLE} </h2> <ul class="text-gray-400 font-medium flex flex-col gap-1"> ${section.LINKS.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline flex items-center gap-2"> ${link?.name ? link.name : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="w-5 h-5">${unescapeHTML(link.svgIcon)}</span> ${link.data}` })}`} </a> </li>`)} </ul> </div>`)} </div> </div> <hr class="my-6 sm:mx-auto border-gray-400 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-400 sm:text-center">
© 2024${" "} <a href="https://flowbite.com/" class="hover:underline">Optimedic</a>
. ${footerData.COPYRIGHT} </span> <div class="flex gap-4 mt-4 sm:justify-center sm:mt-0 text-gray-400"> <a href="https://www.instagram.com/optimedicsurgery" target="_blank" class="hover:text-white hover:scale-125 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path> </svg> <span class="sr-only">Instagram page</span> </a> <a href="https://x.com/Optimedic" target="_blank" class="hover:text-white hover:scale-125 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path> <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path> </svg> <span class="sr-only">X page</span> </a> <a href="https://www.linkedin.com/in/carolinagay/" target="_blank" class="hover:text-white hover:scale-125 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg> <span class="sr-only">Linkedin page</span> </a> <a href="https://www.facebook.com/optimedic.es/" target="_blank" class="hover:text-white hover:scale-125 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path> </svg> <span class="sr-only">Facebook page</span> </a> </div> </div> </div> </footer>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/gerar/dev/Optimedic/node_modules/astro/components/ViewTransitions.astro", void 0);

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const languages = [
    {
      code: "es",
      svg: "/flags/es.svg"
      // Cambia la ruta si es necesario
    },
    {
      code: "en",
      svg: "/flags/en.svg"
      // Cambia la ruta si es necesario
    }
  ];
  useEffect(() => {
    const currentLanguage = window.location.pathname.split("/")[1];
    if (languages.some((lang) => lang.code === currentLanguage)) {
      setSelectedLanguage(currentLanguage);
    }
  }, []);
  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    if (code === "es") {
      window.location.href = "/";
    } else {
      window.location.href = `/${code}`;
    }
  };
  return /* @__PURE__ */ jsxs(Popover, { className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsxs(Popover.Button, { className: "inline-flex w-24 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: languages.find((lang) => lang.code === selectedLanguage)?.svg,
            alt: `Flag of ${selectedLanguage}`,
            className: "h-5 w-5 mr-2"
          }
        ),
        selectedLanguage.toUpperCase()
      ] }),
      /* @__PURE__ */ jsx(ChevronDownIcon, { className: "-mr-1 h-5 w-5", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        children: /* @__PURE__ */ jsx(Popover.Panel, { className: "absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ jsx("div", { className: "py-1", children: languages.map((language) => {
          if (language.code === selectedLanguage) return null;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              onClick: () => handleLanguageChange(language.code),
              className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: language.svg,
                    alt: `Flag of ${language.code}`,
                    className: "h-5 w-5 mr-2"
                  }
                ),
                language.code.toUpperCase()
              ]
            },
            language.code
          );
        }) }) })
      }
    )
  ] });
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header({ i18n }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    async function fetchNavContent() {
      setNavItems(i18n.HEADER.NAV_ITEMS);
      setProducts(i18n.HOME_PAGE.PRODUCTS);
    }
    fetchNavContent();
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: classNames(
        "fixed inset-x-0 top-0 z-30 transition-colors duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: "mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-4 lg:px-8",
            "aria-label": "Global",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsx("a", { href: i18n.HEADER.HOME_LINK, children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-8 w-auto",
                  src: "/public/Imagotip Blanc.jpg",
                  alt: "Optimedic logo"
                }
              ) }) }),
              /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "inline-flex items-center justify-center rounded-md p-2.5",
                  onClick: () => setMobileMenuOpen(true),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
                    /* @__PURE__ */ jsx(Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(PopoverGroup, { className: "hidden lg:flex lg:gap-x-12", children: [
                /* @__PURE__ */ jsxs(Popover, { className: "relative", children: [
                  /* @__PURE__ */ jsxs(PopoverButton, { className: "flex items-center gap-x-1 text-sm font-semibold leading-6", children: [
                    navItems.length > 0 && navItems[0].name,
                    /* @__PURE__ */ jsx(
                      ChevronDownIcon,
                      {
                        className: "h-5 w-5 flex-none text-gray-400",
                        "aria-hidden": "true"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    Transition,
                    {
                      enter: "transition ease-out duration-200",
                      enterFrom: "opacity-0 translate-y-1",
                      enterTo: "opacity-100 translate-y-0",
                      leave: "transition ease-in duration-150",
                      leaveFrom: "opacity-100 translate-y-0",
                      leaveTo: "opacity-0 translate-y-1",
                      children: /* @__PURE__ */ jsx(PopoverPanel, { className: "absolute -left-8 top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 overflow-hidden max-h-[calc(100vh-90px)]", children: /* @__PURE__ */ jsx("div", { className: "overflow-auto max-h-[calc(100vh-90px)]", children: /* @__PURE__ */ jsx("div", { className: "p-4 overflow-auto", children: products.map((product) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex flex-col items-center",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "flex text-sm font-semibold leading-6 text-gray-900 mb-1", children: product.name }),
                            /* @__PURE__ */ jsx("hr", { className: "w-[20%] border-gray-900 mb-1" }),
                            product.subcategories.map((subcategory) => /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "group w-full relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50",
                                children: /* @__PURE__ */ jsxs("div", { className: "flex-auto", children: [
                                  /* @__PURE__ */ jsxs(
                                    "a",
                                    {
                                      href: subcategory.href,
                                      className: "block font-semibold text-gray-900",
                                      children: [
                                        subcategory.name,
                                        /* @__PURE__ */ jsx("span", { className: "absolute inset-0" })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-600", children: subcategory.description })
                                ] })
                              },
                              subcategory.name
                            ))
                          ]
                        },
                        product.name
                      )) }) }) })
                    }
                  )
                ] }),
                navItems.slice(1).map((item) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.href,
                    className: "text-sm font-semibold leading-6",
                    children: item.name
                  },
                  item.name
                ))
              ] }),
              /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ jsx(LanguageDropdown, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Dialog,
          {
            className: "lg:hidden",
            open: mobileMenuOpen,
            onClose: setMobileMenuOpen,
            children: /* @__PURE__ */ jsxs(
              DialogPanel,
              {
                className: "fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform translate-x-0",
                style: {
                  backdropFilter: "blur(5px)",
                  // Efecto de desenfoque en el fondo
                  backgroundColor: "rgba(255, 255, 255, 0.95)"
                  // Fondo con un poco de transparencia
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(LanguageDropdown, {}) }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        className: "flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200",
                        onClick: () => setMobileMenuOpen(false),
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                          /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6 text-gray-700", "aria-hidden": "true" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsx("div", { className: "-my-6 divide-y divide-gray-300/10", children: /* @__PURE__ */ jsxs("div", { className: "gap-4 py-6 flex flex-col", children: [
                    /* @__PURE__ */ jsx(Disclosure, { as: "div", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                      /* @__PURE__ */ jsxs(DisclosureButton, { className: "flex w-full items-center justify-between rounded-lg mt-3 py-2 pl-4 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition duration-200", children: [
                        navItems.length > 0 && navItems[0].name,
                        /* @__PURE__ */ jsx(
                          ChevronDownIcon,
                          {
                            className: classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            ),
                            "aria-hidden": "true"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(DisclosurePanel, { className: "mt-2 space-y-2", children: products.map((product) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex flex-col items-start",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "flex mb-1 ml-4 text-sm font-semibold leading-6 text-gray-900", children: product.name }),
                            /* @__PURE__ */ jsx("hr", { className: "w-[10%] ml-4 border-gray-900 mb-1" }),
                            product.subcategories.map((subcategory) => /* @__PURE__ */ jsx(
                              DisclosureButton,
                              {
                                as: "a",
                                href: subcategory.href,
                                className: "block w-full rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-200",
                                children: subcategory.name
                              },
                              subcategory.name
                            ))
                          ]
                        },
                        product.name
                      )) })
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: navItems.slice(1).map((item) => /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        className: "flex items-center justify-start rounded-lg py-3 pl-4 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition duration-200",
                        children: item.name
                      },
                      item.name
                    )) })
                  ] }) }) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="font-sans min-h-screen flex flex-col"> ${renderComponent($$result, "Header", Header, { "i18n": i18n, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/gerar/dev/Optimedic/src/components/header", "client:component-export": "default" })} <main class="flex-grow mx-4 max-w-[1200px] lg:mx-auto flex flex-col items-center gap-[200px] mb-[100px] mt-[60px] lg:mt-[64px] lg:text-[18px]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/gerar/dev/Optimedic/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getI18N as g };
