import React from "react";
import { useState } from "react";

const Propvsstate = () =>{
    const [invite, setInvite] =useState('This an example')
    const [show, setShow]=useState(false);
    const handleToggle=()=>{
        setShow(show)
    }
    const handleChange= (event) =>{
        setInvite(event.target.value)
    }
    return(
        <div className="state">
            <button onClick={handleToggle} type="button">Toggle</button>
            <input type="text" value={invite} onChange={handleChange} />
            { show ? <Welcome display={invite} /> : null }
        </div>
    )}
const Welcome =({ display })=>{
    <div className="component">
        return <h2 >{display}</h2>
    </div>
}
export default Propvsstate; 