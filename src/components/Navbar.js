import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../navbar.css"


function Navbar() {
    return (
        <nav className="nav">
                <Link className="site-logo" to="/">Logo</Link>

            <ul>
                <li>
                    <Link to="/">Konto</Link>
                </li>
                <li>
                    <Link to="/">Książki</Link>
                </li>
                <li>
                    <Link to="/">Wydarzenia</Link>
                </li>
                <li>
                    <Link to="/">Kontakt</Link>
                </li>
                <li>
                    <Link to="/">Lupa</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;