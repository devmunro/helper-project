import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"; 
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
  /*     getUsers(); */
         getUsers();
         searchTerm.current.focus();
   },[])

////////////////
   const [filterData,setFilterData]=useState({
      location:'',
      category:'',
      period:'',
    })
  
    console.log(filterData)
  
    const [dataAlreadyFiltered,setDataAlreadyFiltered]=useState([data]);
  
    const updateFilterData=(e)=>{
       const {name,value}=e.target;
       setFilterData(preVal=>{
          return {
            ...preVal,
            [name]:value,
          }
       })
    }
    
    
    
    useEffect(()=>{

      const updateResults=()=>{
      
         if(filterData.location!=='' ||
            filterData.category!=='' ||
            filterData.period!==''
         ){
            const test=data.filter(el=>

               
            ( (el.location===filterData.location || el.category===filterData.category || el.period===filterData.period) || (el.location===filterData.location && el.category===filterData.category)
            ))        
            
            
            return setDataAlreadyFiltered(test);
           
            
         }else{ return  setDataAlreadyFiltered(data)
          
          
         }
        
       
      }

      console.log(filterData);
      updateResults();
    },[filterData, data])

    /////////////


    console.log(dataAlreadyFiltered);



   return (
      <div>
         <Search update={updateSearch} word={searchTerm} filterData={filterData} updateFilterData={updateFilterData} updatedata={data}/>
         
         {data!==[] && (
                  <Help
                     filter={searchValue}
                     data={dataAlreadyFiltered}
                  />
            )
         }
      </div>
   )
}

export default SearchHelp;