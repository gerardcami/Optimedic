/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getI18N } from '../../../../chunks/Layout_CLPr8hgh.mjs';
import { F as FrameColors, $ as $$FrameSpecs } from '../../../../chunks/FrameSpecs_CZB_KTBO.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$frame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$frame;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const framesTexts = i18n.FRAMES.TEXTS;
  const framesData = i18n.FRAMES.PRODUCTS;
  const { frame } = Astro2.params;
  const product = framesData.flatMap((frameType) => frameType.products).find((product2) => product2.slug === frame);
  if (!product) {
    throw new Error(`Product not found for slug: ${frame}`);
  }
  const details = product.details;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[calc(100vw-5px)] py-12 flex flex-col lg:flex-row items-center justify-center gap-8 px-8 md:px-16 shadow-[0_20px_25px_-4px_rgba(7,107,97,0.5)] bg-gradient-to-r from-teal-500 to-teal-700 text-white"> <div class="lg:w-1/2 flex flex-col gap-6 px-4 mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left"> ${product.name} </h1> <p class="text-lg md:text-xl leading-relaxed text-center lg:text-left"> ${details.detailed_description} </p> </div> <div class="lg:w-1/3 flex justify-center items-center px-4"> <figure class="w-full max-w-lg rounded-lg shadow-lg"> <img class="w-full rounded"${addAttribute(product.card_image, "src")}${addAttribute(product.name, "alt")}> </figure> </div> </section> <section class="w-full"> <article class="flex flex-col px-12 text-center lg:flex-row lg:text-start gap-[100px] justify-between items-center"> <div class="flex flex-col gap-5"> ${details.intro_text_1 && renderTemplate`<p>${details.intro_text_1}</p>`} ${details.intro_text_2 && renderTemplate`<p>${details.intro_text_2}</p>`} ${details.intro_text_3 && renderTemplate`<p>${details.intro_text_3}</p>`} </div> <img${addAttribute(details?.intro_image, "src")} alt="" class="w-[500px] shadow-2xl" style="border-radius: 43% 57% 32% 68% / 61% 52% 48% 39%;"> </article> </section> ${renderComponent($$result2, "FrameColors", FrameColors, { "client:visible": true, "frame": product.name, "colors": details.colors, "texts": framesTexts, "client:component-hydration": "visible", "client:component-path": "C:/Users/gerar/dev/Optimedic/src/components/frameColors", "client:component-export": "default" })} <section class="w-full mt-12 flex flex-col gap-4"> ${renderComponent($$result2, "FrameSpecs", $$FrameSpecs, { "texts": framesTexts, "specs": details.specs })} <article class="flex flex-col bg-white shadow-2xl p-12 rounded-lg flex-1"> <h2 class="text-3xl mb-12 font-bold">${framesTexts.text_loupe_options}</h2> <div class="flex flex-col gap-2"> ${details.loupe_options ? details.loupe_options.map((option) => renderTemplate`<a${addAttribute(`${i18n.FRAMES.LOUPES_PATH}${option.slug}`, "href")} class="hover:underline transition-colors duration-200 text-teal-600 hover:text-teal-800 border-b pb-2 mb-2"> ${option.name} </a>`) : renderTemplate`<a${addAttribute(i18n.FRAMES.LOUPES_PATH, "href")} class="hover:underline transition-colors duration-200 text-teal-600 hover:text-teal-800"> ${framesTexts.text_all_loupe_options} </a>`} </div> </article> </section> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/en/products/frames/[frame].astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/en/products/frames/[frame].astro";
const $$url = "/en/products/frames/[frame]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$frame,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
