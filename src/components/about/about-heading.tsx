import InfiniteScroll from '../ui/InfiniteScroll/InfiniteScroll'

const imageClass = 'pointer-events-none h-[200px] w-[300px] select-none rounded-lg object-cover'

const items = [
	{
		content: <img className={imageClass} src="/images/slides/slide1.svg" alt="Carousel slide 1" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide2.jpg" alt="Carousel slide 2" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide3.jpg" alt="Carousel slide 3" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide4.jpg" alt="Carousel slide 4" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide5.jpg" alt="Carousel slide 5" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide6.jpg" alt="Carousel slide 6" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide7.jpg" alt="Carousel slide 7" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide8.jpg" alt="Carousel slide 8" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide9.jpg" alt="Carousel slide 9" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide10.jpg" alt="Carousel slide 10" />
	},
	{
		content: <img className={imageClass} src="/images/slides/slide11.jpg" alt="Carousel slide 11" />
	}
]

const AboutHeading = () => {
	return (
		<section className="mt-[100px] flex w-full flex-col items-center justify-center gap-10 text-center md:px-10 lg:flex-row lg:gap-0">
			<div className="space-y-6 px-6 text-start">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
					Sobre Optimedic
				</h1>
				<p className="font-semibold text-zinc-500 md:text-lg lg:text-xl">
					Somos un equipo apasionado dedicado a aportar soluciones innovadoras que marcan la
					diferencia.
				</p>
				<div className="flex gap-4">
					<a
						href="#our-mission"
						className="bg group flex items-center rounded-lg border bg-zinc-800 px-8 py-3 text-white transition-colors hover:bg-zinc-800/80"
					>
						<span className="text-sm text-white">Nuestra Misión</span>
					</a>
					<a
						href="/contacto"
						className="group flex items-center rounded-lg border border-gray-300 px-8 py-3 transition-colors hover:bg-gray-200/80"
					>
						<span className="text-sm">Contáctanos</span>
					</a>
				</div>
			</div>
			<div className="relative col-span-2 h-[400px] w-full">
				<InfiniteScroll
					items={items}
					isTilted={true}
					tiltDirection="right"
					autoplay={true}
					autoplaySpeed={0.2}
					autoplayDirection="down"
					pauseOnHover={true}
				/>
			</div>
		</section>
	)
}

export { AboutHeading }
