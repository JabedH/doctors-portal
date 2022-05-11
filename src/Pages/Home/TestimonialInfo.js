import React from "react";

const TestimonialInfo = ({ review }) => {
  console.log(review);
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.info}</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} />
              </div>
            </div>
            <div>
              <h2 className="card-title">{review.name}</h2>
              <p className="card-title">{review.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialInfo;
