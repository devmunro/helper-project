import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import UsersPost from "./UsersPost";
import UsersApplied from "./UserAppliedBoard";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className=" h-screen">
      <div className="flex-col  p-4 h-screen bg-blue-200 text-blue-400 ">
        <div className="flex ">
          <h1 className="text-2xl font-bold ">Dashboard</h1>
        </div>
        {/*<p>Your profile photo:</p>
        {user.photoURL ? (
        <img src={user.photoURL} alt="profile" />
      ) : (
        <div className="border border-black rounded-full w-5bg-blue-400 flex content-center">
          {user.email.slice(0, 1)}
        </div>
      )}*/}
      <div className="flex ">
        <div className=" flex-col px-4 m-2 w-1/2 rounded  bg-blue-600 text-white shadow-xl">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold p-2">Hello, {user.name}</h2>
            <p className="italic p-2">You are logged in as: {user && user.email}</p>
          </div>
          <div className="flex justify-between">
          <div className="my-10 text-blue-100">
            <p className="p-1" >Welcome to your Dashboard</p>
            <p className="p-1" >We hope you enjoy your experience</p>
          </div>
          <img className="w-1/3" alt="cartoon of old couple"src="https://www.clipartmax.com/png/full/103-1032751_cartoon-double-ninth-festival-old-age-old-people-cartoon-png.png"></img>
          </div>
        </div>
        <div className=" flex-col  m-2 w-1/2 rounded  text-white shadow-xl">
          <div className="flex justify-between  bg-blue-600">
            <h2 className="text-2xl font-bold p-2 ">Something Here {user.name}</h2>
           
          </div>
          <div className="flex justify-between  bg-white">
          <div className="my-10 text-blue-400">
            <p className="p-1" ></p>
            <p className="p-1" ></p>
          </div>
          
          </div>
        </div>
        </div>
        <div className=" flex-col  m-2 w-1/2 rounded  text-white shadow-xl">
          <div className="flex justify-between  bg-blue-600">
           
          <UsersPost />
          </div>
        </div>
      </div>
      

      {/*       
      <UsersPost />
      <UsersApplied/> */}
    </div>
  );
};

export default Account;
