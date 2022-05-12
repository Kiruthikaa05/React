import React from "react";
import { useState } from "react";


const Person=()=>{
    const[Name,setName]=useState(
        {
            FirstName:"kiruthikaa",
            lastName:"T",
            dept:"cse",
        }
    )
    return(
        <div className = "person">
            <h3>FirstName is:{Name.FirstName}</h3>
            <p>lastName is : {Name.lastName}</p>

        </div>
    )
}
export default Person; 