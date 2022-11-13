import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Search from "./SearchFilter/Search";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div>
      <div className="border-2 border-indigo-700 p-4 relative  mx-auto">
        <div className="flex justify-between p-4 bg-indigo-700 text-white">
          <h1 className="text-2xl font-bold ">Dashboard</h1>
          <p>You are logged in as: {user && user.email}</p>
          {/*<p>Your profile photo:</p>
        {user.photoURL ? (
        <img src={user.photoURL} alt="profile" />
      ) : (
        <div className="border border-black rounded-full w-5 flex content-center">
          {user.email.slice(0, 1)}
        </div>
      )}*/}
        </div>
      </div>

      <div className="flex w-full mt-10">
        <Link to="/account/post-help">
          <div class="w-full rounded shadow-2xl hover:scale-105">
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1618218168350-6e7c81151b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
              
                alt="Holding hands"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-3xl mb-2">Need a helping hand? <span className="text-xl">ClickHere</span></div>
              
            </div>
          </div>
        </Link>
        <Link to="/account/search-help">
          <div class="w-full rounded shadow-2xl hover:scale-105">
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                       alt="Holding hands"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-3xl mb-2">Can you offer assistance? <span className="text-xl">ClickHere</span></div>
              
            </div>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Account;
