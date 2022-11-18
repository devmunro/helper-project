import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import UsersPost from "./UsersPost";
import UsersApplied from "./UserAppliedBoard";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div>
      <div className="border-2 border-blue-400 relative  mx-auto">
        <div className="flex justify-between p-4 bg-blue-400 text-white">
          <h1 className="text-2xl font-bold ">Dashboard</h1>
          <p>You are logged in as: {user && user.email}</p>
          {/*<p>Your profile photo:</p>
        {user.photoURL ? (
        <img src={user.photoURL} alt="profile" />
      ) : (
        <div className="border border-black rounded-full w-5bg-blue-400 flex content-center">
          {user.email.slice(0, 1)}
        </div>
      )}*/}
        </div>
        <div className="px-4 bg-blue-400 text-white">Welcome {user.name}</div>
      </div>
      
      <UsersPost />
      <UsersApplied/>
      
      
    </div>
  );
};

export default Account;
