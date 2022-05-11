import React from "react";

const ServicesCard = ({ img, serviceTitle }) => {
  return (
    <div className="card  glass">
      <figure>
        <img className="pt-5" src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">{serviceTitle}</h2>
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
