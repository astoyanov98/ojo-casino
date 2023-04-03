import React from "react";
import './Button.css'

const Button = ({label}) => {
    return(
        <div className="buttonContainer">
            <span>{label}</span>
        </div>
    )
}

export default Button;