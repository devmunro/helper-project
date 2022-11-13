import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db } from "../firebase";
import Help from "./Help";
import Search from "./SearchFilter/Search";

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
         <Search update={updateSearch} word={searchTerm}/>
         
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