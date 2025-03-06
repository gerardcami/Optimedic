import { HeroItem } from './hero-item'
import { getI18N } from '../../../i18n'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
	const i18n = getI18N({ currentLocale: 'es' })
	const heroItems = i18n.HOME_PAGE.HERO

	const handleScrollIndicatorClick = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		})
	}

	return (
		<section id="hero" className="relative">
			<div className="grid w-screen lg:h-screen lg:grid-cols-3">
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
			<div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 opacity-70 lg:block">
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
