
import React,{useState} from "react";
import { collection,addDoc,serverTimestamp} from "firebase/firestore";

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
      location:'',
      category:'',
      period:'',
      acceptTerms: false,
   })

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      const collectionRef = collection(db, 'users');
      await addDoc(collectionRef, {
         ...data,

         user:user.uid,

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
         <label htmlFor="name">Name:</label>
         <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
            className="border border-solid border-black border-2"
         /><br />

         <label htmlFor="age">Age:</label><br />
         <input
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={data.age}
            className="border border-solid border-black border-2"
         /><br />

         <label htmlFor="title">Title:</label><br />
         <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={data.title}
            className="border border-solid border-black border-2"
         /><br />

          <label htmlFor="location">Location</label><br/>
         <select
            id="location"
            name="location"
            onChange={handleChange}
            value={data.location}
            className="border border-solid border-black border-2"
         ><br/>
            <option value="">--choose--</option>
            <option value="london">London</option>
            <option value="paris">Paris</option>
            <option value="barcelona">Barcelona</option>
            <option value="rome">Rome</option>
         </select><br/>

         <label htmlFor="category">Category</label><br/>
         <select
            id="category"
            name="category"
            value={data.category}
            onChange={handleChange}
            className="border border-solid border-black border-2"
         >
            <option value="">--choose--</option>
            <option value="transport">Transport</option>
            <option value="delivery">Delivery</option>
            <option value="cooking">Cooking</option>
         </select><br/>

         <label htmlFor="period">Period</label><br/>
         <select
            id="period"
            name="period"
            onChange={handleChange}
            value={data.period}
            className="border border-solid border-black border-2"
         >
            <option value="">--choose--</option>
            <option value="temporal">Temporal</option>
            <option value="permanent">Permanent</option>
         </select><br/> 

         <label htmlFor="message">Message:</label><br/>
         <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={data.message}
            className="border border-solid border-black border-2"
         /><br />

         <input
            type="checkbox"
            id="terms"
            name="acceptTerms"
            onChange={handleChange}
            checked={data.acceptTerms}
            className="border border-solid border-black border-2"
         />
         <label htmlFor="terms">Accept terms?</label>

         <button type="submit">Submit</button>
      </form>
   )
}

export default PostHelp;