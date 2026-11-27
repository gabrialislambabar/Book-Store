import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move the image to next slide, wrap around to 0, if at the end
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Move to previous slide, wrap around to end if at zero
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // If no image is passed
  if (!images || images.length === 0)
    return <p className="text-center text-gray-500">No images passed</p>;

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white">
      <img
        src={images[currentIndex]}
        alt="slide"
        className="h-64 w-full object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-gray-700 shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-gray-700 shadow hover:bg-white"
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
