import React, { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function UsersPost() {
  const {
    updateSearch,
    searchTerm,
    filterData,
    updateFilterData,
    data,
    getUsers,
    setFilterData,
    searchValue,
    dataAlreadyFiltered,
  } = useContext(DatabaseContext);

  const { user } = UserAuth();

  console.log(user);
  console.log(data);

  const trial = data.filter((e) => e.user === user.uid);
  console.log(trial);

  return (
    <div className="w-90 m-2 p-2 bg-indigo-900 ">
      <h2 className="text-lg font-semibold bg-blue-300 w-max px-2">
        Your current Job Posts
      </h2>
      <div className="w-full flex ">
        {trial.length > 0 &&
          trial.map((e) => {
            return (
              <div className="w-1/3 p-4 m-2 bg-blue-100 rounded">
                <h1 className="font-bold"> {e.title}</h1>
                <p>{e.message}</p>
                <p className="font-semibold">{e.location.toUpperCase()}</p>
              </div>
            );
          })}
        <Link
          to="/account/post-help"
          className=" flex flex-col w-max p-4 m-2 bg-blue-100 border-black border-dotted border-2 text-center hover:scale-105 hover:border-l-8 hover:border-r-8"
        >
          <p className="font-extrabold text-7xl">+</p>
          <p>Add Post</p>
        </Link>
      </div>
    </div>
  );
}
