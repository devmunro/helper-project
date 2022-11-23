import React, { useContext } from "react";
import { AppliedContext } from "../../context/AppliedContext";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

export default function Responses() {
  const { appliedData } = useContext(AppliedContext);
  const { data } = useContext(DatabaseContext);

  const { user } = UserAuth();

  let { id } = useParams();

console.log(appliedData)
    // when click back button goes back one page
    const navigate = useNavigate()
    const handleBack = () => {
     navigate(-1)
   
    }

  const userResponses = appliedData.filter((e) => e.PostID === id);
  const postTitle = data.find((e) => e.id === id);

  console.log(userResponses)

  return (
    <div className="w-full">
      <button className="font-bold" onClick={handleBack}>
        BACK
      </button>
      <h2 className="font-bold text-blue-800 text-lg p-2">
        Responses for: {postTitle.title}
      </h2>
      {userResponses.length > 0 &&
        userResponses.map((e) => {
          return (
            <div key ={e.id} className="w-90 p-4 m-4 bg-blue-100 rounded">
              <h1 className="font-bold"> {e.name}</h1>
              <p>{e.message}</p>
              <p className="font-semibold">{e.telephone}</p>
              <p className="font-semibold">{e.email}</p>
            </div>
          );
        })}

{userResponses.length === 0 &&
      
            <div className="w-90 p-4 m-4 bg-blue-100 rounded">
              <h1 className="font-bold"> No Responses as of yet</h1>
              
            </div>
      
        }
    </div>
  );
}
