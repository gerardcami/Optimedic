import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as createAstro } from './astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$LoupeSpecs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoupeSpecs;
  const { specs, texts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="lg:w-1/2 flex flex-col gap-4 shadow-2xl p-12 rounded-lg"> ${specs?.magnification_power && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_magnification_power} </h3> <p class="text-gray-700">${unescapeHTML(specs.magnification_power)}</p> </div>`} ${specs?.weight && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600">${texts.text_weight}</h3> <p class="text-gray-700">${unescapeHTML(specs.weight)}</p> </div>`} ${specs?.weight && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600">${texts.text_weight}</h3> <p class="text-gray-700">${unescapeHTML(specs.weight)}</p> </div>`} ${specs?.field_width && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_field_width} </h3> <p class="text-gray-700">${unescapeHTML(specs.field_width)}</p> </div>`} ${specs?.field_depth && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_field_depth} </h3> <p class="text-gray-700">${unescapeHTML(specs.field_depth)}</p> </div>`} </article>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/LoupeSpecs.astro", void 0);

export { $$LoupeSpecs as $ };
