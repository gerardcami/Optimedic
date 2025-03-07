import { LucideArrowRight } from 'lucide-react'

type ProductCardProps = {
	path: string
	slug: string
	image: string
	name: string
	description: string
	magnification?: string
}

const ProductCard = ({ path, slug, image, name, description, magnification }: ProductCardProps) => {
	return (
		<a key={name} href={`${path}${slug}`} className="block h-full">
			<div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:border-[#076b61] hover:shadow-md">
				<div className="relative min-h-[200px] w-full">
					<img src={image} alt={`Product: ${name}`} className="h-full w-full object-cover" />
					<div className="absolute inset-0 h-full w-full bg-gray-600/10" />
				</div>

				<div className="flex h-full flex-col border-t-2 border-[#076b61] p-4">
					<div className="mb-2 flex items-start justify-between">
						<h3 className="line-clamp-1 text-base font-semibold text-gray-900">{name}</h3>
						<LucideArrowRight className="ml-1 size-4 flex-shrink-0 text-[#076b61] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					</div>
					<p className="mb-3 h-full text-sm leading-relaxed text-gray-600">{description}</p>
					<div>
						<span className="text-xs font-medium text-[#076b61]">{magnification}</span>
					</div>
				</div>
			</div>
		</a>
	)
}

export { ProductCard }
