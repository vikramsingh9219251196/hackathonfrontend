import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <FiMenu />
            </div>
            <div className={`links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/user-home" onClick={toggleMenu}>User</Link>
                <Link to="/ragpicker-home" onClick={toggleMenu}>Rag Picker</Link>
                <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                <div className="dropdown">
                    <button className="dropbtn">Account</button>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
            <form className={`search-bar ${isOpen ? 'open' : ''}`} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search by location..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
