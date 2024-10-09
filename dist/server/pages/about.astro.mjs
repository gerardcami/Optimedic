/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLPr8hgh.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Optimedic", "description": "About Optimedic" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mt-[92px] lg:mt-[80px]">This is the about page</p> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/about.astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
