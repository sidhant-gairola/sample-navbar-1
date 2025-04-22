import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import './navbar.css';

const Navbar = () => {
    const [input, setInput] = useState("");
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className="navbar-box">
                <div className="image-box">in
                    <NavLink to={'/'} ><img src="/logo.png" alt="logo" className="image" /></NavLink>
                </div>
                <div className="mid-container">
                    <FaSearch className='search-icon' />
                    <input type='text' className="search-box" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search here..." />
                </div>

                <button className="menu-button" onClick={() => setDropdown(!dropdown)}><TiThMenu /></button>
                {dropdown && (
                    <div className="dropdown-list">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                        <NavLink to={'/about'}>About us</NavLink>
                        <NavLink to={'/signup'}>Sign up</NavLink>
                    </div>
                )}

                <div className="menu-box">
                    <NavLink to={'/'} >Home</NavLink>
                    <NavLink to={'/contact'} >Contact</NavLink>
                    <NavLink to={'/about'} >About us</NavLink>
                    <NavLink to={'/signup'} >Sign up</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
