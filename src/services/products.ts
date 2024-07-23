// src/data/products.js
export const productsData = [
  {
    name: "Loupes",
    img: "/public/img/oscar-alonso1.jpg",
    subcategories: [
      {
        name: "Lupas",
        description: "Encuentre su aumento ideal con nuestras lupas.",
        href: "/src/pages/products/loupes.astro",
      },
      {
        name: "Monturas",
        description:
          "Monturas duraderas y estéticamente atractivas que superarán sus expectativas de rendimiento y estilo.",
        href: "/src/pages/products/frames.astro",
      },
    ],
  },
  {
    name: "Surgery",
    img: "/public/img/IMG_0415.png",
    subcategories: [
      {
        name: "MicroAire",
        description:
          "Un potente instrumento de precisión diseñado para la extracción de grasa de pequeño o gran volumen, el contorno corporal y la recolección de grasa.",
        href: "/src/pages/products/microaire.astro",
      },
      {
        name: "Renuvion",
        description:
          "El único dispositivo aprobado por la FDA para su uso después de una liposucción y el único dispositivo aprobado por la FDA para contraer el tejido blando subcutáneo.",
        href: "/src/pages/products/renuvion.astro",
      },
    ],
  },
  {
    name: "Events",
    img: "/public/img/barcelona-oculoplastics-resumen-grafico-sorteo-gafas-lupa.jpg",
    subcategories: [
      {
        name: "Conference",
        description: "Your customers’ data will be safe and secure",
        href: "/src/pages/products/events.astro",
      },
    ],
  },
];
