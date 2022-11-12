import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PostHelp = () => {
   const navigate = useNavigate();
   const { user } = UserAuth();
   const [data, setData] = useState({
      name: '',
      age: '',
      title: '',
      message: '',
      acceptTerms: false,
   })

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      const collectionRef = collection(db, 'users');
      await addDoc(collectionRef, {
         ...data,
         /*          timeStamp:serverTimestamp,
                  user:user.uid,
                  userName:user.displayName, */
      })

      navigate('/success')

   }

   const handleChange = (e) => {
      const { type, name, checked, value } = e.target;
      setData(preVal => {
         return {
            ...preVal,
            [name]: type === 'checkbox' ? checked : value,
         }
      })
   }
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name:</label><br />
         <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
         /><br />

         <label htmlFor="age">Age:</label><br />
         <input
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={data.age}
         /><br />

         <label htmlFor="title">Title:</label><br />
         <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={data.title}
         /><br />

         <textarea
            name="message"
            onChange={handleChange}
            value={data.message}
         /><br />

         <input
            type="checkbox"
            id="terms"
            name="acceptTerms"
            onChange={handleChange}
            checked={data.acceptTerms}
         />
         <label htmlFor="terms">Accept terms?</label>

         <button type="submit">Submit</button>
      </form>
   )
}

export default PostHelp;