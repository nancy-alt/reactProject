import React from "react";
import classes from './Card.module.css';
function Card(props){
    return(
        //we r merging external class card with an internal classname like input used in adduser by using `` sanks for ur attension
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
}
export default Card;