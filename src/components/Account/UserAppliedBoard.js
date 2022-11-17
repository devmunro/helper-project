import React, { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { AppliedContext } from "../../context/AppliedContext";
import { Link } from "react-router-dom";

export default function UsersApplied() {
  const { data } = useContext(DatabaseContext);
  const { appliedData } = useContext(AppliedContext);

  const { user } = UserAuth();


  const matchPost = appliedData.filter((e) => e.user === user.uid);
  
  const result = matchPost.map((element) => {
    return  data.filter((e) => e.id === element.PostID )

  })

const fin = result.map((e) => e)
console.log(result)

  return (
    <div className="w-90 m-2 p-2 bg-indigo-900 ">
      <h2 className="text-lg font-semibold bg-blue-300 w-max px-2">
        Your Applied Jobs
      </h2>
      <div className="w-full flex ">
        {result.length > 0 &&
          result.map((e) => {
            return (
              <div className="w-1/3 p-4 m-2 bg-blue-100 rounded">
                <h1 className="font-bold"> {e[0].title}</h1>
                <p>{e[0].message}</p>
                <p className="font-semibold">{e[0].location.toUpperCase()}</p>
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
