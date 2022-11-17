import React, { useContext } from 'react'
import { DatabaseContext } from '../../context/DatabaseContext';
import { UserAuth } from '../../context/AuthContext';

export default function UsersPost() {

    
   
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
        } = useContext(DatabaseContext)

        const { user } = UserAuth();
      

        console.log(user)
        console.log(data)

        const trial = data.filter((e) => e.user === user.uid)
 console.log(trial)

  return (
    <div>
    {trial.length > 0 && 
    trial.map((e) => {return (
        <div>{e.name}</div>
    )}) }
    </div>
  )
}
