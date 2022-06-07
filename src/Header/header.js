import React from "react";
import './header.css';

const header = (props) => {
    return (
        <div className="Header">
           <h2>{props.bankName}</h2> 
           <h3>{props.bankNumber}</h3>
           <h4>{props.rupees}</h4>
           <img src="hdfcbanklogo.png"></img>
        </div>
        
    )
};

export default header;