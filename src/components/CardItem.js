import React from 'react'
import { Link } from 'react-router-dom';
import "./Cards.css";

function CardItem(props) {
    return (
        
            <Link className ="card-item-link">
                <figure className="card-figure">
                   <img src="/images/img-9.jpg"  alt="fff" className="imgConfig"/>
                <div className="imgDes">{props.label}</div>
                </figure>

                <div className="description">
                    <h3>{props.text}</h3>
                </div>
            </Link>

            
            
        
    )
}

export default CardItem


/**
 function CardItem(props) {
    return (
        
            <Link className ="card-item-link">
                <figure className="card-figure">
                   <img src="/images/img-9.jpg"  alt="fff" className="imgConfig"/>
                   
                </figure>

                <div className="description">
                    <h3>{props.text}</h3>
                </div>
            </Link>

            
            
        
    )
}
 */
