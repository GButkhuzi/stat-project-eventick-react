import "./Header.css";

const Header = () => {
    return (
        <nav className="maincontainer">
            <header>
                <div className="background-pic-one">
                    <div className="background-pic-two">
                        <div className="header-container">
                            <h2> <img src={require("./images/Vector.png")} alt="" />Event<span>ick</span></h2>
                            <ul>
                                <li>Schedule</li>
                                <li>Speakers</li>
                                <li>Ticket</li>
                                <li>Contact</li>
                                <button class="trasnparant-button">Login</button>
                            </ul>
                        </div>
                    </div>
                    <div className="band-container">
                        <div className="band-container-pic"></div>
                        <div className="band-container-text">
                            <h1>SBS MTV The Kpop Show Ticket Package</h1>
                            <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live
                                Kpop
                                recording.</p>
                            <div className="buttons">
                                <button>Get Ticket</button>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Header;