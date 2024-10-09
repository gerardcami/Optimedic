import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as createAstro } from './astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import 'clsx';

function FrameColors({ frame, colors, texts }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const handleColorChange = (color) => {
    if (color.name !== selectedColor.name) {
      setIsFadingOut(true);
      setTimeout(() => {
        setSelectedColor(color);
        setIsFadingOut(false);
      }, 300);
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col mt-12 px-12 gap-8 w-full", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl mb-8 text-center lg:text-start font-bold ", children: texts.text_color_options }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:w-2/3 rounded-lg flex justify-center items-center shadow-2xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: selectedColor.image,
          alt: `${texts.text_selected_color}: ${selectedColor.name}`,
          className: `object-fill rounded-lg transition-opacity duration-300 ${isFadingOut ? "opacity-0" : "opacity-100"}`
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-1/3", children: /* @__PURE__ */ jsx(
        "ul",
        {
          className: "w-fit flex flex-wrap justify-center lg:flex-col gap-4",
          role: "listbox",
          "aria-label": texts.text_color_options,
          children: colors.map((color) => /* @__PURE__ */ jsxs(
            "li",
            {
              onClick: () => handleColorChange(color),
              role: "option",
              "aria-selected": color.name === selectedColor.name,
              className: `cursor-pointer border-2 p-2 px-4 rounded-lg flex flex-grow gap-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${color.name === selectedColor.name ? "border-[#076b61]" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: color.image,
                    alt: `${texts.text_available_color}: ${selectedColor.name}`,
                    className: " h-20 object-cover rounded-md"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 justify-center select-none", children: [
                  /* @__PURE__ */ jsx("p", { children: `${frame} ${color.name}` }),
                  /* @__PURE__ */ jsx("p", { children: `${texts.text_color}: ${color.name}` })
                ] })
              ]
            },
            color.name
          ))
        }
      ) })
    ] })
  ] });
}
FrameColors.propTypes = {
  frame: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  texts: PropTypes.shape({
    text_selected_color: PropTypes.string.isRequired,
    text_available_color: PropTypes.string.isRequired,
    text_color_options: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired
  }).isRequired
};

const $$Astro = createAstro();
const $$FrameSpecs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrameSpecs;
  const { specs, texts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col shadow-2xl p-12 rounded-lg"> <h2 class="text-3xl mb-12 font-bold">${texts.text_specs}</h2> <div class="flex flex-col flex-wrap max-h-[400px] gap-4"> ${specs?.materials && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_materials} </h3> <p class="text-gray-700">${unescapeHTML(specs.materials)}</p> </div>`} ${specs?.sizes && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600">${texts.text_sizes}</h3> <p class="text-gray-700">${unescapeHTML(specs.sizes)}</p> </div>`} ${specs?.weight && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600">${texts.text_weight}</h3> <p class="text-gray-700">${unescapeHTML(specs.weight)}</p> </div>`} ${specs?.light_intensity && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_light_intensity} </h3> <p class="text-gray-700">${unescapeHTML(specs.light_intensity)}</p> </div>`} ${specs?.color_rendering_index && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_color_rendering_index} </h3> <p class="text-gray-700">${unescapeHTML(specs.color_rendering_index)}</p> </div>`} ${specs?.color_temperature && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_color_temperature} </h3> <p class="text-gray-700">${unescapeHTML(specs.color_temperature)}</p> </div>`} ${specs?.est_charge_time && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_est_charge_time} </h3> <p class="text-gray-700">${unescapeHTML(specs.est_charge_time)}</p> </div>`} ${specs?.est_battery_life && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_est_battery_life} </h3> <p class="text-gray-700">${unescapeHTML(specs.est_battery_life)}</p> </div>`} ${specs?.included_batteries && renderTemplate`<div class="border-b pb-2 mb-2"> <h3 class="text-xl font-bold text-teal-600"> ${texts.text_included_batteries} </h3> <p class="text-gray-700">${unescapeHTML(specs.included_batteries)}</p> </div>`} </div> </article>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/FrameSpecs.astro", void 0);

export { $$FrameSpecs as $, FrameColors as F };
