import "./Eventsection.css";

const Eventsection = () => {
    return (
        <div className="maincontainer">
            <section className="create-event">
                <div><img src={require("./images/event-crate-bckgr.png")} alt="" /></div>
                <div className="create-event__text-container">
                    <h2>Make your own Event</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button>Create Events</button>
                </div>
            </section>
        </div>
    )
}



export default Eventsection;