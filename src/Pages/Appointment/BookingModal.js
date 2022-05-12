import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user] = useAuthState(auth);
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
            htmlFor="booking-modal"
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
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}{" "}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName ? user?.displayName : "New user"}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              value={user?.email}
              disabled
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
