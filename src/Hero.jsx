import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(1);
  const totalImages = 3;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 1 ? totalImages : prevIndex - 1));
  };

  const handleNextImage = () => {
    setImageIndex((nextIndex) => (nextIndex === totalImages ? 1 : nextIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc = windowWidth >= 768 ? `/images/desktop-image-hero-${imageIndex}.jpg` : `/images/mobile-image-hero-${imageIndex}.jpg`;

  return (
    <div className="pt-11 -mb-10 relative row-start-1 row-end-3 col-start-1 col-end-3 lg:-mb-[7.15em]">
      <Navigation />
      <img src={imageSrc} alt="Furniture" className="-translate-y-28 w-full " />
      <AngleButton onPrevClick={handlePrevImage} onNextClick={handleNextImage} />
    </div>
  );
}

const AngleButton = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="absolute bottom-[7em] right-0 lg:-right-[8.3em] lg:bottom-[7.05em]">
      <button className="bg-black p-6 hover:opacity-80" onClick={onPrevClick}>
        <img src="/images/icon-angle-left.svg" alt="Angle left arrow" />
      </button>
      <button className="bg-black p-6 hover:opacity-80" onClick={onNextClick}>
        <img src="/images/icon-angle-right.svg" alt="Angle right arrow" />
      </button>
    </div>
  );
};
