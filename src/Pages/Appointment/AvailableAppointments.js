import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Services from "./Services";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://hidden-temple-24648.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  // useEffect(() => {
  //   fetch(`https://hidden-temple-24648.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div className="mb-20 ">
      <p className="mt-20 text-xl text-center text-primary">
        Available Appointments on {format(date || new Date(), "PP")}
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
        {services?.map((service) => (
          <Services
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          setTreatment={setTreatment}
          date={date}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
