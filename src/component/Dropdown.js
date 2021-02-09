import React, { Component } from "react";

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <h1>This is the a Dropdown</h1>
                <input type="date"></input>
                <select>
                    <option>Casino</option>
                    <option>Southpoint</option>
                    <option>Wynn</option>
                    <option>Aria</option>
                    <option>Venetian</option>
                    <option>Bellagio</option>
                </select>
                <select>
                    <option>Game</option>
                    <option>Texas Hold Em</option>
                    <option>Pot Limit Omaha</option>
                    <option>Seven Card Stud</option>
                </select>
                <select>
                    <option>Stakes</option>
                    <option>1/2</option>
                    <option>2/5</option>
                    <option>5/10</option>
                </select>
                <input type="time"></input>
                <input type="time"></input>
                <select>
                    <option>Win</option>
                    <option>Loss</option>
                </select>

            </div>
        );
    }
}

export default Dropdown