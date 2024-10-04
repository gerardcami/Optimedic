import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function FrameColors({ frame, colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isFading, setIsFading] = useState(false);

  // Controla la animación de fading cuando cambia el color seleccionado.
  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setIsFading(false);
      }, 300);

      return () => clearTimeout(timer); // Limpia el temporizador al desmontar o cambiar de color
    }
  }, [isFading]);

  const handleColorChange = (color) => {
    if (color.name !== selectedColor.name) {
      setIsFading(true);
      setSelectedColor(color);
    }
  };

  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Opciones de color</h2>
      <div className="flex justify-evenly items-center">
        <div className="shadow-xl rounded-lg">
          <img
            src={selectedColor.image}
            alt={`Color seleccionado: ${selectedColor.name}`}
            className={`w-full object-fill rounded-lg transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="flex gap-4">
          <ul className="flex flex-col gap-4">
            {colors.map((color) => (
              <li
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`cursor-pointer border-2 p-2 rounded-lg flex gap-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  color.name === selectedColor.name
                    ? "border-[#076b61]"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={color.image}
                  alt={color.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col gap-1 justify-center">
                  <p>{frame + " " + color.name}</p>
                  <p>Color: {color.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
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
};
