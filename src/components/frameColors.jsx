import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function FrameColors({ frame, colors, texts }) {
	const [selectedColor, setSelectedColor] = useState(colors[0])
	const [isFadingOut, setIsFadingOut] = useState(false)

	const handleColorChange = (color) => {
		if (color.name !== selectedColor.name) {
			setIsFadingOut(true)

			setTimeout(() => {
				setSelectedColor(color)
				setIsFadingOut(false)
			}, 300)
		}
	}

	return (
		<section className="mt-[100px] flex w-full flex-col md:mt-0 md:gap-8 md:px-12">
			<h2 className="mb-8 text-center text-3xl font-bold lg:text-start">
				{texts.text_color_options}
			</h2>
			<div className="flex w-full flex-col md:gap-10 lg:flex-row">
				<div className="flex w-full items-center justify-center rounded-lg md:shadow-2xl lg:w-2/3">
					<img
						src={selectedColor.image}
						alt={`${texts.text_selected_color}: ${selectedColor.name}`}
						className={`rounded-lg object-fill transition-opacity duration-300 ${
							isFadingOut ? 'opacity-0' : 'opacity-100'
						}`}
					/>
				</div>

				<div className="lg:w-1/3">
					<ul
						className="flex w-full flex-wrap justify-center md:gap-4 lg:flex-col"
						role="listbox"
						aria-label={texts.text_color_options}
					>
						{colors.map((color) => (
							<li
								key={color.name}
								onClick={() => handleColorChange(color)}
								role="option"
								aria-selected={color.name === selectedColor.name}
								className={`flex flex-grow transform cursor-pointer gap-4 border px-4 py-2 transition-all duration-300 md:rounded-lg md:border-2 md:hover:scale-105 md:hover:shadow-lg ${
									color.name === selectedColor.name ? 'border-[#076b61]' : 'border-gray-300'
								}`}
							>
								<img
									src={color.image}
									alt={`${texts.text_available_color}: ${selectedColor.name}`}
									className="h-20 rounded-md object-cover"
								/>
								<div className="flex select-none flex-col justify-center gap-1">
									<p>{`${frame} ${color.name}`}</p>
									<p>{`${texts.text_color}: ${color.name}`}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

FrameColors.propTypes = {
	frame: PropTypes.string.isRequired,
	colors: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired
		})
	).isRequired,
	texts: PropTypes.shape({
		text_selected_color: PropTypes.string.isRequired,
		text_available_color: PropTypes.string.isRequired,
		text_color_options: PropTypes.string.isRequired,
		text_color: PropTypes.string.isRequired
	}).isRequired
}
