import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Pages/Home/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Allusers from "./Pages/Dashboard/Allusers";
import ReqAdmin from "./Pages/RequireAuth/ReqAdmin";
import AddDoctors from "./Pages/Dashboard/AddDoctors";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="lg:max-w-7x1 mx-auto lg:px-12 px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          {/* <Route path="myreview" element={<MyReview />}></Route>
          <Route path="myhistory" element={<MyHistory />}></Route> */}
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="allusers"
            element={
              <ReqAdmin>
                <Allusers />
              </ReqAdmin>
            }
          ></Route>
          <Route
            path="adddoctors"
            element={
              <ReqAdmin>
                <AddDoctors />
              </ReqAdmin>
            }
          ></Route>
          <Route
            path="managedoctors"
            element={
              <ReqAdmin>
                <ManageDoctors />
              </ReqAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
