import React,{createContext,useContext,useEffect,useState} from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserContext=createContext();
export const AuthContextProvider=({children})=>{
   const [user,setUser]=useState();

   const createUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
   }

   const logout=()=>{
      return signOut(auth);
   }

   const signIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
   }

   useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
      })
      return ()=>{
         unsubscribe();
      }
   },[])

   const navigate=useNavigate();
   const handleLogout=async ()=>{
      try{
         await logout();
         navigate('/');
      }
      catch(e){
         console.log(e.message);
      }
   }

   return (
      <UserContext.Provider
         value={{
            createUser,
            user,
            logout,
            signIn,
            handleLogout
         }}
      >
         {children}
      </UserContext.Provider>
   )
}

export const UserAuth=()=>{
   return useContext(UserContext)
}