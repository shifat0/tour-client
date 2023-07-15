import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../UserContext/userContext";
import Api from "../../../utility/api";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await Api.post("/user/login", data);
    if (res.status && res.data) {
      setUserData(res.data[0]);
      toast.success("Log in Success");
      localStorage.setItem("userData", JSON.stringify(res.data[0]));
      navigate("/");
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      {userData.email ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-4">Already Logged in as {userData?.firstName}</h2>
          <button
            onClick={() => navigate("/")}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Go to Home Page
          </button>
        </div>
      ) : (
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl mb-6">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
          <div>
            <p className="text-red ">
              New in this platform ?{" "}
              <span
                className="font-bold text-green-500 cursor-pointer "
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
