import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialInfo from "./TestimonialInfo";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      country: "California",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      country: "California",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      country: "California",
      info: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div className="my-20">
      <div className="flex justify-between ">
        <div>
          <div>
            <h4 className="text-xl text-primary font-bold text-left">
              Testimonial
            </h4>
            <h2 className="text-3xl">What Our Patients Says</h2>
          </div>
        </div>
        <div>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <TestimonialInfo key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
