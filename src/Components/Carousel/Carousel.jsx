import React, { useState } from "react";

const images = [
  {
    url: "https://i.ytimg.com/vi/uFQbSJnVZLw/maxresdefault.jpg",
    alt: "padutha theeyaga competetion",
  },
  {
    url: "https://i.ytimg.com/vi/6LuGt_0_7fg/maxresdefault.jpg",
    alt: "children singing",
  },
  {
    url: "https://i.ytimg.com/vi/EAZ3uDJAt-g/maxresdefault.jpg",
    alt: "singing competition",
  },
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const renderCarouselItem = (image, index) => (
    <div
      key={index}
      className={`carousel-item ${index === currentImage ? "active" : ""}`}
    >
      <img
        loading="lazy"
        src={image.url}
        alt={image.alt}
        className="img-fluid d-block w-100"
        style={{ height: "450px" }}
      />
    </div>
  );

  return (
    <div className="carousel slide contain" data-bs-ride="carousel">
      <div className="carousel-inner">{images.map(renderCarouselItem)}</div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
