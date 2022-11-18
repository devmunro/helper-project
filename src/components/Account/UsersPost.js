import React, { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function UsersPost() {
  const { data } = useContext(DatabaseContext);

  const { user } = UserAuth();

  const matchUser = data.filter((e) => e.user === user.uid);

  return (
    <div className="w-full m-1 p-2 bg-blue-200 ">
      <div className="flex justify-between  bg-blue-400 px-2">
        <h2 className="text-2xl  p-2 font-semibold">Ongoing Job Posts</h2>
        <Link className="rounded-md m-2 p-1 bg-blue-900" to="/account/post-help">
          Add Post <span className="text-2xl">+</span>
        </Link>
      </div>
      <div>
        {matchUser.length > 0 &&
          matchUser.map((e) => {
            return (
              <Link className="" to={`search-help/${e.id}`}>
                <div className=" flex justify-between p-4 m-2 bg-blue-700 rounded">
                  <div className="">
                    <h1 className="font-bold"> {e.title}</h1>
                    <p>{e.brief}</p>
                    <p className="font-semibold">{e.location.toUpperCase()}</p>
                  </div>
                  <div className="flex-col ">
                    
                    <Link to={`search-help/${e.id}/response`}>
                      <div className="flex p-2 bg-blue-100 text-blue-600 rounded">
                        <img
                          alt="mail"
                          className="w-10"
                          src="https://cdn-icons-png.flaticon.com/512/761/761755.png"
                        ></img>
                        <p className="font-semibold p-2">RESPONSES</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr className="border-black" />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
