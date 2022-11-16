import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import About from "../../aboutus";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(email, password);
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
    } finally {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between p-4 bg-blue-400 text-white">
        <div className=" flex flex-col w-[50%]  my-16 mr-9 p-4 mx-auto text-center">
          <h1 className="text-6xl ">Helper</h1>
          <h2 className="text-3xl ">Give a helping hand</h2>
          <p className="w-[65%] text-justify my-12 mx-auto">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="w-[50%] my-16 mr-9 p-4">
          <div>
            <h1 className="text-2xl font-bold py-2">
              Sign up for a free account
            </h1>
            <p className="py-2">
              Already have an account{" "}
              <Link to="/" className="underline">
                Sign In
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium ">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border p-3 text-black"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium ">Password</label>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Signup;