type HeroItemProps = {
	logo?: string
	title: string
	description: string
	href: string
	backImage: string
}

const HeroItem = ({ logo, title, description, href, backImage }: HeroItemProps) => {
	return (
		<article
			className="relative bg-cover bg-center text-white"
			style={{ backgroundImage: `url(${backImage})` }}
		>
			<div className="absolute inset-0 z-10 bg-black/40"></div>
			<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-transparent"></div>
			<div className="relative z-10 flex h-full flex-col justify-center gap-[50px] p-14">
				<header className="h-[50px] w-1/2">
					{logo ? <img src={logo} /> : <h3 className="text-5xl">{title}</h3>}
				</header>
				<div className="h-1 w-16 bg-blue-500"></div>
				<div className="h-full w-2/3">
					<p className="max-w-md text-lg leading-relaxed text-white/90">{description}</p>
				</div>
				<footer>
					<a
						href={href}
						className="group inline-flex w-fit items-center gap-2 rounded-xl bg-black/10 px-4 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-black/20"
					>
						<span className="text-sm font-medium tracking-wide">Saber más</span>
						<span className="transform transition-transform duration-300 group-hover:translate-x-1">
							→
						</span>
					</a>
				</footer>
			</div>
		</article>
	)
}

export { HeroItem }
