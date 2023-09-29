import React, { useState } from "react";
import "./ImageSlider.css"; // Import the CSS file for styling

const ImageSlider = ({ images, imageTexts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  console.log("IIiiiiiiimages", images);

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider" style={{ marginLeft: "-90px" }}>
      <div className="image-slider__slide-container">
        <div
          className="image-slider__slide image-slider__prev-slide"
          style={{
            backgroundImage: `url(${
              images[(currentImageIndex - 1 + images.length) % images.length]
            })`,
          }}
        ></div>
        <div
          className="image-slider__slide image-slider__current-slide"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <div className="image-text-overlay">
            {/* {imageTexts[currentImageIndex]} */}
          </div>
        </div>
        <div
          className="image-slider__slide image-slider__next-slide"
          style={{
            backgroundImage: `url(${
              images[(currentImageIndex + 1) % images.length]
            })`,
          }}
        ></div>
      </div>
      <button className="image-slider__prev-button" onClick={goToPreviousImage}>
        &lt;
      </button>
      <button className="image-slider__next-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
