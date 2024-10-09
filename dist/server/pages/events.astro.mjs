/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLPr8hgh.mjs';
export { renderers } from '../renderers.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events", "description": "Events" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mt-[92px] lg:mt-[80px]">This is the events page</p> ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/events.astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
