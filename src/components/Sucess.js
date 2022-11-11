import React from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{
   const navigate=useNavigate();
   setTimeout(()=>{
      navigate('/account')
   },3000)
   return (
      <div>
         Your data has been received 
      </div>
   )
}

export default Success