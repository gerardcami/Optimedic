type StepProps = {
	step: number
	title: string
	description: string
}

const Step = ({ step, title, description }: StepProps) => {
	return (
		<article className="bg-card text-card-foreground relative flex flex-col items-center justify-between gap-6 rounded-lg border p-6 shadow-sm lg:gap-10">
			<header className="flex flex-col gap-6 md:items-center lg:gap-10">
				<div className="flex size-16 items-center justify-center rounded-full bg-[#173d6e] font-extrabold shadow-md md:size-20">
					<span className="text-3xl text-white">{step}</span>
				</div>
				<h2 className="text-3xl font-bold tracking-tighter md:text-center lg:min-h-20 lg:text-4xl">
					{title}
				</h2>
			</header>
			<p className="h-full text-gray-500">{description}</p>
		</article>
	)
}

export { Step }
