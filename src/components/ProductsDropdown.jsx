import { useState } from "react";

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center text-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="cursor-pointer">Productos</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 icon icon-tabler icon-tabler-chevron-down"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 9l6 6 6-6" />
      </svg>

      {isOpen && (
        <div className="absolute top-[10px] w-full bg-gray-800 text-white p-5 z-50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 font-semibold">Loupes</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Lupas
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Monturas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Surgery</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    MicroAire
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Renuvion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsDropdown;
