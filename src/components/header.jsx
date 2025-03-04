import { useState, useEffect } from 'react'
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
	Transition
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import LanguageDropdown from './language-dropdown'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header({ i18n, isHome = false }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [navItems, setNavItems] = useState([])
	const [products, setProducts] = useState([])
	const [scrolled, setScrolled] = useState(false)

	const [heroVisible, setHeroVisible] = useState(true)

	useEffect(() => {
		async function fetchNavContent() {
			setNavItems(i18n.HEADER.NAV_ITEMS)
			setProducts(i18n.HOME_PAGE.PRODUCTS)
		}

		fetchNavContent()

		const handleScroll = () => {
			// Cambiar el estado de "scrolled" cuando se haga scroll
			setScrolled(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		// Observador de intersección para Hero
		const hero = document.getElementById('hero')
		if (hero) {
			const observer = new IntersectionObserver(
				(entries) => {
					const isHeroVisible = entries[0].isIntersecting
					setHeroVisible(isHeroVisible)
				},
				{ threshold: 0.1 }
			) // Cambiar el umbral para asegurar que se active rápidamente
			observer.observe(hero)

			return () => observer.disconnect()
		}

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		// Reseteamos el estado de "scrolled" cuando Hero es visible
		if (heroVisible) {
			setScrolled(false)
		}
	}, [heroVisible])

	return (
		<header
			className={`fixed inset-x-0 top-0 z-30 transform transition-all ease-in-out ${heroVisible && isHome ? 'hidden' : ''} ${scrolled ? 'translate-y-0 bg-white/70 shadow-sm backdrop-blur-md' : 'translate-y-0 bg-transparent'}`}
		>
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-4 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href={i18n.HEADER.HOME_LINK}>
						<img className="h-8 w-auto" src="/Imagotip Blanc.jpg" alt="Optimedic logo" />
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
							<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
						</PopoverButton>

						<Transition
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute -left-8 top-full z-10 mt-3 max-h-[calc(100vh-90px)] w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="max-h-[calc(100vh-90px)] overflow-auto">
									<div className="overflow-auto p-4">
										{products.map((product) => (
											<div className="flex flex-col items-center" key={product.name}>
												<div className="mb-1 flex text-sm font-semibold leading-6 text-gray-900">
													{product.name}
												</div>
												<hr className="mb-1 w-[20%] border-gray-900" />
												{product.subcategories.map((subcategory) => (
													<div
														key={subcategory.name}
														className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
													>
														<div className="flex-auto">
															<a
																href={subcategory.href}
																className="block font-semibold text-gray-900"
															>
																{subcategory.name}
																<span className="absolute inset-0" />
															</a>
															<p className="mt-1 text-gray-600">{subcategory.description}</p>
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
						<a key={item.name} href={item.href} className="text-sm font-semibold leading-6">
							{item.name}
						</a>
					))}
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<LanguageDropdown />
				</div>
			</nav>
			<Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<DialogPanel
					className="fixed inset-y-0 right-0 z-30 w-full translate-x-0 transform overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-lg transition-all duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
					style={{
						backdropFilter: 'blur(5px)', // Efecto de desenfoque en el fondo
						backgroundColor: 'rgba(255, 255, 255, 0.95)' // Fondo con un poco de transparencia
					}}
				>
					<div className="mb-4 flex items-center justify-between">
						<div className="lg:hidden">
							<LanguageDropdown />
						</div>
						<button
							type="button"
							className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition duration-200 hover:bg-gray-300"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
						</button>
					</div>

					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-300/10">
							<div className="flex flex-col gap-4 py-6">
								<Disclosure as="div">
									{({ open }) => (
										<>
											<DisclosureButton className="mt-3 flex w-full items-center justify-between rounded-lg py-2 pl-4 pr-4 text-base font-semibold leading-7 text-gray-900 transition duration-200 hover:bg-gray-100">
												{navItems.length > 0 && navItems[0].name}
												<ChevronDownIcon
													className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
													aria-hidden="true"
												/>
											</DisclosureButton>
											<DisclosurePanel className="mt-2 space-y-2">
												{products.map((product) => (
													<div className="flex flex-col items-start" key={product.name}>
														<div className="mb-1 ml-4 flex text-sm font-semibold leading-6 text-gray-900">
															{product.name}
														</div>
														<hr className="mb-1 ml-4 w-[10%] border-gray-900" />
														{product.subcategories.map((subcategory) => (
															<DisclosureButton
																key={subcategory.name}
																as="a"
																href={subcategory.href}
																className="block w-full rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-gray-900 transition duration-200 hover:bg-gray-100"
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
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
