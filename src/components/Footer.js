import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { footerDetails,contactIcons} from './Data'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="introduction-container">
            <h1> Join the Adventure newsletter to receive our best vacation deals</h1>
                <p>You can unsbscribe at any time</p>
                <div className="from-container">
                    
                     <input 
                        type="email"
                        name="email"
                        className="email-input"
                        placeholder="Your email"
                    />
                    <Button cName = "btn--outline" text="Subscribe" /> 
                     
                 </div>
            </section>
            <section className="information-container">
                <div className="details--container">
                    {footerDetails.map((value, index) => {
                        return (
                            <div> 
                               <h3>{value.title}</h3>
                                <Link className="linki" >{value.line_1}</Link>
                                <Link className="linki" >{value.line_2}</Link>
                                <Link className="linki" >{value.line_3}</Link>
                                <Link className="linki" >{value.line_4}</Link>
                                {index == 0 && <Link className="linki">{value.line_5}</Link>}
                            </div>
                        )
                    })}
                   
                </div>

                <div className="contact-container">
                    <div>
                    <Link to="/" className = "logo" >
                    <h2>NOTEBOOK</h2>
                    <i className="fab fa-typo3"/>
                    </Link>
                    
                    </div>
                    <div>

                    </div>
                    <div>
                   {contactIcons.map((value, index) => {
                       return (
                           <Link className="link--item">
                               <i  className={value.class}/>
                           </Link>
                       )
                   })}
                   
                    </div>
                </div>
            </section> 
            
        </div>
    )
}

export default Footer
