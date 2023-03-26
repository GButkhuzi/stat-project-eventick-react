import "./Searchbox.css";

const Searchbox = () => {
    return (
        <div className="maincontainer">
            <div className="search-box">
                <form action="">
                    <label for="Search Event">Search Event</label>
                    <br />
                    <input type="text" id="Search Event" name="Search Event" placeholder="Konser Jazz" />
                </form>

                <form action="">
                    <label for="Place">Place</label>
                    <br />
                    <input type="text" id="Place" name="Place" placeholder="Indonesia" />
                </form>

                <form action="">
                    <label for="Time">Time</label>
                    <br />
                    <select name="Time" id="Time">
                        <option value="Any date" selected>Any date</option>
                        <option value="APR">APR</option>
                        <option value="AUG">AUG</option>
                        <option value="SEP">SEP</option>
                    </select>
                </form>
            </div>
        </div>

    )
}


export default Searchbox;

