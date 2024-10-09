import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as createAstro, a as addAttribute } from './astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getI18N } from './Layout_CLPr8hgh.mjs';

const $$Astro$1 = createAstro();
const $$ProductTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductTitle;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const { productType } = Astro2.props;
  const product = i18n[productType];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-12 px-12 lg:px-0"> <h1 class="text-6xl text-center lg:text-start font-semibold">${unescapeHTML(product.TITLE)}</h1> <article class="flex flex-row gap-4"> <div class="relative hidden lg:block"> <div class="w-[5px] h-full bg-[#076b61] rounded"></div> </div> <div class="flex flex-col text-center gap-12 lg:gap-4 lg:text-start"> <p class="italic font-bold text-lg">${unescapeHTML(product.SUBTITLE)}</p> <p class="text-lg">${unescapeHTML(product.DESCRIPTION_1)}</p> <p class="text-lg">${unescapeHTML(product.DESCRIPTION_2)}</p> <p class="text-lg">${unescapeHTML(product.DESCRIPTION_3)}</p> </div> </article> </section>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/ProductTitle.astro", void 0);

const $$Astro = createAstro();
const $$CardProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProduct;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const { productType } = Astro2.props;
  const products = i18n[productType]["PRODUCTS"];
  const productsPath = i18n[productType]["PRODUCT_PATH"];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-[50px]"> ${products.map((type) => renderTemplate`<article class="flex py-12 flex-col gap-4"> <header> <h2 class="text-center text-3xl mb-12 font-bold lg:text-start"> ${type.type} </h2> </header> <div class="flex flex-col lg:grid lg:grid-cols-3 gap-[50px]"> ${type.products.map((productData) => renderTemplate`<div class="flex flex-col gap-4 max-w-[350px]"> <a${addAttribute(`${productsPath}${productData.slug}`, "href")} class="shadow-2xl relative rounded-md overflow-hidden flex flex-col h-full cursor-pointer transform transition-transform hover:shadow-lg hover:scale-105"> <div class="bg-contain bg-no-repeat bg-center h-48 relative"${addAttribute({ backgroundImage: `url(${productData.card_image})` }, "style")}> <div class="absolute inset-0 bg-gray-400 opacity-10"></div> </div> <div class="p-4 flex-grow flex flex-col justify-between"> <div class="flex flex-col gap-4"> <h3 class="text-xl font-bold">${productData.name}</h3> <div class="w-[10%] h-[2px] bg-[#076b61] rounded-lg"></div> <p>${productData.description}</p> </div> </div> </a> </div>`)} </div> </article>`)} </section>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/CardProduct.astro", void 0);

export { $$ProductTitle as $, $$CardProduct as a };
