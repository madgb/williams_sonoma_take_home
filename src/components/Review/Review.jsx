import React from "react";
import "./Review.scss";

export default function Review({ reviews }) {
  return (
    <section className="review-section">
      <div className="inner flex">
        <div className="recommend-count">
          <span className="recommends">Recommends</span>
          <span className="value">{reviews.recommendationCount}</span>
        </div>
        <div className="like">
          <span className="likes">Likes</span>
          <span className="value">{reviews.likelihood}</span>
        </div>
        <div className="review-count">
          <span className="reviews">Reviews</span>
          <span className="value">{reviews.reviewCount}</span>
        </div>
        <div className="rating">
          <span className="rates">Rates</span>
          <span className="value">{reviews.averageRating}</span>
        </div>
      </div>
    </section>
  );
}
