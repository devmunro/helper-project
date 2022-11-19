import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import UsersPost from "./UsersPost";
import UsersApplied from "./UserAppliedBoard";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className=" h-screen w-full">
      <div className="flex-col  p-1 md:p-2 h-screen  text-blue-400 ">
        <div className="flex ">
          <h1 className="text-2xl font-bold ">Dashboard</h1>
        </div>
        
        <div className="lg:flex  w-full">
          {/* Welcome CARD */}
          <div className=" flex-col md:h-64 h-76 px-4 m-5 lg:w-1/2 xl:w-1/3 rounded  bg-blue-600 text-white shadow-xl">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold p-2">Hello, {user.name}</h2>
              <p className="italic p-2">
                You are logged in as: {user && user.email}
              </p>
            </div>
            <div className="flex justify-between">
              <div className=" my-10 text-blue-100">
                <p className="p-1">Welcome to your Dashboard</p>
                <p className="p-1">We hope you enjoy your experience</p>
              </div>
              <img
                className="md:w-56 w-36"
                alt="cartoon of old couple"
                src="https://www.clipartmax.com/png/full/103-1032751_cartoon-double-ninth-festival-old-age-old-people-cartoon-png.png"
              ></img>
            </div>
          </div>

          {/* Job Posts */}
          <div className=" flex m-2 bg-blue-100 lg:w-1/2  xl:w-2/3 rounded  text-white shadow-xl">
            
              <UsersPost />
            
          </div>
          
        </div>
        <div className=" flex m-2 w-full rounded  text-white shadow-xl">
            
              <UsersApplied />
            
          </div>
      </div>

     
    </div>
  );
};

export default Account;
