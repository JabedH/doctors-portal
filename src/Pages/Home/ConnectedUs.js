import React from "react";
import appointment from "../../assets/images/appointment.png";
import Primarybtn from "../Shared/Navbar/Primarybtn";

const ConnectedUs = () => {
  return (
    <div
      className="bg-primary px-10 py-14"
      style={{ background: `url(${appointment})` }}
    >
      <div class="form-control grid grid-cols-1 justify-items-center gap-4">
        <h4 className="text-xl font-bold text-primary">Contact Us</h4>
        <h2 className="text-white text-4xl mb-4">Stay connected with us</h2>
        <input
          type="email"
          placeholder="Email Address"
          class="input w-full max-w-md"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          class="input w-full max-w-md"
        />
        <textarea
          className=" textarea w-full max-w-md"
          placeholder="Text"
          rows={6}
        ></textarea>
        <Primarybtn>Submit</Primarybtn>
      </div>
    </div>
  );
};

export default ConnectedUs;
