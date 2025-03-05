import { Sparkles, Award, HeartHandshake, Headset } from 'lucide-react'

const icons = [Sparkles, Award, HeartHandshake, Headset]

type FeatureItemProps = {
	title: string
	description: string
	iconIndex: number
	color: string
}

const FeatureItem = ({ title, description, iconIndex, color }: FeatureItemProps) => {
	const parseHtml = (htmlString: string): React.ReactNode => {
		return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
	}

	const IconComponent = icons[iconIndex]

	return (
		<div className="flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
			<div
				className="mb-4 flex h-12 w-12 items-center justify-center rounded-full p-2"
				style={{
					backgroundColor: `${color}${Math.round(0.2 * 255)
						.toString(16)
						.padStart(2, '0')}`
				}}
			>
				{IconComponent && <IconComponent size={24} color={color} />} {/* Color azul oscuro */}
			</div>
			<h3 className="mb-2 text-xl font-bold text-zinc-900">{title}</h3>
			<p className="text-zinc-500">{description}</p>
		</div>
	)
}

export { FeatureItem }
