import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function FrameColors({ frame, colors, texts }) {
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

  return (
    <section className="flex flex-col mt-[100px] md:mt-0 md:px-12 md:gap-8 w-full">
      <h2 className="text-3xl mb-8 text-center lg:text-start font-bold ">
        {texts.text_color_options}
      </h2>
      <div className="flex w-full flex-col lg:flex-row md:gap-10">
        <div className="w-full lg:w-2/3 rounded-lg flex justify-center items-center md:shadow-2xl">
          <img
            src={selectedColor.image}
            alt={`${texts.text_selected_color}: ${selectedColor.name}`}
            className={`object-fill rounded-lg transition-opacity duration-300 ${
              isFadingOut ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="lg:w-1/3">
          <ul
            className="w-full flex flex-wrap justify-center lg:flex-col md:gap-4"
            role="listbox"
            aria-label={texts.text_color_options}
          >
            {colors.map((color) => (
              <li
                key={color.name}
                onClick={() => handleColorChange(color)}
                role="option"
                aria-selected={color.name === selectedColor.name}
                className={`cursor-pointer border md:border-2 py-2 px-4 md:rounded-lg flex flex-grow gap-4 transition-all duration-300 transform md:hover:scale-105 md:hover:shadow-lg ${
                  color.name === selectedColor.name
                    ? "border-[#076b61]"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={color.image}
                  alt={`${texts.text_available_color}: ${selectedColor.name}`}
                  className=" h-20 object-cover rounded-md"
                />
                <div className="flex flex-col gap-1 justify-center select-none">
                  <p>{`${frame} ${color.name}`}</p>
                  <p>{`${texts.text_color}: ${color.name}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

FrameColors.propTypes = {
  frame: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  texts: PropTypes.shape({
    text_selected_color: PropTypes.string.isRequired,
    text_available_color: PropTypes.string.isRequired,
    text_color_options: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
  }).isRequired,
};
