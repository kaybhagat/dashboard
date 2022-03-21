import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
                <ul className="navbar_list">
                    <li>
                        <NavLink to='/'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Page1' >Page 1</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Page2' >Page 2</NavLink>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar;