import React from 'react';
import homeIcon from './assets/homeicon.svg';
import profileIcon from './assets/profileicon.svg';
import logo from './assets/logo.svg';
import heroImage from './assets/hero.jpg';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100" id="navbarNav">
            <a className="navbar-brand right" href="#">
              <img src={homeIcon} alt="Home-logo" className="img-fluid" />
            </a>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} alt="Logo" className="img-fluid" />
            </a>
            <a className="navbar-brand mx-left" href="#">
              <img src={profileIcon} alt="Profile-logo" className="img-fluid" />
            </a>
          </div>
        </div>
      </nav>
    );
  }

function Hero() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col">
          <div className="hero-section text-center text-dark py-5" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}>
            <h1 className="display-4 fw-bold">Hello, ! </h1>
            <h2 className="display-5">Today</h2>
            <h3 className="display-6">Date</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;