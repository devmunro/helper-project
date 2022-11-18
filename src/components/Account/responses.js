import React, { useContext } from "react";
import { AppliedContext } from "../../context/AppliedContext";
import { UserAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

export default function Responses() {

    const {
        appliedData
      } = useContext(AppliedContext);
    
      const { user } = UserAuth();

      let { id } = useParams();

console.log(id)

      const userResponses = appliedData.filter((e) => e.PostID === id);
      console.log(userResponses)
  return (
    <div>
      {userResponses.length > 0 &&
          userResponses.map((e) => {
            return (
              
              <div className="w-full p-4 m-2 bg-blue-100 rounded">
                <h1 className="font-bold"> {e.name}</h1>
                <p>{e.message}</p>
                <p className="font-semibold">{e.telephone}</p>
                <p className="font-semibold">{e.email}</p>
                
              </div>
              
            );
          })}
    </div>
  )
}
