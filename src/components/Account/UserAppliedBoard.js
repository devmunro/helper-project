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

    // this
    

    // this

    <div className="w-full m-1 p-2 bg-blue-200 ">
      <div className="flex justify-between  bg-blue-400 px-2">
        <h2 className="text-2xl  p-2 font-semibold">Applied</h2>
        
      </div>
      <div>
      {result.length > 0 &&
          result.map((e) => {
            return (
              <Link className="" to={`search-help/${e[0].id}`}>
                <div className=" flex justify-between p-4 m-2 bg-blue-700 rounded">
                  <div className="">
                    <h1 className="font-bold"> {e[0].title}</h1>
                    <p>{e[0].brief}</p>
                    <p className="font-semibold">{e[0].location.toUpperCase()}</p>
                  </div>
                  <div className="flex-col ">
                    
                    
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
