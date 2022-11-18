import React, { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function UsersPost() {
  const { data } = useContext(DatabaseContext);

  const { user } = UserAuth();

  const matchUser = data.filter((e) => e.user === user.uid);

  return (
    <div className="w-90 m-1 p-2 bg-indigo-900 ">
      <h2 className="text-lg font-semibold bg-blue-300 px-2">
        Your current Job Posts
      </h2>
      <div className="w-full flex ">
        {matchUser.length > 0 &&
          matchUser.map((e) => {
            return (
              <Link className="w-full" to={`search-help/${e.id}`}>
                <div className="w-1/3 p-4 m-1 bg-blue-100 rounded">
                  <h1 className="font-bold"> {e.title}</h1>
                  <p>{e.brief}</p>
                  <p className="font-semibold">{e.location.toUpperCase()}</p>
                  <Link to={`search-help/${e.id}/response`}>RESPONSES</Link>
                </div>
              </Link>
            );
          })}
        <Link
          to="/account/post-help"
          className= "w-1/3 flex flex-col p-4 m-2 bg-blue-100 border-black border-dotted border-2 text-center hover:scale-105 hover:border-l-8 hover:border-r-8"
        >
          <p className="font-extrabold text-7xl">+</p>
          <p>Add Post</p>
        </Link>
      </div>
    </div>
  );
}
