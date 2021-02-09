import React, { Component } from "react";
import Header from "./component/Header";
import Dropdown from "./component/Dropdown";
import Footer from "./component/Footer";
import "./App.css";

// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//             <Dropdown />
//             <Footer />
//         </div>
//     );
// }


// class Casino extends Component {
//     constructor(props) {
//         super(props) {
//             this.state = {
//                 casino: {"Aria", "Southpoint", "Venetian"}
//             }
//         }
//     }

//     render() {

//     }
// }


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
