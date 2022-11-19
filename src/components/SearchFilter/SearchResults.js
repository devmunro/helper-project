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
    <div className="flex flex-col items-center">
      {(data.length === 0 || (searchResults.length === 0 && filter !== "")) && (
        <div className="pt-2 text-2xl font-bold">No Matching Posts</div>
      )}

      {filter === "" &&
        data.map((e) => {
          return (
            <div className="w-[90%] border-2 border-indigo-300 border-solid m-4 ">
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
                <p>Description: {e.brief}</p>
              </div>
              <Link className="m-2 font-bold"to={`${e.id}`}>Click for more</Link>
            </div>
          );
        })}

      {filter !== "" &&
        searchResults.map((e) => {
          return (
            <div className="w-1/2 border-2 border-indigo-500 border-solid m-4 ">
              <div className="bg-indigo-600 p-4 text-white">
                <h1 className="text-lg font-bold">
                  Job Title: {e.title ? e.title : ""}
                </h1>
              </div>
              <div className="p-2 px-8 space-x-1 font-semibold">
                <span className="bg-indigo-300 p-1">{e.location}</span>
                <span className="bg-indigo-300 p-1">Catergory</span>
              </div>
              <div className="p-2">
                <p> Name: {e.name}</p>
                <p>Age: {e.age}</p>
                <p>Description: {e.message}</p>
              </div>
              <Link to={`${e.id}`}>Click</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Help;
