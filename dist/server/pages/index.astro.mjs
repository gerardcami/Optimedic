/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { $ as $$App } from '../chunks/App_BbzT1301.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/gerar/dev/Optimedic/src/pages/index.astro", void 0);

const $$file = "C:/Users/gerar/dev/Optimedic/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
