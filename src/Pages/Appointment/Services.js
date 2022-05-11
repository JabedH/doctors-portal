import React from "react";

const Services = ({ service, setTreatment }) => {
  const { slots, name, id } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
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
          <div class="card-actions justify-center">
            <label
              for="booking-modal"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              class="btn btn-secondary text-white uppercase"
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
