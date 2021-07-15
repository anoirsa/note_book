import React from 'react'
import {Link} from 'react-router-dom';
import "./ButtonSign.css"

export function ButtonSign({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) {
    
    const STYLES = ['btn--primary' , 'btn--outline'];
    const SIZES = ['btn--medium' , 'btn--large'];
    const checkButtonStyle =  STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <>
        <Link to="/" className="btn-mobile">
            <div
                className ={`${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type = {type}
            >{children}
            </div>
            </Link>
        </>
    )
}

export default ButtonSign
