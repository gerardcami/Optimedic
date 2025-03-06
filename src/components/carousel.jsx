import { useState, useEffect, useRef } from 'react'
import { Slides } from '../services/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = Slides
	const intervalRef = useRef(null)
	const startX = useRef(0)
	const isDragging = useRef(false)
	const carouselRef = useRef(null)

	const startAutoSlide = () => {
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
		}, 5000)
	}

	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		startAutoSlide()
	}

	const handleIndicatorClick = (index) => {
		setCurrentSlide(index)
		resetInterval()
	}

	const handlePrevClick = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
		resetInterval()
	}

	const handleNextClick = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
		resetInterval()
	}

	const handleMouseDown = (e) => {
		e.preventDefault() // Prevent dragging of the image
		startX.current = e.clientX
		isDragging.current = true
		carouselRef.current.style.cursor = 'grabbing' // Change cursor to grabbing
	}

	const handleMouseMove = (e) => {
		if (!isDragging.current) return
		const distance = startX.current - e.clientX
		if (distance > 50) {
			handleNextClick()
			isDragging.current = false
		} else if (distance < -50) {
			handlePrevClick()
			isDragging.current = false
		}
	}

	const handleMouseUp = () => {
		isDragging.current = false
		carouselRef.current.style.cursor = 'default' // Reset cursor
	}

	const handleTouchStart = (e) => {
		e.preventDefault() // Prevent dragging of the image
		startX.current = e.touches[0].clientX
		isDragging.current = true
		carouselRef.current.style.cursor = 'grabbing' // Change cursor to grabbing
	}

	const handleTouchMove = (e) => {
		if (!isDragging.current) return
		const distance = startX.current - e.touches[0].clientX
		if (distance > 50) {
			handleNextClick()
			isDragging.current = false
		} else if (distance < -50) {
			handlePrevClick()
			isDragging.current = false
		}
	}

	const handleTouchEnd = () => {
		isDragging.current = false
		carouselRef.current.style.cursor = 'default' // Reset cursor
	}

	useEffect(() => {
		startAutoSlide()
		return () => clearInterval(intervalRef.current) // Clear interval on component unmount
	}, [])

	return (
		<section
			ref={carouselRef} // Set ref to the carousel
			className="relative w-full"
			data-carousel="slide"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div className="relative h-[400px] overflow-hidden md:rounded-md">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? 'opacity-100' : 'opacity-0'
						}`}
						data-carousel-item
					>
						<img
							src={slide.image}
							className="block h-full w-full object-cover"
							alt={`Slide ${slide.id}`}
							draggable="false"
						/>
					</div>
				))}
			</div>

			<button
				type="button"
				className="group absolute left-0 top-0 z-10 flex h-full cursor-pointer items-center justify-center px-4"
				data-carousel-prev
				onClick={handlePrevClick}
			>
				<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 hover:bg-white/80">
					<ChevronLeft />
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="group absolute right-0 top-0 z-10 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
				data-carousel-next
				onClick={handleNextClick}
			>
				<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 hover:bg-white/80">
					<ChevronRight />
					<span className="sr-only">Next</span>
				</span>
			</button>

			<div className="absolute bottom-0 flex w-full justify-center space-x-2 p-2">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`h-1 w-8 rounded-full transition-all duration-500 ${
							index === currentSlide ? 'w-[45px] bg-[#076B61]' : 'bg-gray-300'
						}`}
						onClick={() => handleIndicatorClick(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	)
}
