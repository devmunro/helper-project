import React, { useEffect, useState, useRef, } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db } from "../../firebase";
import Help from "./Help";
import Search from "./Search";

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
         getUsers();
         searchTerm.current.focus();
   },[])
   
   ////
   const [filterData,setFilterData]=useState({
      location:'',
      category:'',
      period:'',
    })

    const updateFilterData=(e)=>{
      const {name,value}=e.target;
      setFilterData(preVal=>{
         return {
           ...preVal,
           [name]:value,
         }
      })
   }

   const updateResults=()=>{
      const arr=[];
       if(filterData.location!=='' &&
          filterData.category!=='' &&
          filterData.period!==''
       ){
          const el=data.find(el=>el.location===filterData.location && el.category===filterData.category && el.period===filterData.period);
          console.log(el);
          if(el){
            arr.push(el);
          }
          setData(arr);
          console.log(data);
       }else{
        console.log('Need more specification');
       }
    }

    const reset=()=>{
      getUsers();
      setFilterData({
         location:'',
         category:'',
         period:'',
       })
    }
    
    useEffect(()=>{
      updateResults();
    },[filterData])
   ////

   return (
      <div>
         <Search update={updateSearch} word={searchTerm} filterData={filterData} updateFilterData={updateFilterData} />
         <button onClick={reset}>Reset filters</button>
         
         {data!==[] && (
                  <Help
                     key={data.user}
                     filter={searchValue}
                     data={data}
                  />
            )
         }
      </div>
   )
}

export default SearchHelp;