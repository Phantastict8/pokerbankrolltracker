import React, { Component } from "react";
import Header from "./component/Header";
import Dropdown from "./component/Dropdown";
import Footer from "./component/Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Dropdown />
                <Footer />
            </div>
        );
    }
}

export default App;


