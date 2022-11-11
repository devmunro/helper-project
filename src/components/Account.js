import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

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
         <p>Your profile photo:</p>
         { 
            user.photoURL? 
            <img src={user.photoURL} alt="profile"/>:
            <div className='border border-black rounded-full w-5 flex content-center'>{user.email.slice(0,1)}</div>
         }
         <button onClick={handleLogout} className='border px-6 py-2 my-4 absolute top-0 right-0 h-16 w-40 '>Log out</button>
         <div className='flex justify-between w-full mt-10'>
            <Link className='border-solid border border-black p-2 rounded-lg text-white bg-blue-600 hover:bg-green-600' to="/account/post-help">Post help</Link>
            <Link className='border-solid border border-black p-2 rounded-lg text-white bg-blue-600 hover:bg-green-600' to="/account/search-help">Search help</Link>
         </div>
      </div>
   )
}

export default Account;