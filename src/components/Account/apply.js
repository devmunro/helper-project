import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {DatabaseContext} from  "../../context/DatabaseContext";

const Apply = ({postID, postOwner}) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [data, setData] = useState({
    name: "",
  });



console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const collectionRef = collection(db, "messages")
    console.log(collectionRef);
    await addDoc(collectionRef, {
      ...data,
    
      user: user.uid,
      PostID : postID,
      PostOwner: postOwner
    });

 
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="p-1">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Type your name"
         
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Apply;
