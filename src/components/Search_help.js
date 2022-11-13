import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db } from "../firebase";
import Help from "./Help";

const SearchHelp=()=>{
   const [data,setData]=useState([]);
   const searchTerm=useRef();
   const [searchValue, setSearchValue]=useState('');

   const updateSearch=()=>{
      setSearchValue(searchTerm.current.value);
   }
   
   const getUsers=async()=>{
      const collectionRef=collection(db,'users');
      const q=query(collectionRef,orderBy('name','desc'));
      const unsubscribe=onSnapshot(q,(snapshot)=>{
         setData(snapshot.docs.map((doc)=>({...doc.data(),id:doc.user?doc.user:''})))
      })
      return unsubscribe;
   }
   useEffect(()=>{
  /*     getUsers(); */
         getUsers();
         searchTerm.current.focus();
   },[])
   return (
      <div>
         <input 
            type="text" 
            ref={searchTerm} 
            onChange={updateSearch}
            className="border-2 border-solid, w-full" 
            placeholder="search your help"
         />

         {data!==[] && (
                  <Help
                     filter={searchValue}
                     data={data}
                  />
            )
         }
      </div>
   )
}

export default SearchHelp;