import React from "react";
import './Badge.css'

const Badge = ({title}) => {
    return(
        <div>
            <span className="container_badge">{title}</span>
        </div>
    )
}

export default Badge;