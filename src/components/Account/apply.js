import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";


const Apply = ({postID, postOwner}) => {
   const { user } = UserAuth();
  const [data, setData] = useState({
    name: "",
  });



console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const collectionRef = collection(db, "applied")
    console.log(collectionRef);
    await addDoc(collectionRef, {
      ...data,
    
      user: user.uid,
      PostID : postID,
          });

 
  };

//   const handleChange = (e) => {
//     const { type, name, checked, value } = e.target;
//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   };
  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit}>
        
        <button type="submit" className="bg-blue-200">Apply</button>
      </form>
    </div>
  );
};

export default Apply;
