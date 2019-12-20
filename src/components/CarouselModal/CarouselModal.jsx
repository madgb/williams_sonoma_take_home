import React from "react";
import "./CarouselModal.scss";

export default function CarouselModal({
  closeCarouselModal,
  carouselImgArray,
  currModalHeroIndex,
  setcurrModalHeroIndex
}) {
  return (
    <div className="carousel-modal">
      <div className="close">
        <button onClick={closeCarouselModal}>x</button>
      </div>
      <div className="hero">
        <img
          src={carouselImgArray[currModalHeroIndex].href}
          alt={carouselImgArray[currModalHeroIndex].alt}
        />
      </div>
      <div className="list flex">
        {carouselImgArray.map((img, index) => (
          <div
            className="carousel-list"
            key={index}
            onClick={() => setcurrModalHeroIndex(index)}
          >
            <img src={img.href} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
