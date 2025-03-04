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
			<div className="absolute h-full w-full bg-black/40" />
			<div className="relative z-10 flex h-full flex-col justify-center gap-[50px] p-12">
				<header className="h-[50px] w-1/2">
					{logo ? <img src={logo} /> : <h3 className="text-5xl">{title}</h3>}
				</header>
				<div className="h-[70%] w-2/3">
					<p className="text-xl">{description}</p>
				</div>
				<footer>
					<a
						href={href}
						className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
					>
						Learn more →
					</a>
				</footer>
			</div>
		</article>
	)
}

export { HeroItem }
