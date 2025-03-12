import { Step } from './step'

type RenuvionStepProps = {
	content: {
		step: number
		title: string
		description: string
	}[]
}

const RenuvionSteps = ({ content }: RenuvionStepProps) => {
	return (
		<section className="max-w-[700px] lg:max-w-[1200px] lg:px-6 xl:px-0">
			<h1 className="sr-only">Pasos renuvion</h1>
			<div className="grid grid-cols-1 gap-4 px-6 lg:grid-cols-3 lg:px-0">
				{content.map(({ step, title, description }) => (
					<Step key={step} step={step} title={title} description={description} />
				))}
			</div>
		</section>
	)
}

export { RenuvionSteps }
