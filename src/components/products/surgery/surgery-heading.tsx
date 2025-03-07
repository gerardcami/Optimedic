import { LucideEarth, LucideFileText } from 'lucide-react'

type SurgeryHeadingProps = {
	content: {
		logo?: string
		title: string
		description: string
		href?: string
		catalog: string
		poster: string
	}
}

const SurgeryHeading = ({
	content: { logo, title, description, href, catalog, poster }
}: SurgeryHeadingProps) => {
	return (
		<section className="grid grid-cols-1 gap-6 px-6 md:gap-10 md:px-20 lg:mt-40 lg:grid-cols-2 lg:gap-20">
			<div className="items-star flex flex-col justify-between gap-6 md:items-center md:gap-10 lg:items-start lg:gap-0">
				<div>
					{logo ? (
						<>
							<img src={logo} alt={title} className="mx-auto h-16 md:h-20 lg:mx-0" />
							<h1 className="sr-only">{title}</h1>
						</>
					) : (
						<h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">{title}</h1>
					)}
				</div>

				<p className="text-gray-500 md:text-center md:text-base lg:max-w-[500px] lg:text-left lg:text-xl">
					{description}
				</p>

				<div className="flex flex-col gap-2 md:flex-row lg:flex-col">
					{href && (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-fit items-center rounded-full border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-200"
						>
							<LucideEarth className="size-4 md:size-5" />
							<span className="ml-2 text-sm md:text-base">Visita la web</span>
						</a>
					)}

					<a
						href={catalog}
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-fit items-center rounded-full border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-200"
					>
						<LucideFileText className="size-4 md:size-5" />
						<span className="ml-2 text-sm md:text-base">Catálogo</span>
					</a>
				</div>
			</div>

			<div className="flex flex-col items-start gap-4">
				<img
					src={poster}
					alt={`${title} poster`}
					className="aspect-square h-[300px] w-full rounded-xl object-cover object-center md:h-[500px]"
				/>
			</div>
		</section>
	)
}

export { SurgeryHeading }
