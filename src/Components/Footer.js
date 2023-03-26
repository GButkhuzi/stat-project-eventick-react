import "./Footer.css";

const Footer = () => {
    return (
        <div className="maincontainer">
            <footer className="footer-section">
                {/* <div> */}
                <div className="footer-container">
                    <div className="footer-container__logo-container header-container">
                        <h2> <img src={require("./images/Vector.png")} alt="" />Event<span>ick</span></h2>
                        <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone
                            to
                            create, share, find and attend events that fuel their passions and enrich their lives.</p>
                        <div>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="footer-container__plan-container">
                        <h3>Plan Events</h3>
                        <ul>
                            <li>Create and Set Up</li>
                            <li>Sell Tickets</li>
                            <li>Online RSVP</li>
                            <li>Online Events</li>
                        </ul>
                    </div>
                    <div className="footer-container__enverick">
                        <h3>Eventick</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Contac Us</li>
                            <li>Help Center</li>
                            <li>How it Works</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="footer-container__subscribe">
                        <h3>Stay in the loop</h3>
                        <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                        <button>blaaaaaaaaaaaaaaaa</button>
                    </div>
                </div>
                <div className="breake-line"></div>
                <div className="footer-copyright">Copyright © 2022 Avi Yansah</div>
            </footer>
        </div>
    )
}

export default Footer;