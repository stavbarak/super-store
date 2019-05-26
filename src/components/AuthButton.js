import React from 'react';
import Button from 'react-bootstrap/Button';


const AuthButton = ({onAuthClick, text, variant}) => {
    return (
        <Button variant={ variant } onClick={onAuthClick}> 
            <span className="buttonContent"><i className="fab fa-google"></i></span>
            <span className="buttonContent"> { text }</span> 
        </Button> 
    )
}

export default AuthButton;