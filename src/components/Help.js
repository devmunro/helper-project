import React from "react";
import { useState, useEffect } from "react";

const Help = ({ filter, data }) => {
  console.log(filter);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const result = (query) => {
      if (query !== '') {
        const newresults = data.filter((e) => {
          return e.name.toLowerCase().includes(query.toLowerCase()) || e.message.toLowerCase().includes(query.toLowerCase() );
        });
        setSearchResults(newresults);
      }
    };

    return result(filter);
  }, [filter, data]);

  console.log(searchResults);

  return (
    <div>
      {filter === '' &&
        data.map((e) => {
          return (
            <div className="border-2 border-solid m-4">
              <p>Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>Message: {e.message}</p>
              <p>Title: {e.title}</p>
            </div>
          );
        })}

      {filter !== '' &&
        searchResults.map((e) => {
          return (
            <div className="border-2 border-solid m-4">
              <p>Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>Message: {e.message}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Help;
