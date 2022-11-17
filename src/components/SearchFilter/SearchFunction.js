import { useContext, useEffect } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import Search from "./SearchBar";
import Help from "./SearchResults";

const SearchHelp = () => {
  const {
    updateSearch,
    searchTerm,
    filterData,
    updateFilterData,
    data,
    getUsers,
    setFilterData,
    searchValue,
    dataAlreadyFiltered,
  } = useContext(DatabaseContext);



 
  return (
    <div>
      <Search
        update={updateSearch}
        word={searchTerm}
        filterData={filterData}
        updateFilterData={updateFilterData}
        updatedata={data}
        getUsers={getUsers}
        setFilterData={setFilterData}
      />

      {data !== [] && <Help filter={searchValue} data={dataAlreadyFiltered} />}
    </div>
  );
};

export default SearchHelp;
