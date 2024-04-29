import heroImage from "./assets/hero.jpg";

function Hero() {

    const currentDate = new Date().toLocaleDateString('en-GB');

    return (
        <hero>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col">
                        <div className="hero-section text-center text-dark py-5" style={{backgroundImage: `url(${heroImage})`, backgroundSize: 'cover'}}>
                            <h1 className="display-4 fw-bold">Hello, Daniele! </h1>
                            <h2 className="display-5">Today is {currentDate}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </hero>
    )
}

export default Hero;