import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div className="hero my mt-20">
        <div className="hero-content ju flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:max-w-sm w-100 rounded-lg shadow-2xl"
            alt="this is a chair"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
