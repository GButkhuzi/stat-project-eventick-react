import "./Cardsection.css";

const Cardsection = () => {
    return (
        <div className="maincontainer">
        
        <section className="card-section">
            <div className="upcoming-filter">
                <h2>Upcoming Events</h2>
                <form action="">
                    <select name="Weekdays" id="Weekdays">
                        <option value="Weekdays" selected>Weekdays</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                    <select name="Event Type" id="Event Type">
                        <option value="Event Type" selected>Event Type</option>
                        <option value="Event One">Event One</option>
                        <option value="Event Two">Event Two</option>
                        <option value="Event Three">Event Three</option>
                    </select>
                    <select name="Any Category" id="">
                        <option value="Event Type" selected>Any Category</option>
                        <option value="Category One">Category One</option>
                        <option value="Category Two">Category Two</option>
                    </select>
                </form>
            </div>
    
            <div className="card-container">
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card1.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div class="cards__text-container__date">
                            <span>APR</span>
                            <p>14</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
    
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card2.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div className="cards__text-container__date">
                            <span>AUG</span>
                            <p>20</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>JYJ 2011 JYJ Worldwide Concert Barcelona</h3>
                            <p>Directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
    
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card3.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div className="cards__text-container__date">
                            <span>SEP</span>
                            <p>18</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>2011 Super Junior SM Town Live '10 World Tour New York City</h3>
                            <p>Directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
    
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card4.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div className="cards__text-container__date">
                            <span>APR</span>
                            <p>14</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
    
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card5.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div className="cards__text-container__date">
                            <span>AUG</span>
                            <p>20</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>JYJ 2011 JYJ Worldwide Concert Barcelona</h3>
                            <p>Directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
    
                <div className="cards">
                    <div className="cards__background">
                        <img src={require("./images/cards/card6.png")} alt="html image"/>
                    </div>
                    <div className="cards__text-container">
                        <div className="cards__text-container__date">
                            <span>SEP</span>
                            <p>18</p>
                        </div>
                        <div className="cards__text-container__text">
                            <h3>2011 Super Junior SM Town Live '10 World Tour New York City</h3>
                            <p>Directly seated and inside for you to enjoy the show.</p>
                        </div>
                    </div>
                </div>
                <div className="card-container__button">
                    <button>Load More</button>
                </div>
    
    
    
            </div>
    
    
    
    
    

    
        </section>

    </div>
    )
}


export default Cardsection;