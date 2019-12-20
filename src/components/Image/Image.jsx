import React from "react";
import "./Image.scss";

export default function Image({ hero, images, openCarouselModal, index }) {
  return (
    <section className="image-wrapper">
      <div className="hero" onClick={() => openCarouselModal(index)}>
        <img src={hero.href} alt={hero.alt} />
      </div>
      <div className="images flex">
        {images.map((image, idx) => (
          <div
            className="each-thumbnail-wrapper"
            key={idx}
            onClick={() => openCarouselModal(index)}
          >
            <img src={image.href} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
