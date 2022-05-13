import React from "react";
function Says(){
    return(
        <div>
            <Welcome name="Malini"/>
        </div>
    )
}

function Welcome(props)
{
    return(
    <h1>Here {props.name}</h1>
    )
}

export default Says;
