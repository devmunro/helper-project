import React, { useEffect, useState, useRef, createContext } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messageData, setMessageData] = useState([]);
 
  //get db Firebase
  const getUsers = async () => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("name", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessageData(
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
    messageData,
    setMessageData,
    
  };
  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
};
