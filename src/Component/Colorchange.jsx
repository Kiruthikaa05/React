import React from "react";
import { useState } from "react";
const Colorchange =()=>{
    const[color,setColor] = useState("");
    return(
        <div className="chnge">
            <h2>The color is  <p style={{color}}>{color}</p>!</h2>
            <button type="button" onClick={()=>setColor("black")}>Black</button>
            <button type="button" onClick={()=>setColor("pink")}>Pink</button>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("green")}>Green</button>
        </div>
    )
}
export default Colorchange;