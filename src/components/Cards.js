import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="card">
                <div className="card-container">
                    <h3>CHECK OUR DESTINATIONS !</h3>
                    <CardItem
                        src="../images/img-9.jpg"
                        text = "Disover the montains near Alabama "
                        label = "ADVENTURE"
                    />

                </div>

            
        </div>
    )
}

export default Cards
