import React from "react";

const Services = ({ service, setTreatment }) => {
  const { slots, name, id, price } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"}
          </p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              className="btn btn-secondary text-white uppercase"
            >
              Book Appointment.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
