import React, { useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { AppliedContext } from "../../context/AppliedContext"
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";


const Apply = ({postID}) => {
   const { user } = UserAuth();
   const { appliedData } = useContext(AppliedContext);

   const matchPost = appliedData.filter((e) => e.user === user.uid);
console.log(matchPost)

const result = matchPost.filter((e => e.PostID === postID))

console.log(result)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const collectionRef = collection(db, "applied")
    console.log(collectionRef);
    await addDoc(collectionRef, {
          
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
        {(result.length > 0) && <button disabled type="submit" className="bg-blue-200">YOU ALREADY APPLIED</button> }
        {(result.length === 0) && <button type="submit" className="bg-blue-400">APPLY</button> }
      </form>
    </div>
    
  );
};

export default Apply;
