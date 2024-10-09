import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  // Lista de idiomas con banderas
  const languages = [
    { code: "es", name: "Español", flag: "/images/es.png" },
    { code: "en", name: "English", flag: "/images/en.png" },
    { code: "ca", name: "Català", flag: "/images/ca.png" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    window.location.href = `/${code}`; // Redirige a la ruta correspondiente
  };

  return (
    <Popover className="relative inline-block text-left">
      <Popover.Button className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <div className="flex items-center">
          {languages.find((lang) => lang.code === selectedLanguage)?.name}
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
        <Popover.Panel className="absolute z-10 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((language) => {
              // Excluye el idioma seleccionado de la lista
              if (language.code === selectedLanguage) return null;
              return (
                <a
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {language.name}
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
