import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style.css"
// import "../normalize.css"
// import "../vendor.css"
// import "../icomoon.css"

function Navbar() {
    return (
        <div id="header-wrap">
            {/*<header id="header">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}

            {/*            <div className="col-md-2">*/}
            {/*                <div className="main-logo">*/}
            {/*                    <p>BOOKMATES</p>*/}
            {/*                </div>*/}

            {/*            </div>*/}

            {/*            <div className="col-md-10">*/}
            {/*                <nav id="navbar">*/}
            {/*                    <div className="main-menu stellarnav">*/}
            {/*                        <ul className="menu-list">*/}
            {/*                            <li className="menu-item active"></li><a href="#" className="user-account for-buy"><i*/}
            {/*                                    className="icon icon-user"></i>Konto</a>*/}
            {/*                                <li className="menu-item "><Link to="/books" className="nav-link" data-effect="Books">Książki</Link></li>*/}
            {/*                                <li className="menu-item "><Link to="/" className="nav-link" data-effect="Wydarzenia">Wydarzenia</Link></li>*/}
            {/*                                <li className="menu-item "><Link to="/" className="nav-link" data-effect="Kontakt">Kontakt</Link></li>*/}
            {/*                                <div className="action-menu">*/}

            {/*                                    <div className="search-bar">*/}
            {/*                                        <a href="#" className="search-button search-toggle"*/}
            {/*                                           data-selector="#header-wrap">*/}
            {/*                                            <i className="icon icon-search"></i>*/}
            {/*                                        </a>*/}
            {/*                                        <form role="search" method="get" className="search-box">*/}
            {/*                                            <input className="search-field text search-input"*/}
            {/*                                                   placeholder="Search" type="search"></input>*/}
            {/*                                        </form>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                </ul>*/}
            {/*                                <div className="hamburger">*/}
            {/*                                    <span className="bar"></span>*/}
            {/*                                    <span className="bar"></span>*/}
            {/*                                    <span className="bar"></span>*/}
            {/*                                </div>*/}
            {/*                    </div>*/}
            {/*                </nav>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
        </div>
    );
}

export default Navbar;