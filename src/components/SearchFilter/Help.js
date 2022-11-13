import React from "react";
import { useState, useEffect } from "react";

const Help = ({ filter, data }) => {
  console.log(filter);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const result = (query) => {
      if (query !== "") {
        const newresults = data.filter((e) => {
          return (
            e.title.toLowerCase().includes(query.toLowerCase()) ||
            e.message.toLowerCase().includes(query.toLowerCase())
          );
        });
        setSearchResults(newresults);
      }
    };

    return result(filter);
  }, [filter, data]);

  console.log(searchResults);

  return (
    <div className="flex flex-col items-center">
      {filter === "" &&
        data.map((e) => {
          return (
            <div className="w-1/2 border-2 border-indigo-500 border-solid m-4 ">
              <div className="bg-indigo-600 p-4 text-white">
                <h1 className="text-lg font-bold">Job Title: {e.title}</h1>
              </div>
              <div className="p-2 px-8 space-x-1 font-semibold">
              <span className="bg-indigo-300 p-1">Location</span>
              <span className="bg-indigo-300 p-1">Catergory</span>
              <span className="bg-indigo-300 p-1">Temp/Permament</span>
              </div>
              <div className="p-2"> 
              <p> Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>Description: {e.message}</p>
              </div>
            </div>
          );
        })}

      {filter !== "" &&
        searchResults.map((e) => {
          return (
            <div className="w-1/2 border-2 border-indigo-500 border-solid m-4 ">
              <div className="bg-indigo-600 p-4 text-white">
                <h1 className="text-lg font-bold">Job Title: {e.title}</h1>
              </div>
              <div className="p-2 px-8 space-x-1 font-semibold">
              <span className="bg-indigo-300 p-1">Location</span>
              <span className="bg-indigo-300 p-1">Catergory</span>
              <span className="bg-indigo-300 p-1">Temp/Permament</span>
              </div>
              <div className="p-2"> 
              <p> Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>Description: {e.message}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Help;