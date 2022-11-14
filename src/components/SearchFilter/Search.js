import React,{} from "react";


const Search = ({ word, update, filterData, updateFilterData}) => {

  return (
    <div className="bg-blue-300 p-4">
      <input
        type="text"
        ref={word}
        onChange={update}
        className="p-2 rounded-m m-2 w-1/2"
        placeholder="Search Jobs"
      />
      <select  id="location" className="p-2 rounded-m m-2"
         value={filterData.location}
         onChange={updateFilterData}
         name="location" 
      >
        <option value="">--Chose--</option>
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
        <option value="">--Chose--</option>
        <option value="transport">transport</option>
        <option value="delivery">delivery</option>
        <option value="cooking">cooking</option>
      </select>
      <select id="role"className="p-2 rounded-m m-2"
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

