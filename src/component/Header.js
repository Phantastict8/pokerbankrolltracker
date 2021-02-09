import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
// import {NavLink} from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <>
                <Jumbotron className="heading">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img id="candy" src="https://e7.pngegg.com/pngimages/860/694/png-clipart-poker-product-design-logo-font-ace-cards-logo-solitaire.png" alt="Logo" />
                                <h1 id="candy1">Phantastic Bankroll Tracker</h1>

                                <h6 id="candy2">About us</h6>
                                <h6 id="candy2">Contact us</h6>
                                <h6 id="candy2">Resources</h6>
                                <h6 id="candy2">Login</h6>
                            </div>
                        </div>
                    </div>                    
                </Jumbotron>
            </>
        );
    }
}


export default Header




