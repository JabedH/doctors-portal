import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Primarybtn from "../Shared/Navbar/Primarybtn";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      className="mt-40 p-5 flex justify-center content-center items-center  text-white "
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="text-left flex-1">
        <h3 className="text-xl text-primary font-bold ">Appointment</h3>
        <h1 className="text-3xl  mt-3 ">Make an appointment Today</h1>
        <p className=" mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Link to="/appointment">
          <Primarybtn> Get Started </Primarybtn>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
