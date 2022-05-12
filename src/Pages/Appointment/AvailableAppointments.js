import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Services from "./Services";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-20 ">
      <p className="mt-20 text-xl text-center text-primary">
        Available Appointments on {format(date || new Date(), "PP")}
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
        {services.map((service) => (
          <Services setTreatment={setTreatment} service={service} />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          date={date}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
