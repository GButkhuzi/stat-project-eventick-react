import "./Blogsection.css";

const Blogsection = () => {
    return (
        <div className="maincontainer">
            <section className="blogs">
                <div className="blogs__header">
                    <h1>Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="blogs-container">
                    <div className="blogs-container__cards">
                        <div className="blogs-container__cards__background">
                            <img src={require("./images/cards2/1.png")} alt="" />
                        </div>
                        <div className="blogs-container__cards__text-container">
                            <h3>6 Strategies to Find Your Conference Keynote and Other Speakers</h3>
                            <p>Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu
                                mengikuti
                                beberapa langkah mudah.</p>
                            <span>12 Mar - Jhon Doe</span>
                        </div>
                    </div>
                    <div className="blogs-container__cards">
                        <div className="blogs-container__cards__background">
                            <img src={require("./images/cards2/2.png")} alt="" />
                        </div>
                        <div className="blogs-container__cards__text-container">
                            <h3>How Successfully Used Paid Marketing to Drive Incremental Ticket Sales</h3>
                            <p>Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu
                                mengikuti
                                beberapa langkah mudah.</p>
                            <span>12 Mar - Jhon Doe</span>
                        </div>
                    </div>
                    <div className="blogs-container__cards">
                        <div className="blogs-container__cards__background">
                            <img src={require("./images/cards2/3.png")} alt="" />
                        </div>
                        <div class="blogs-container__cards__text-container">
                            <h3>Introducing Workspaces: Work smarter, not harder with new navigation</h3>
                            <p>Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu
                                mengikuti
                                beberapa langkah mudah.</p>
                            <span>12 Mar - Jhon Doe</span>
                        </div>
                    </div>

                    <div className="blogs__button">
                        <button>Load More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Blogsection; 