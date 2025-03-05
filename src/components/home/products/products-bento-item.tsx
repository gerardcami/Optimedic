import { useState } from 'react'

type ProductCategorieProps = {
	name: string
	description: string
	href: string
}

type ProductsBentoItemProps = {
	itemIndex: number
	backImage: string
	title: string
	description: string
	productCategories: ProductCategorieProps[]
}

const ProductsBentoItem = ({
	itemIndex,
	backImage,
	title,
	description,
	productCategories
}: ProductsBentoItemProps) => {
	const [hoveredCard, setHoveredCard] = useState<string | null>(null)

	const gridClasses =
		itemIndex === 0 ? 'row-span-2 col-span-1 md:col-span-2 lg:col-span-2' : 'row-span-1 col-span-1'

	return (
		<div
			className={``}
			style={{ backgroundImage: backImage }}
			onMouseEnter={() => setHoveredCard('loupes')}
			onMouseLeave={() => setHoveredCard(null)}
			onFocus={() => setHoveredCard('loupes')}
			onBlur={() => setHoveredCard(null)}
			tabIndex={0}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
				<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
					<h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">{title}</h3>
					<p className="mb-4 max-w-xl text-white/80">{description}</p>

					{/* Product subcategories on hover */}
					<div
						className={`flex flex-wrap gap-3 transition-all duration-300 ${
							hoveredCard === 'loupes'
								? 'translate-y-0 opacity-100'
								: 'pointer-events-none translate-y-4 opacity-0'
						}`}
					>
						{productCategories.map((product, index) => (
							<a
								key={index}
								href={product.href}
								className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
							>
								{product.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export { ProductsBentoItem }
