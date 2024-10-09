/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../../../../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getI18N } from '../../../../chunks/Layout_CLPr8hgh.mjs';
import { $ as $$LoupeSpecs } from '../../../../chunks/LoupeSpecs_Bfk1spHR.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$loupe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$loupe;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const loupesTexts = i18n.LOUPES.TEXTS;
  const loupesData = i18n.LOUPES.PRODUCTS;
  const { loupe } = Astro2.params;
  const product = loupesData.flatMap((loupeType) => loupeType.products).find((product2) => product2.slug === loupe);
  if (!product) {
    throw new Error(`Product not found for slug: ${loupe}`);
  }
  const details = product.details;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[calc(100vw-5px)] py-12 flex flex-col lg:flex-row items-center justify-center gap-8 px-8 md:px-16 shadow-[0_20px_25px_-4px_rgba(7,107,97,0.5)] bg-gradient-to-r from-teal-500 to-teal-700 text-white"> <div class="lg:w-1/2 flex flex-col gap-6 px-4 mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left"> ${product.name} </h1> <p class="text-lg md:text-xl leading-relaxed text-center lg:text-left"> ${details.detailed_description} </p> </div> <div class="lg:w-1/3 flex justify-center items-center px-4"> <figure class="w-full max-w-lg rounded-lg shadow-lg"> <img class="w-full rounded"${addAttribute(product.card_image, "src")}${addAttribute(product.name, "alt")}> </figure> </div> </section> <section class="w-full"> <article class="flex flex-col px-12 text-center lg:flex-row lg:text-start gap-[100px] justify-between items-center"> <div class="flex flex-col gap-5"> ${details.intro_text_1 && renderTemplate`<p>${details.intro_text_1}</p>`} ${details.intro_text_2 && renderTemplate`<p>${details.intro_text_2}</p>`} ${details.intro_text_3 && renderTemplate`<p>${details.intro_text_3}</p>`} </div> <img${addAttribute(details?.intro_image, "src")} alt="" class="w-[500px] shadow-2xl" style="border-radius: 43% 57% 32% 68% / 61% 52% 48% 39%;"> </article> </section> <section class="flex flex-col-reverse mt-12 px-12 text-center lg:flex-row lg:text-start gap-[100px] justify-between items-center"> <img${addAttribute(details?.specs_image, "src")} alt="" class="w-[500px] shadow-2xl" style="border-radius: 32% 68% 68% 32% / 50% 58% 42% 50%;"> <div class="lg:w-1/2"> <h2 class="text-3xl mb-8 font-bold">${loupesTexts.text_title_specs}</h2> <div class="flex flex-col gap-4"> <p class="text-gray-700">${unescapeHTML(loupesTexts.text_intro_specs_1)}</p> <p class="text-gray-700">${unescapeHTML(loupesTexts.text_intro_specs_2)}</p> <p class="italic font-bold text-sm" class="text-gray-700">${unescapeHTML(loupesTexts.text_specs_disclaimer)}</p> </div> </div> </section> <section class="w-full flex flex-col lg:flex-row gap-4 mt-12"> ${renderComponent($$result2, "LoupeSpecs", $$LoupeSpecs, { "texts": loupesTexts, "specs": details.specs })} <article class="flex lg:w-1/2 flex-col bg-white shadow-2xl p-12 rounded-lg flex-1"> <h2 class="text-3xl mb-12 font-bold">${loupesTexts.text_frame_options}</h2> <div class="flex flex-col gap-2"> ${details.frame_options && details.frame_options.map((option) => renderTemplate`<a${addAttribute(`${i18n.LOUPES.FRAMES_PATH}${option.slug}`, "href")} class="hover:underline transition-colors duration-200 text-teal-600 hover:text-teal-800 border-b pb-2 mb-2"> ${option.name} </a>`)} </div> </article> </section> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/en/products/loupes/[loupe].astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/en/products/loupes/[loupe].astro";
const $$url = "/en/products/loupes/[loupe]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$loupe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
