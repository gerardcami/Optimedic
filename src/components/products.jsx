import { productsData } from "../services/products";

export default function Products() {
  return (
    <section className="w-full h-[500px] grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(2,1fr)] gap-4">
      {productsData.map((product, index) => (
        <article
          key={index}
          className={`relative bg-cover bg-center rounded-lg overflow-hidden ${
            index === 0 ? "col-span-4" : index === 1 ? "col-span-3" : ""
          } group`}
          style={{ backgroundImage: `url(${product.img})` }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg group-hover:bg-opacity-75 transition-all duration-300 ease-in-out">
            <p className="text-white text-2xl font-semibold p-4 group-hover:hidden transition-opacity duration-300 ease-in-out">
              {product.name}
            </p>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex flex-col items-center space-y-2">
                {product.subcategories.map((subcategory, subIndex) => (
                  <a
                    key={subIndex}
                    //TODO: Arreglar url según idioma
                    href={`/products/${subcategory.name.toLowerCase()}`}
                    className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:underline"
                    style={{ transitionDelay: `${subIndex * 100}ms` }}
                  >
                    {subcategory.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
