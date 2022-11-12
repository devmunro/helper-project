import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import LogoutButton from './logout';

const Account=()=>{
   const {user,logout, handleLogout}=UserAuth();
   const navigate=useNavigate();
  
   

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
        <LogoutButton handleLogout={handleLogout}/>
         <div className='flex justify-between w-full mt-10'>
            <Link className='border-solid border border-black p-2 rounded-lg text-white bg-blue-600 hover:bg-green-600' to="/account/post-help">Post help</Link>
            <Link className='border-solid border border-black p-2 rounded-lg text-white bg-blue-600 hover:bg-green-600' to="/account/search-help">Search help</Link>
         </div>
      </div>
   )
}

export default Account;