/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getI18N } from '../../../../chunks/Layout_CLPr8hgh.mjs';
import { $ as $$HeadlightSpecs } from '../../../../chunks/HeadlightSpecs_Cv4rn9dQ.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$headlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$headlight;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const headlightsTexts = i18n.HEADLIGHTS.TEXTS;
  const headlightsData = i18n.HEADLIGHTS.PRODUCTS;
  const { headlight } = Astro2.params;
  const product = headlightsData.flatMap((headlightType) => headlightType.products).find((product2) => product2.slug === headlight);
  if (!product) {
    throw new Error(`Product not found for slug: ${headlight}`);
  }
  const details = product.details;
  console.log(details.features);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[calc(100vw-5px)] py-12 flex flex-col lg:flex-row items-center justify-center gap-8 px-8 md:px-16 shadow-[0_20px_25px_-4px_rgba(7,107,97,0.5)] bg-gradient-to-r from-teal-500 to-teal-700 text-white"> <div class="lg:w-1/2 flex flex-col gap-6 px-4 mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left"> ${product.name} </h1> <p class="text-lg md:text-xl leading-relaxed text-center lg:text-left"> ${details.detailed_description} </p> </div> <div class="lg:w-1/3 flex justify-center items-center px-4"> <figure class="w-full max-w-lg rounded-lg shadow-lg"> <img class="w-full rounded"${addAttribute(product.card_image, "src")}${addAttribute(product.name, "alt")}> </figure> </div> </section> ${details.intro ? renderTemplate`<section class="w-full"> <article class="flex flex-col px-12 text-center lg:flex-row lg:text-start gap-[100px] justify-between items-center"> <div class="flex flex-col gap-5"> <p>${details.intro.intro_text_1}</p> <p>${details.intro.intro_text_2}</p> <p>${details.intro.intro_text_3}</p> </div> <img${addAttribute(details.intro.intro_image, "src")} alt="" class="w-[500px] shadow-2xl" style="border-radius: 43% 57% 32% 68% / 61% 52% 48% 39%;"> </article> </section>` : renderTemplate`<section class="w-full p-12 bg-gray-100 rounded-lg"> <h2 class="text-3xl font-bold mb-12"> ${headlightsTexts.text_features} </h2> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${details.features?.map((feature) => renderTemplate`<li class="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"> <h3 class="text-xl font-semibold text-teal-600 mb-4"> ${feature.title} </h3> <p class="text-gray-700 leading-relaxed">${feature.description}</p> </li>`)} </ul> </section>`}<section class="w-full flex flex-col gap-4"> ${renderComponent($$result2, "HeadlightSpecs", $$HeadlightSpecs, { "texts": headlightsTexts, "specs": details.specs })} </section> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/en/products/headlights/[headlight].astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/en/products/headlights/[headlight].astro";
const $$url = "/en/products/headlights/[headlight]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$headlight,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };