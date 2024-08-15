import { loupesData } from "../services/loupes-data";

export default function CardLoupes() {
  return (
    <article className="flex flex-col gap-[50px]">
      {loupesData.map((loupes, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <h2 className="text-3xl font-semibold">{loupes.type}</h2>
          <div className="grid grid-cols-3 gap-[50px]">
            {loupes.products.map((productData, productIndex) => (
              <a
                href={`/products/loupes/${productData.slug}`}
                className="relative rounded-lg overflow-hidden flex flex-col cursor-pointer transform transition-transform hover:shadow-lg hover:scale-105"
                key={productIndex}
              >
                <div
                  className="bg-contain bg-no-repeat bg-center h-48 relative"
                  style={{ backgroundImage: `url(${productData.coverImage})` }}
                >
                  <div className="absolute inset-0 bg-gray-700 opacity-10"></div>
                </div>
                <div className="bg-[#076b61] p-4 text-white flex-grow flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">
                      {productData.name}
                    </h3>
                    <div className="w-[10%] h-[2px] bg-white rounded-lg"></div>
                    <p>{productData.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}
