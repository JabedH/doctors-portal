import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [Appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  console.log(Appointments);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>treatment</th>
            </tr>
          </thead>
          {Appointments.map((Appointment, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{Appointment.patientName}</td>
                <td>{Appointment.date}</td>
                <td>{Appointment.slot}</td>
                <td>{Appointment.treatment}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
