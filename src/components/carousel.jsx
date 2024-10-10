import { useState, useEffect, useRef } from "react";
import { Slides } from "../services/carousel";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Slides;
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const carouselRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetInterval();
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent dragging of the image
    startX.current = e.clientX;
    isDragging.current = true;
    carouselRef.current.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const distance = startX.current - e.clientX;
    if (distance > 50) {
      handleNextClick();
      isDragging.current = false;
    } else if (distance < -50) {
      handlePrevClick();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "default"; // Reset cursor
  };

  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent dragging of the image
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    carouselRef.current.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const distance = startX.current - e.touches[0].clientX;
    if (distance > 50) {
      handleNextClick();
      isDragging.current = false;
    } else if (distance < -50) {
      handlePrevClick();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "default"; // Reset cursor
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  return (
    <section
      ref={carouselRef} // Set ref to the carousel
      className="relative w-full md:w-[90%]"
      data-carousel="slide"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-[350px] overflow-hidden md:rounded-lg md:h-[400px] lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={slide.image}
              className="block w-full h-full object-cover"
              alt={`Slide ${slide.id}`}
              draggable="false"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      <div className="absolute bottom-0 w-full flex justify-center space-x-2 p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-[#076B61] w-[45px]" : "bg-gray-300"
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
