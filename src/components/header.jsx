import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import LanguageDropdown from "./LanguageDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ i18n }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchNavContent() {
      setNavItems(i18n.HEADER.NAV_ITEMS);
      setProducts(i18n.HOME_PAGE.PRODUCTS);
    }

    fetchNavContent();

    const handleScroll = () => {
      // El header se vuelve opaco tan pronto como se detecta cualquier desplazamiento
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Inicializa el estado del desplazamiento basado en la posición de la página al cargar
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        "fixed inset-x-0 top-0 z-30 transition-colors duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href={i18n.HEADER.HOME_LINK}>
            <img
              className="h-8 w-auto"
              src="/Imagotip Blanc.jpg"
              alt="Optimedic logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              {navItems.length > 0 && navItems[0].name}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 overflow-hidden max-h-[calc(100vh-90px)]">
                <div className="overflow-auto max-h-[calc(100vh-90px)]">
                  <div className="p-4 overflow-auto">
                    {products.map((product) => (
                      <div
                        className="flex flex-col items-center"
                        key={product.name}
                      >
                        <div className="flex text-sm font-semibold leading-6 text-gray-900 mb-1">
                          {product.name}
                        </div>
                        <hr className="w-[20%] border-gray-900 mb-1" />
                        {product.subcategories.map((subcategory) => (
                          <div
                            key={subcategory.name}
                            className="group w-full relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex-auto">
                              <a
                                href={subcategory.href}
                                className="block font-semibold text-gray-900"
                              >
                                {subcategory.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {subcategory.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          {navItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageDropdown />
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogPanel
          className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform translate-x-0"
          style={{
            backdropFilter: "blur(5px)", // Efecto de desenfoque en el fondo
            backgroundColor: "rgba(255, 255, 255, 0.95)", // Fondo con un poco de transparencia
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="lg:hidden">
              <LanguageDropdown />
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300/10">
              <div className="gap-4 py-6 flex flex-col">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg mt-3 py-2 pl-4 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition duration-200">
                        {navItems.length > 0 && navItems[0].name}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {products.map((product) => (
                          <div
                            className="flex flex-col items-start"
                            key={product.name}
                          >
                            <div className="flex mb-1 ml-4 text-sm font-semibold leading-6 text-gray-900">
                              {product.name}
                            </div>
                            <hr className="w-[10%] ml-4 border-gray-900 mb-1" />
                            {product.subcategories.map((subcategory) => (
                              <DisclosureButton
                                key={subcategory.name}
                                as="a"
                                href={subcategory.href}
                                className="block w-full rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-200"
                              >
                                {subcategory.name}
                              </DisclosureButton>
                            ))}
                          </div>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* Render other navigation items */}
                <div className="flex flex-col gap-4">
                  {navItems.slice(1).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-start rounded-lg py-3 pl-4 pr-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
