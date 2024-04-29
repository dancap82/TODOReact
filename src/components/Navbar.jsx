import home from "./assets/homeicon.svg";
import logo from "./assets/logo.svg";
import profile from "./assets/profileicon.svg";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100" id="navbarNav">
                    <a className="navbar-brand right" href="#">
                        <img src={home} alt="Home-logo" className="img-fluid" />
                    </a>
                    <a className="navbar-brand mx-auto" href="#">
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </a>
                    <a className="navbar-brand mx-left" href="#">
                        <img src={profile} alt="Profile-logo" className="img-fluid" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
