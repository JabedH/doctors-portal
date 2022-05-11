import React from "react";

const Primarybtn = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary  mt-3">
        {children}
      </button>
    </div>
  );
};

export default Primarybtn;
