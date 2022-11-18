import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { AppliedContext } from "../../context/AppliedContext";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Apply = ({ postID }) => {
  const { user } = UserAuth();
  const { appliedData } = useContext(AppliedContext);
  const navigate = useNavigate();
  const [response, setResponse] = useState({
    name: "",
    age: "",
    message: "",
    email: "",
    telephone: ""
  });

  // already applied match
  const matchPost = appliedData.filter((e) => e.user === user.uid);
  const alreadyApplied = matchPost.filter((e) => e.PostID === postID);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "applied");
    console.log(collectionRef);
    await addDoc(collectionRef, {
      ...response,
      user: user.uid,
      PostID: postID,
    });

    navigate("/success");
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;
    setResponse((preVal) => {
      return {
        ...preVal,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="w-full bg-blue-700">
      <form
        className="w-full flex flex-col mx-auto mt-10 p-10 shadow-xl border-2 text-left"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex flex-col">
          <label htmlFor="name" className="p-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={response.name}
            placeholder="Type your name"
            className=" border-solid border-black border-2 p-1"
          />

          <label htmlFor="age" className="p-1">
            Age:
          </label>

          <input
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={response.age}
            placeholder="Type your age"
            className=" border-solid border-black border-2 p-1 "
          />

          <label htmlFor="message" className="p-1">
            Cover Letter:
          </label>

          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={response.message}
            placeholder="a brief description of the help you need"
            className=" border-solid border-black border-2 h-24 w-3/4 p-2"
          />
        </fieldset>

        <fieldset className="flex flex-col mb-4">
          <label htmlFor="name" className="p-1">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={response.email}
            placeholder="Type your email"
            className=" border-solid border-black border-2 p-1"
          />

          <label htmlFor="age" className="p-1">
            Telephone:
          </label>

          <input
            type="text"
            name="telephone"
            id="telephone"
            onChange={handleChange}
            value={response.telephone}
            placeholder="Type your telephone"
            className=" border-solid border-black border-2 p-1 "
          />
        </fieldset>
        {alreadyApplied.length > 0 && (
          <button disabled type="submit" className="bg-blue-200">
            YOU ALREADY APPLIED
          </button>
        )}
        {alreadyApplied.length === 0 && (
          <button type="submit" className="bg-blue-400">
            APPLY
          </button>
        )}
      </form>
    </div>
  );
};

export default Apply;
