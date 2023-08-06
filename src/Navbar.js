import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar () {
    return (
        <nav className='Navbar'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/celery">Celery</NavLink>
            <NavLink exact to="/zucchini">Zucchini</NavLink>
            <NavLink exact to="/kale">Kale</NavLink>
            <NavLink exact to="/bokchoy">Bokchoy</NavLink>
            <NavLink exact to="/cucumber">Cucumber</NavLink>
        </nav>
    )
}

export default Navbar;