import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style.css"
import "../normalize.css"
import "../vendor.css"
import "../icomoon.css"

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">

                        <div className="footer-item">
                            <div className="company-brand">
                                <p>logo</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus
                                        liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna.
                                        Adipiscing fames semper erat ac in suspendisse iaculis.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-2">

                        <div className="footer-menu">
                            <h5>O nas</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="components#">Zespół</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-2">

                        <div className="footer-menu">
                            <h5>Odwiedź</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="components#">Strona Główna</a>
                                </li>
                                <li className="menu-item">
                                    <a href="components#">Książki</a>
                                </li>
                                <li className="menu-item">
                                    <a href="components#">Wydarzenia</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-2">

                        <div className="footer-menu">
                            <h5>Moje konto</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="components#">Logowanie</a>
                                </li>
                                <li className="menu-item">
                                    <a href="components#">Mój profil</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-2">

                        <div className="footer-menu">
                            <h5>Pomoc</h5>
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="components#">Kontakt</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;