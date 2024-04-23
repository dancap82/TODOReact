
import 'bootstrap/dist/css/bootstrap.min.css'
import heroImg from '../assets/Hero.jpg'
import homeLogo from '../assets/Home.svg';
import logoPlannow from '../assets/Logo-svg.svg';
import profLogo from '../assets/Profile.svg';



function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <div className="container"> */}
                    <div className="d-flex justify-content-between align-items-center w-100" id="navbarNav">
                        <a className="navbar-brand right" href="index.html">
                            <img src={homeLogo} alt="Home-logo" className="img-fluid" />
                        </a>
                        <a className="navbar-brand mx-auto" href="index0.html">
                            <img src={logoPlannow} alt="Logo" className="img-fluid" />
                        </a>
                        <a className="navbar-brand mx-left" href="index0.html">
                            <img src={profLogo} alt="Profile-logo" className="img-fluid" />
                        </a>
                    </div>
                {/* </div> */}
            </nav>


            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col">
                        <div className="hero-section text-center text-dark py-5" style={{backgroundImage: `url(${heroImg})`, backgroundSize: 'cover'}}>
                            <h1 className="display-5 fw-bold">Hello, <span id="username"></span>!</h1>
                            <h2 className="display-5" id="today"></h2>
                            <h3 className="display-6" id="currentDate"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


    export default Header;