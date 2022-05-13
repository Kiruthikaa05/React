import React, { useState } from "react";

const Convertor = () =>{
    return(
    <div>
        <h1>INR to Dollor</h1>
        <Amount toCurrency = { (amount) => <Dollor amount={amount} />} />
        <h1>INR to Pound</h1>
        <Amount toCurrency = { (amount) => <Pound  amount={amount} />} />
    </div>
)}

const Amount = ( { toCurrency }) =>{
    const [ amount, setAmount ] = useState(0)

    const handleIncrement = () => { setAmount (amount +1 )}
    const handledecrement = () => { setAmount (amount -1 )}
    return(
        <div className="child">
            <button type="button" onClick={handleIncrement}>INC </button>
            <button type="button" onClick={handledecrement}>DEC </button>
            <p> INR rupees is : { amount} </p>
            {toCurrency(amount)}

        </div>
    )}
    const Dollor =( {amount}) => <p> Dollar: {amount * 0.27} </p>
    const Pound = ({amount}) => <p> Pound: {amount * 0.76} </p>

export default Convertor; 
