import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account=()=>{
   const {user,logout}=UserAuth();
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
      <div className='relative max-w-[600px] mx-auto my-16 p4'>
         <h1 className="text 2xl font-bold py-4">Dashboard</h1>
         <p>You are log in as: {user && user.email}</p>
         <button onClick={handleLogout} className='border px-6 py-2 my-4 absolute top-0 right-0 h-16 w-40 '>Log out</button>
      </div>
   )
}

export default Account;