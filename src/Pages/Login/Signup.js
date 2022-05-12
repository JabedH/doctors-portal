import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="flex lg:h-4/5 sm:my-28 justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Login</h2>
          <form onSubmit={handleLogin} action="" className="grid  gap-2 mb-5">
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              placeholder="type your name"
              className="input input-bordered"
            />
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="type your email"
              className="input input-bordered"
            />
            <label htmlFor="">password</label>
            <input
              name="password"
              type="password"
              placeholder="your password"
              className="input input-bordered"
            />
            <input
              name="submit"
              type="submit"
              className="input input-bordered mt-5 bg-accent text-white"
            />
            <div className="flex ">
              <p>Do you have an Account?</p>
              <Link className="text-primary" to="/login">
                Click here for login
              </Link>
            </div>
          </form>
          <div className="">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline"
              >
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
