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
    return (
      <p className="py-12 text-center text-sm text-[#6e6e73]">
        No images passed
      </p>
    );

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#1d1d1f]">
      <img
        src={images[currentIndex]}
        alt="slide"
        className="h-72 w-full object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white backdrop-blur transition hover:bg-white/30"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white backdrop-blur transition hover:bg-white/30"
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
