type HeroItemProps = {
	logo?: string
	title: string
	description: string
	href: string
	backImage: string
}

const HeroItem = ({ logo, title, description, href, backImage }: HeroItemProps) => {
	return (
		<article>
			<h3>{title}</h3>
		</article>
	)
}

export { HeroItem }
