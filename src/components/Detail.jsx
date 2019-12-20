import React from "react";
import Info from "./Info/Info";
import Image from "./Image/Image";
import Review from "./Review/Review";
import "./Detail.scss";

export default function Detail({ path, data, openCarouselModal, index }) {
  const id = path.id;
  const item = data.filter(eachData => eachData.id === id)[0];

  return (
    <div className="detail-wrapper">
      <div className="info-part flex">
        <Image
          hero={item.hero}
          images={item.images}
          openCarouselModal={openCarouselModal}
          index={index}
        />
        <Info
          link={item.links.www}
          name={item.name}
          priceRange={item.priceRange}
        />
      </div>
      <Review reviews={item.reviews} />
    </div>
  );
}
