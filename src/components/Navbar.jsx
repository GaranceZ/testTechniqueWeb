import React, { useState } from 'react';
import '../styles/NavbarStyle.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <nav className="NavbarContainer">
                <div className="TopBar">
                <div className="menu-toggle" onClick={toggleBurger}>
                <span>&#9776;</span>
            </div>
                    <div className="LeftPart">
                        <p>Lorem Ipsum</p>
                    </div>

                </div>
                <div className={`Links_Register ${isOpen ? 'active' : ''}`} onClick={toggleBurger}>
                <div className="Links">
                    <ul className='linksList'>
                        <li><a>Home</a></li>
                        <li>Courses</li>
                        <li>Instructors</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="RightPart">
                    <div className='SearchIcon'>
                        <i className='bx bx-search bx-sm'></i>
                    </div>
                    <div className='LoginRegisterContainer'>
                        <button className='Login'>Login</button>
                        <button className='Register'>Register</button>
                    </div>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
