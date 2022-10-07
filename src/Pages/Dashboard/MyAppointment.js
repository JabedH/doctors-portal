import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {} from "react-day-picker";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Mya = () => {
  const [as, setas] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://hidden-temple-24648.herokuapp.com/booking?patient=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            // for eating token by 401 and 403
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setas(data));
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
              <th>Payment</th>
            </tr>
          </thead>
          {as.map((a, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      {" "}
                      <button className="btn btn-xs btn-success">
                        pay
                      </button>{" "}
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <p>
                      <span className="text-green-500 font-bold">Paid</span>
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Mya;
