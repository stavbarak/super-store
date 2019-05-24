import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="top-nav">
             <div className="brand" >
                 Some Brand
             </div>
             <div>
                 <GoogleAuth />
             </div>
        </div>
         
       
    )
}


export default Header;