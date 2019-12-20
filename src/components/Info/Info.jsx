import React from "react";
import { getMaxSalesPercent } from "../../utils/helper";
import "./Info.scss";

export default function Info({ link, name, priceRange }) {
  return (
    <section className="info">
      <h1 className="name">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name.replace(/&amp;/g, "&")}
        </a>
      </h1>
      <div className="price-wrapper flex">
        <div
          className={`regular ${priceRange.type === "special" &&
            "breakthrough"}`}
        >
          <span className="low">${priceRange.regular.low}</span>
          <span className="dash">–</span>
          <span className="high">${priceRange.regular.high}</span>
        </div>
        {priceRange.type === "special" && (
          <div className="special">
            <span className="offer-decription">Limited Time Offer</span>
            <span className="low">${priceRange.selling.low}</span>
            <span className="dash">-</span>
            <span className="high">${priceRange.selling.high}</span>
          </div>
        )}
        <div className="sales-amount">
          Up to
          <span>
            {" "}
            {getMaxSalesPercent(
              priceRange.regular.high,
              priceRange.regular.low,
              priceRange.selling.high,
              priceRange.selling.low
            )}
            %{" "}
          </span>
          off!
        </div>
      </div>
    </section>
  );
}
