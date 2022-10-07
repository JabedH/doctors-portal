import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import Primarybtn from "../Shared/Navbar/Primarybtn";
import ConnectedUs from "./ConnectedUs";

import Info from "./info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="hero lg:mt-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl ml-5" />
          <div className="text-left">
            <h1 className="text-5xl  font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Link to="/appointment">
              <Primarybtn> Get Started </Primarybtn>
            </Link>
          </div>
        </div>
      </div>
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonial />
      <ConnectedUs />
    </div>
  );
};

export default Home;
