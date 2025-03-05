import { useEffect, useRef, useState } from 'react'
import { HeroItem } from './hero-item'
import { getI18N } from '../../../i18n'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
	const i18n = getI18N({ currentLocale: 'es' })
	const heroItems = i18n.HOME_PAGE.HERO

	const heroRef = useRef(null)

	const [scrollingDown, setScrollingDown] = useState(false)
	const [heroInView, setHeroInView] = useState(true) // Track if Hero is in view

	const handleScrollIndicatorClick = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		})
	}

	// Detecta la dirección del scroll (abajo o arriba)
	useEffect(() => {
		let lastScrollY = window.scrollY

		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				setScrollingDown(true) // Estamos bajando
			} else {
				setScrollingDown(false) // Estamos subiendo
			}
			lastScrollY = window.scrollY
		}

		window.addEventListener('scroll', handleScroll)

		// Limpiar el listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		// Configuramos IntersectionObserver para detectar la entrada y salida del Hero en la pantalla
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setHeroInView(true) // Hero en vista
					} else {
						setHeroInView(false) // Hero fuera de vista
					}
				})
			},
			{
				rootMargin: '0px' // Se activa justo cuando el Hero entra completamente en la pantalla
			}
		)

		if (heroRef.current) {
			observer.observe(heroRef.current)
		}

		// Limpiar el observer cuando el componente se desmonta
		return () => {
			observer.disconnect()
		}
	}, [])

	useEffect(() => {
		// Solo aplicamos el comportamiento del scroll cuando estamos en el Hero
		if (heroInView) {
			if (!scrollingDown && window.scrollY !== 0) {
				window.scrollTo({
					top: 0, // Desplazamos al inicio del Hero solo si está fuera de vista y estamos subiendo
					behavior: 'smooth'
				})
			} else if (scrollingDown && window.scrollY !== 0) {
				// Si estamos bajando y el Hero entra en la vista, movemos hacia abajo
				window.scrollTo({
					top: window.innerHeight, // Mueve la pantalla justo después del Hero
					behavior: 'smooth'
				})
			}
		} else {
			if (scrollingDown && window.scrollY === window.innerHeight) {
				// Cuando estamos bajando y estamos al final del Hero, movemos el scroll hasta el final de la página
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: 'smooth'
				})
			} else if (!scrollingDown && window.scrollY === 0) {
				// Cuando estamos subiendo y estamos en la parte superior, movemos el scroll hasta el inicio
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			}
		}
	}, [scrollingDown, heroInView])

	return (
		<section ref={heroRef} id="hero" className="relative">
			<div className="grid h-screen w-screen grid-cols-3">
				{heroItems.map(({ logo, title, description, href, backImage }) => (
					<HeroItem
						key={title}
						logo={logo}
						title={title}
						description={description}
						href={href}
						backImage={backImage}
					/>
				))}
			</div>
			<div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-70">
				<div className="flex animate-bounce flex-col items-center">
					<span className="mb-2 text-sm text-white opacity-80">Desliza para descubrir más</span>
					<button
						onClick={handleScrollIndicatorClick}
						className="cursor-pointer rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30"
					>
						<ChevronDown className="size-6 text-white" />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
