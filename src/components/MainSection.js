import React from 'react'
import './MainSection.css';
import myVideo from '../videos/video-2.mp4'
import Button from './Button.js'

function MainSection() {
    return (
        <div className="main-section">
            <h1>READY FOR THE NEW ADVENUTRE !!</h1>

            <p CLAS>New jounney is awaiting you !</p>
        
            <div className="btns-container">
               <Button cName="btn-transparent" text="GET STARTED" />
               <Button cName="btn-primary" text="WATCH TRAILER" iconPut={true} />
            </div> 
            
        </div>
    )
}

export default MainSection
