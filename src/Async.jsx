import React from "react";
import { useState } from "react";

const Async = () => {
    const [count,setCount] = useState(0)

    const handleIncrease =() =>{
        setTimeout( () => setCount(count+1), 3000)
    }
    const handledecrease =() =>{
        setTimeout( () => setCount(count-1), 2000)
    }
    return(
        <div className="Async">
            <hr />
           <h3> Count:{ count } </h3> 
            <div className="button">
                <button type="button" onClick={handleIncrease}>Increase</button>
                <button type="button" onClick={handledecrease}>Decrease</button>
            </div>
        </div>
    )}
export default Async;