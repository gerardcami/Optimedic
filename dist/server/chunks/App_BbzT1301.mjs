import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, u as unescapeHTML, a as addAttribute, d as renderComponent } from './astro/server_D05x6nPs.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Layout } from './Layout_CLPr8hgh.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

const $$Astro$3 = createAstro();
const $$MainTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainTitle;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="h-[calc(100vh-60px)] lg:h-[calc(100vh-64px)] w-full flex items-center justify-around"> <div class="flex flex-col gap-6"> <h1 class="text-6xl">${i18n.HOME_PAGE.TITLE}</h1> <h3 class="text-4xl">${i18n.HOME_PAGE.SLOGAN}</h3> </div> <div> <img src="/public/logo.png" alt=""> </div> </section>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/MainTitle.astro", void 0);

const $$Astro$2 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const featuresData = i18n.HOME_PAGE.FEATURES;
  return renderTemplate`${maybeRenderHead()}<section class="flex text-center flex-col px-12 lg:flex-row justify-center items-center w-full lg:h-[200px] gap-[80px]"> ${featuresData.map((feature) => renderTemplate`<article class="flex flex-col items-center md:w-1/3 lg:w-1/4 h-full"> <div class="icon">${unescapeHTML(feature.icon)}</div> <h3 class="font-bold text-lg">${feature.title}</h3> <hr class="my-[10px] w-1/4 border border-black rounded-full"> <p class="text-center">${unescapeHTML(feature.description)}</p> </article>`)} </section>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/Features.astro", void 0);

const Slides = [
  {
    id: 1,
    image:
      "/public/img/barcelona-oculoplastics-resumen-grafico-sorteo-gafas-lupa.jpg",
  },
  {
    id: 2,
    image: "/public/img/oscar-alonso1.jpg",
  },
  {
    id: 3,
    image: "/public/img/IMG_0345.png",
  },
  {
    id: 4,
    image: "/public/img/IMG_0415.png",
  },
  {
    id: 5,
    image: "/public/img/oscar-alonso2.jpg",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Slides;
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const carouselRef = useRef(null);
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
    }, 5e3);
  };
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };
  const handlePrevClick = () => {
    setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
    resetInterval();
  };
  const handleNextClick = () => {
    setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
    resetInterval();
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
    startX.current = e.clientX;
    isDragging.current = true;
    carouselRef.current.style.cursor = "grabbing";
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const distance = startX.current - e.clientX;
    if (distance > 50) {
      handleNextClick();
      isDragging.current = false;
    } else if (distance < -50) {
      handlePrevClick();
      isDragging.current = false;
    }
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "default";
  };
  const handleTouchStart = (e) => {
    e.preventDefault();
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    carouselRef.current.style.cursor = "grabbing";
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const distance = startX.current - e.touches[0].clientX;
    if (distance > 50) {
      handleNextClick();
      isDragging.current = false;
    } else if (distance < -50) {
      handlePrevClick();
      isDragging.current = false;
    }
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "default";
  };
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: carouselRef,
      className: "relative w-[80%]",
      "data-carousel": "slide",
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-56 overflow-hidden rounded-lg md:h-[500px]", children: slides.map((slide, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
            "data-carousel-item": true,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: slide.image,
                className: "block w-full h-full object-cover",
                alt: `Slide ${slide.id}`,
                draggable: "false"
              }
            )
          },
          slide.id
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group",
            "data-carousel-prev": true,
            onClick: handlePrevClick,
            children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6 text-white dark:text-gray-800",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M15 19l-7-7 7-7"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
            "data-carousel-next": true,
            onClick: handleNextClick,
            children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6 text-white dark:text-gray-800",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 5l7 7-7 7"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 w-full flex justify-center space-x-2 p-2", children: slides.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `w-8 h-1 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-[#076B61] w-[45px]" : "bg-gray-300"}`,
            onClick: () => handleIndicatorClick(index),
            "aria-label": `Go to slide ${index + 1}`
          },
          index
        )) })
      ]
    }
  );
}

const $$Astro$1 = createAstro();
const $$Products = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Products;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  const productsData = i18n.HOME_PAGE.PRODUCTS;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex flex-col px-12 lg:grid lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-[repeat(2,1fr)] gap-4"> ${productsData.map((product, index) => renderTemplate`<article${addAttribute(`relative bg-cover bg-center rounded-lg overflow-hidden h-[250px] ${index === 0 ? "col-span-4" : index === 1 ? "col-span-3" : "col-span-1"} group`, "class")}${addAttribute({ backgroundImage: `url(${product.img})` }, "style")}> <div class="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg group-hover:bg-opacity-75 transition-all duration-300 ease-in-out"> <p class="text-white text-2xl font-semibold p-4 group-hover:hidden transition-opacity duration-300 ease-in-out"> ${product.name} </p> <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"> <div class="flex flex-col items-center space-y-2"> ${product.subcategories.map((subcategory, subIndex) => renderTemplate`<a${addAttribute(subcategory.href, "href")} class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:underline"${addAttribute({ transitionDelay: `${subIndex * 100}ms` }, "style")}> ${subcategory.name} </a>`)} </div> </div> </div> </article>`)} </section>`;
}, "C:/Users/gerar/dev/Optimedic/src/components/Products.astro", void 0);

const $$Astro = createAstro();
const $$App = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale = "es" } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$MainTitle, {})} ${renderComponent($$result2, "Carousel", Carousel, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/gerar/dev/Optimedic/src/components/carousel", "client:component-export": "default" })} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Products", $$Products, {})} ` })}`;
}, "C:/Users/gerar/dev/Optimedic/src/components/App.astro", void 0);

export { $$App as $ };
