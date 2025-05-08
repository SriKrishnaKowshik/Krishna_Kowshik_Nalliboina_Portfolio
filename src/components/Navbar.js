import React from "react";
import './Navbar.css';
import logo from '../assets/iconk.png';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" className="Logo" />
            <h3>Kowshik</h3>
        </nav>
        
    )
}

export default Navbar;
