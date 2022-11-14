import React from "react";
import React, { useState, useEffect, useCallback } from "react";
import Help from "./Help";

const Search = ({
  word,
  update,
  filterData,
  updateFilterData,
  getUsers,
  setFilterData,
}) => {
  const reset = () => {
    setFilterData({
      location: "",
      category: "",
    });
  };

  const updateResults = useCallback(() => {
    const arr = [];
    if (filterData.location !== '' &&
      filterData.category !== '' &&
      filterData.period !== ''
    ) {
      const el = data.find(el => el.location === filterData.location && el.category === filterData.category && el.period === filterData.period);
      //setDataAlreadyFiltered(el);
      arr.push(el);
      console.log(arr);
      console.log(typeof dataAlreadyFiltered);
    } else {
      console.log('Need more specification');
    }
    return (
      <Help
        filter=""
        data={arr}
      />
    )
  }, [data, dataAlreadyFiltered, filterData.category, filterData.location, filterData.period])

  useEffect(() => {
    console.log(filterData);
    updateResults();
  }, [filterData, updateResults])

  return (
    <div className="bg-blue-300 p-4 flex lg:flex-row flex-col">
      <input
        type="text"
        ref={word}
        onChange={update}
        className="p-2 lg:mx-4 rounded-m m-2 lg:w-1/2 sm:w-5/6 lg:h-12"
        placeholder="Search by Job title/Location or Catergory"
      />
      <select id="location" className="p-2 rounded-m m-2"
        value={filterData.location}
        onChange={updateFilterData}
        name="location"
      >
        <option value="">--Set Location--</option>
        <option value="london">london</option>
        <option value="paris">paris</option>
        <option value="barcelona">barcelona</option>
        <option value="rome">rome</option>
      </select>
      <select id="category" className="p-2 rounded-m m-2"
        value={filterData.category}
        onChange={updateFilterData}
        name="category"
      >
        <option value="">--Set Catergory--</option>
        <option value="transport">transport</option>
        <option value="delivery">delivery</option>
        <option value="cooking">cooking</option>
      </select>
      <select id="role" className="p-2 rounded-m m-2"
        value={filterData.period}
        onChange={updateFilterData}
        name="period"
      >
        <option value="">--Chose--</option>
        <option value="temporal">temp</option>
        <option value="permanent">perm</option>
      </select>
    </div>
  );
};

export default Search;
