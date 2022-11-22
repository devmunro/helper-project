import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../../firebase";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PostHelp = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [data, setData] = useState({
    name: "",
    age: "",
    title: "",
    breif: "",
    message: "",
    location: "",
    category: "",
    period: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const collectionRef = collection(db, "users");
    await addDoc(collectionRef, {
      ...data,

      user: user.uid,
    });

    navigate("/success");
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
    <div className="lg:flex w-full ">

      {/* image */}
      <div className="w-1/2  hidden lg:block  overflow-hidden h-screen">
        <img
          className=" hidden lg:block  lg:w-full"
          src="https://images.unsplash.com/photo-1537735319956-df7db4b6a4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80"
          alt="elderly couple"
        ></img>
      </div>

      {/* form */}
      <div className="lg:w-1/2 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex-col p-5 shadow-xl border-2 sm:m-10"
        >
          <h1 className="font-bold text-xl p-2">GET THE HELP YOU NEED</h1>
          <h2 className=" text-lg p-2">- Complete the form below</h2>


          <fieldset className="flex-col sm:flex-row flex  m-2">
            <div className="p-2 flex gap-x-5	">
              <label htmlFor="name" className="p-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={data.name}
                placeholder="Type your name"
                className=" border-solid border-black border-2 p-1"
              />
            </div>

            <div className="p-2 flex gap-x-8	">
              <label htmlFor="age" className="p-2">
                Age:
              </label>

              <input
                type="text"
                name="age"
                id="age"
                onChange={handleChange}
                value={data.age}
                placeholder="Type your age"
                className=" border-solid border-black border-2 p-1 "
              />
            </div>
          </fieldset>

          <label htmlFor="title" className="m-4">
            Job Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={data.title}
            placeholder="Job Title"
            className=" border-solid border-black border-2  mb-2 p-1"
          />
          <div>
            <label htmlFor="message" className="m-10 mx-0">
              Subtitle:
            </label>

            <textarea
              id="brief"
              name="brief"
              onChange={handleChange}
              value={data.brief}
              max-length="20"
              placeholder="a brief description "
              className=" border-solid border-black border-2 h-12  w-full p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="m-4">
              Full description:
            </label>

            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={data.message}
              minlength="100"
              placeholder="a brief description of the help you need"
              className=" border-solid border-black border-2 h-36 w-full p-2"
            />
          </div>
          <fieldset className="flex space-x-2 m-2">
            <label htmlFor="location">Location</label>

            <select
              id="location"
              name="location"
              onChange={handleChange}
              value={data.location}
              className=" border-solid border-black border-2 w-1/2 "
            >
              <option value="">Location</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="barcelona">Barcelona</option>
              <option value="rome">Rome</option>
            </select>

            <label htmlFor="category">Category</label>
            <br />
            <select
              id="category"
              name="category"
              value={data.category}
              onChange={handleChange}
              className=" border-solid border-black border-2 w-1/2"
            >
              <option value="">Catergory</option>
              <option value="transport">Transport</option>
              <option value="delivery">Delivery</option>
              <option value="cooking">Cooking</option>
            </select>
          </fieldset>

          <fieldset className="p-4 space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="acceptTerms"
              onChange={handleChange}
              checked={data.acceptTerms}
              className=" border-solid border-black border-2"
            />
            <label htmlFor="terms">Accept terms?</label>
          </fieldset>
          <button
            type="submit"
            className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostHelp;
