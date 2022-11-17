import React, { useEffect, useState, useRef, createContext } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const AppliedContext = createContext();

export const AppliedProvider = ({ children }) => {
  const [appliedData, setAppliedData] = useState([]);
 
  //get db Firebase
  const getUsers = async () => {
    const collectionRef = collection(db, "applied");
    const q = query(collectionRef, orderBy("name", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        setAppliedData(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          // id: doc.user ? doc.user : "",
          id: doc.id
        }))
      );
    });
    return unsubscribe;
  };
  useEffect(() => {
   
    getUsers();
    
  }, []);



  const value = {
    appliedData,
    setAppliedData,
    
  };
  return (
    <AppliedContext.Provider value={value}>
      {children}
    </AppliedContext.Provider>
  );
};
