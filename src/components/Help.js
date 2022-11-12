import React from "react";

const Help=({name,title,message,filter,age,data})=>{
   console.log(filter);
   return (
      <div>
         {filter==='all' &&       
            <div className="border border-2 border-solid m-4">
               <p>Name: {name}</p>
               <p>Age: {age}</p>
               <p>Message: {message}</p>
               <p>Title: {title}</p>
            </div>}
            {/* {filter!=='all' && data.filter(el=>console.log(el.name===filter))} */}
      </div>
   )
}

export default Help;