import React from 'react';
import HeroImage from '../assets/Hero.jpg';

function Hero() {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col">
                    <div className="hero-section text-center text-dark py-5" style={{backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover'}}>
                        <h1 className="display-4 fw-bold">Hello!</h1>
                        <h2 className="display-5">Today</h2>
                        <h3 className="display-6">Date</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;