import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import ServicesCard from "./ServicesCard";
import Primarybtn from "../Shared/Navbar/Primarybtn";

const Services = () => {
  return (
    <div className="mt-20">
      <div>
        <h3 className="bold text-primary">OUR SERVICES</h3>
        <h1 className="text-2xl mb-10">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <ServicesCard serviceTitle="Fluoride Treatment" img={cavity} />
        <ServicesCard serviceTitle="Cavity Filling" img={fluoride} />
        <ServicesCard serviceTitle="Teeth Whitening" img={whitening} />
      </div>
      <div>
        <div className="hero mt-40 ">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <img className="max-w-sm rounded " src={treatment} />
            <div className="max-w-xl text-left">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Primarybtn> Get Started </Primarybtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
