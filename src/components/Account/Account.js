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
      <div className="flex w-1/2 mt-10">
        <Link to="/account/post-help">
          <div className="w-1/2 rounded shadow-2xl hover:scale-105">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1618218168350-6e7c81151b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="ASK FOR HELP, scrabble pieces"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">
                Need a helping hand?{" "}
                <span className="text-sm px-4">ClickHere</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/account/search-help">
          <div class="w-1/2 rounded shadow-2xl hover:scale-105">
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1611223235982-891064f27716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="scrabble pieces"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2">
                Can you offer assistance?{" "}
                <span className="text-sm px-4">ClickHere</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
    </div>
  );
};

export default Account;
