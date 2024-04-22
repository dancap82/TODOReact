import React from 'react';
import ProfileImage from '../assets/Profile.svg';
import HomeImage from '../assets/Home.svg';
import LogoImage from '../assets/Logo-svg.svg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100" id="navbarNav">
                    <a className="navbar-brand right" href="#">
                        <img src={HomeImage} alt="Home-logo" className="img-fluid" />
                    </a>
                    <a className="navbar-brand mx-auto" href="#">
                        <img src={LogoImage} alt="Logo" className="img-fluid" />
                    </a>
                    <a className="navbar-brand mx-left" href="#">
                        <img src={ProfileImage} alt="Profile-logo" className="img-fluid" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;