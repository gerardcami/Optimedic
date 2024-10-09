/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getI18N } from '../../chunks/Layout_CLPr8hgh.mjs';
import { $ as $$ProductTitle, a as $$CardProduct } from '../../chunks/CardProduct_D0VJNE0m.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Monturas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monturas;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.FRAMES.TITLE, "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductTitle", $$ProductTitle, { "productType": "FRAMES" })} ${renderComponent($$result2, "CardProduct", $$CardProduct, { "productType": "FRAMES" })} ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/productos/monturas.astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/productos/monturas.astro";
const $$url = "/productos/monturas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Monturas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
