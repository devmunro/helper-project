import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apply from "../Account/apply";

const Help = ({ filter, data }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const result = (query) => {
      if (query !== "") {
        const newresults = data.filter((e) => {
          return (
            e.title.toLowerCase().includes(query.toLowerCase()) ||
            e.location.toLowerCase().includes(query.toLowerCase()) ||
            e.category.toLowerCase().includes(query.toLowerCase())
          );
        });

        setSearchResults(newresults);
      }
    };

    return result(filter);
  }, [filter, data]);

  console.log(searchResults);
  console.log(data);

  return (
    <div className="flex sm:flex-wrap sm:flex-row flex-col items-center">
      {(data.length === 0 || (searchResults.length === 0 && filter !== "")) && (
        <div className="pt-2 text-2xl font-bold">No Matching Posts</div>
      )}

      {filter === "" &&
        data.map((e) => {
          return (
            <div
              key={e.id}
              className="sm:w-[50%] w-[90%] border-2 rounded border-indigo-300 border-solid m-4 "
            >
              <div className="bg-indigo-300 p-4 text-blue-900">
                <h1 className="text-lg font-bold">
                  Job Title: {e.title ? e.title : ""}
                </h1>
              </div>
              <div className="p-2 px-8 space-x-1 font-semibold">
                <span className="bg-indigo-300 p-1">
                  {e.location ? e.location : ""}
                </span>
                <span className="bg-indigo-300 p-1">
                  {e.category ? e.category : ""}
                </span>
              </div>
              <div className="p-4 bg-blue-200 m-2">
                <p>
                  <span className="font-bold">Name:</span> {e.name} who is {e.age} years old
                </p>
                <p> <span className="font-bold">Brief:</span> {e.brief}</p>
              </div>

              <Link
                className="m-2 font-bold flex justify-center"
                to={`${e.id}`}
              >
                <button
                  type="submit"
                  className="border border-blue-500 bg-blue-600 hover:bg-blue-500  md:w-1/2 w-[90%] p-4 mx-auto my-2 text-white"
                >
                  APPLY
                </button>
              </Link>
            </div>
          );
        })}

      {filter !== "" &&
        searchResults.map((e) => {
          return (
            <div
              key={e.id}
              className="w-[90%] border-2 rounded border-indigo-300 border-solid m-4 "
            >
              <div className="bg-indigo-300 p-4 text-blue-900">
                <h1 className="text-lg font-bold">
                  Job Title: {e.title ? e.title : ""}
                </h1>
              </div>
              <div className="p-2 px-8 space-x-1 font-semibold">
                <span className="bg-indigo-300 p-1">
                  {e.location ? e.location : ""}
                </span>
                <span className="bg-indigo-300 p-1">
                  {e.category ? e.category : ""}
                </span>
              </div>
              <div className="p-4 bg-blue-200 m-2">
                <p>
                  Name: {e.name} who is {e.age} years old
                </p>
                <p>Brief: {e.brief}</p>
              </div>

              <Link
                className="m-2 font-bold flex justify-center"
                to={`${e.id}`}
              >
                <button
                  type="submit"
                  className="border border-blue-500 bg-blue-600 hover:bg-blue-500  md:w-1/2 w-[90%] p-4 mx-auto my-2 text-white"
                >
                  APPLY
                </button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Help;
