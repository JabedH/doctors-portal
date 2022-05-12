import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, _id, name);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            {" "}
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid gap-3 justify-items-center mt-2"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot} </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Type name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Type email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="number"
              placeholder="Type Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
