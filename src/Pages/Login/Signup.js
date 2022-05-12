import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading || updating) {
    return <Loading />;
  }
  let loginError;
  if (error || gError || UpdateError) {
    loginError = (
      <p className="text-red-500 text-center mb-2">
        {error?.message || gError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div className="flex lg:h-4/5 sm:my-28 justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Name must be 4 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {loginError}
            <input
              className="w-full max-w-xs btn text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div className="flex ">
            <p>Do you have an Account?</p>
            <Link className="text-primary" to="/login">
              Click here for login
            </Link>
          </div>
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
