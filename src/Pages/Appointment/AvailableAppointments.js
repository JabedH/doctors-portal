import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Services from "./Services";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="mt-20 text-xl text-center text-primary">
        Available Appointments on {format(date, "PP")}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <Services service={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
