import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move the image to next slide, wrap arouund to 0, if at the end
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
  if (!images || images.length === 0) return <p>No images passed</p>;
  return (
    <>
      <button onClick={prevSlide}></button>
      <img src={images[currentIndex]} />
      <button onClick={nextSlide}></button>
    </>
  );
};

export default ImageSlider;
