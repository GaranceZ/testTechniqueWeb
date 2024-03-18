import React from 'react';
import '../styles/NavbarStyle.css'
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    return ( 
        <>
        <nav className="NavbarContainer">
            <div className="LeftPart">
                <p>Lorem Ipsum</p>
            </div>

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

        </nav>
        </>
     );
}
 
export default Navbar;