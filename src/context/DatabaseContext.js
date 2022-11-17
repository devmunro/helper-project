import React, { useEffect, useState, useRef, createContext } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const searchTerm = useRef();
  const [searchValue, setSearchValue] = useState("");

  //updatesearch function
  const updateSearch = () => {
    setSearchValue(searchTerm.current.value);
  };

  //get db Firebase
  const getUsers = async () => {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, orderBy("name", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.user ? doc.user : "",
        }))
      );
    });
    return unsubscribe;
  };
  useEffect(() => {
   
    getUsers();
    // searchTerm.current.focus();
  }, []);


  /////////////////

  //Dropdown Flter functions
  const [filterData, setFilterData] = useState({
    location: "",
    category: "",
  });

  const [dataAlreadyFiltered, setDataAlreadyFiltered] = useState([data]);

  const updateFilterData = (e) => {
    const { name, value } = e.target;
    setFilterData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const updateResults = () => {
      if (filterData.location !== "" && filterData.category === "") {
        const justLocation = data.filter(
          (el) => el.location === filterData.location
        );

        return setDataAlreadyFiltered(justLocation);
      } else if (filterData.category !== "" && filterData.location === "") {
        const justCatergory = data.filter(
          (el) => el.category === filterData.category
        );

        return setDataAlreadyFiltered(justCatergory);
      } else if (filterData.location !== "" && filterData.category !== "") {
        const test = data.filter(
          (el) =>
            el.location === filterData.location &&
            el.category === filterData.category
        );

        return setDataAlreadyFiltered(test);
      } else {
        return setDataAlreadyFiltered(data);
      }
    };

    console.log(filterData);
    updateResults();
  }, [filterData, data]);

  const value = {
    data,
    setData,
    searchTerm,
    searchValue,
    updateSearch,
    filterData,
    setFilterData,
    updateFilterData,
    dataAlreadyFiltered,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
