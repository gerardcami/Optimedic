/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Layout } from '../chunks/Layout_CLPr8hgh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const notFoundData = i18n.PAGE_NOT_FOUND;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": "Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[calc(100vh-60px)] lg:h-[calc(100vh-64px)] text-center w-full flex flex-col justify-center items-center gap-4"> <p class="text-6xl font-semibold text-teal-600">404</p> <h1 class="text-3xl mt-12 font-bold tracking-tight text-gray-900 sm:text-5xl"> ${notFoundData.TITLE} </h1> <div class="mt-12 flex items-center justify-center gap-x-6"> <a${addAttribute(notFoundData.HOME_PAGE, "href")} class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">${notFoundData.BUTTON}</a> </div> </div> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/404.astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
