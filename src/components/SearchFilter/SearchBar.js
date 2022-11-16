

const Search = ({ word, update, filterData, updateFilterData, getUsers, setFilterData}) => {



  const reset=()=>{
    getUsers();
    setFilterData({
       location:'',
       category:'',
       period:'',
     })
  }


  return (
    <div className="bg-blue-300 p-4">
      <input
        type="text"
        ref={word}
        onChange={update}
        className="p-2 mx-10 rounded-m m-2 w-1/2"
        placeholder="Search by Job title/Location or Catergory"
      />
      <select  id="location" className="p-2 rounded-m m-2"
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

      <button onClick={reset}>Reset filters</button>
          </div>
  );
};

export default Search;
