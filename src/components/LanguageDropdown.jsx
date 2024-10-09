import React, { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  // Lista de idiomas con banderas
  const languages = [
    {
      code: "es",
      svg: "/flags/es.svg", // Cambia la ruta si es necesario
    },
    {
      code: "en",
      svg: "/flags/en.svg", // Cambia la ruta si es necesario
    },
  ];

  // Sincroniza el idioma seleccionado con la URL
  useEffect(() => {
    const currentLanguage = window.location.pathname.split("/")[1];
    if (languages.some((lang) => lang.code === currentLanguage)) {
      setSelectedLanguage(currentLanguage);
    }
  }, []);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    if (code === "es") {
      window.location.href = "/"; // Redirige a la ruta "/"
    } else {
      window.location.href = `/${code}`; // Redirige a la ruta correspondiente
    }
  };

  return (
    <Popover className="relative inline-block text-left">
      <Popover.Button className="inline-flex w-24 justify-between rounded-md px-4 py-2 text-sm font-medium border text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
        <div className="flex items-center">
          <img
            src={languages.find((lang) => lang.code === selectedLanguage)?.svg}
            alt={`Flag of ${selectedLanguage}`}
            className="h-5 w-5 mr-2"
          />
          {selectedLanguage.toUpperCase()}
        </div>
        <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((language) => {
              // Excluye el idioma seleccionado de la lista
              if (language.code === selectedLanguage) return null;
              return (
                <a
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={language.svg}
                    alt={`Flag of ${language.code}`}
                    className="h-5 w-5 mr-2"
                  />
                  {language.code.toUpperCase()}
                </a>
              );
            })}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default LanguageDropdown;
