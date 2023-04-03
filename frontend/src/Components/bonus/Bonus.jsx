import React from "react";
import Badge from "../badge/Badge";
import './Bonus.css'

const Bonus = () => {
    return(
        <div className="container_bonus">
            <Badge title='EXCLUSIVE'/>
            <span className="title">Title</span>
            <div className="bonus">
                <span>250 CA$</span>
            </div>
            <span style={{fontSize:'20px'}}>+80 Tours Gratuits</span>
        </div>
    )
}

export default Bonus;