import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <Link to={"/home"} >Home</Link> | 
                        <Link to={"/about"} >About</Link> |
                        <Link to={"/card"} >card</Link>
                        
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                
        </div>
    );
}

export default Header;