import React from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{
   const navigate=useNavigate();
/*    let timeLeft=3;
   var downloadTimer = setInterval(function(){
     if(timeLeft <= 0){
       clearInterval(downloadTimer);
     } else {
       return (
         <>
            <p>Your data has been received</p>
            <p>You will be redirected to you account in {timeLeft}</p>
         </>
       )
     }
     timeLeft -= 1;
   }, 1000); */

   setTimeout(()=>{
      navigate('/account')
   },3000)
   return (
      <div>
         <p>Your data was successfully received</p>
         <p>Redirecting to the home page...</p>
      </div>
   )
}

export default Success;