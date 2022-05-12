import React from "react";

        const Coffee = () => {
            return(
                            <div className="objects">
                                <Drink statement={{
                                    filter:'GoodTaste', 
                                    normal:'Strong',
                                    
                                }} />
                            </div>
                        )}
        const Drink = ( { statement } )=>{
            return(
                <div className="coffee">
                           <h2 style={ { color:'Brown'} }>{statement.filter}</h2>
                            <h2 style={ { color:'Brown' } }>{statement.normal}</h2>
                            
                        </div>
                    )}
export default Coffee;