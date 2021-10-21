import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css';


const Header = ({searchQuery}) => {
    
    return (
        <div className='backgroundHeader'>  

            <div className="logo">
                <img src={logo} alt="logo" />
            </div> 

            <div className="headersearch">
                <h1 className="textsearch">Search Results for: {searchQuery}</h1>
                <button className="home"><a href="/">Home</a></button>
            </div>

        </div>
    )
}

export default Header
