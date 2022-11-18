import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import About from "./aboutus";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(error);
    } finally {
      console.log("[sign in end]");
    }
  };

  return (
    <div>
      <div className="lg:flex  md:justify-between  p-2 lg:p-5 bg-blue-400 text-white">
        <div className=" lg:flex flex-col lg:w-1/2 w-full  p-4 mx-auto text-center">
          <h1 className="text-6xl m-2">Helper</h1>
          <h2 className="text-3xl m-2">Give a helping hand</h2>
          <p className="md:w-[65%] md:my-12 md-2 w-[85%] text-justify mx-auto">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* sigin form */}
        <div className="lg:w-1/2 w-[85%] mx-auto p-4">
          <div>
            <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
            <p className="py-2">
              Don´t have an account{" "}
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border p-3 text-black"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border p-3 text-black"
                type="password"
              />
            </div>
            <button
              className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Signin;
