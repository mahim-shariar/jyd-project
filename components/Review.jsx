import React from "react";
import "../style/Banner.css";
import { MdOutlineReviews } from "react-icons/md";

const Review = () => {
  return (
    <div className="image-bg-2 my-12" id="reviews">
      <div className="overlay">
        <div>
          <h1 className="text-lg text-[#00dbdb]  font-thin text-center">
            {" "}
            TESTIMONIALS
          </h1>
          <h1
            className="text-6xl py-4 text-white font-extrabold text-center"
            style={{ lineHeight: "66px" }}
          >
            WHAT CLIENT SAYS
          </h1>

          <div className="grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="review-card">
              <p className="review-text">
                "This is one of the best products I have ever used! The
                attention to detail and the quality exceeded my expectations."
              </p>
              <div className="review-footer">
                <span className="reviewer-name">- John Doe</span>
                <MdOutlineReviews className="review-icon" />
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "This is one of the best products I have ever used! The
                attention to detail and the quality exceeded my expectations."
              </p>
              <div className="review-footer">
                <span className="reviewer-name">- John Doe</span>
                <MdOutlineReviews className="review-icon" />
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                "This is one of the best products I have ever used! The
                attention to detail and the quality exceeded my expectations."
              </p>
              <div className="review-footer">
                <span className="reviewer-name">- John Doe</span>
                <MdOutlineReviews className="review-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
