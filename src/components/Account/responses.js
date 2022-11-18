import React, { useContext } from "react";
import { DatabaseContext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Responses() {

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
    
      const { user } = UserAuth();



      const userPosts = data.filter((e) => e.user === user.uid);
      console.log(userPosts)
  return (
    <div>
      hey
    </div>
  )
}
