import React ,{useState } from 'react'
import {Link} from 'react-router-dom';
import ButtonSign from './ButtonSign.js';
import {navMenus} from './Data.js'
import "./Navbar.css";

function Navbar() {
    const [button, setButton] = useState(true);
    const [click,  setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 560) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    window.addEventListener('resize' , showButton);
    return (
       <>
       <nav className = "navbar">
           <div className="navbar-container">
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                   {navMenus.map((item, index) => {
                       return (
                           <li className="nav-item" key={index}>
                               <Link to={item.link} className="nav-link">
                                    {item.text}
                               
                               </Link>

                           </li>
                       );
                   })}
                   
                   
             {button ? <li className="nav-item"> <ButtonSign buttonStyle="btn--outline">Sign Up </ButtonSign> </li> : 
              <li className="nav-item">
              <Link to="/sign-up" className="nav-link-mobile" >
                         Sign Up
              </Link>
             </li>
             }
                </ul>
               
                <Link to="/" className="navbar-logo">
                    <h2>NOTEBOOK</h2>
                    <i className="fab fa-typo3"/>
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
                </div>
        </nav>
     </>
    )
}

export default Navbar;
