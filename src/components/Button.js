import React from 'react'
import {Link} from 'react-router-dom';
import "./Button.css"


function Button(props) {

    return (
        <div 
            className={props.cName}>
            <p>{props.text} {props.iconPut && <i  className="far fa-play-circle" />} </p>

        </div>
         )
} 

export default Button