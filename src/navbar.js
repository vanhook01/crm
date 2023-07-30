import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/myclass">My Class</Link>
                </li>
                <li>
                    <Link to="/athletics">Athletics</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
