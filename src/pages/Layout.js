import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import {MainContainer} from "../components/Container.styles";

const Layout = () => {
    return (
        <MainContainer maxWidth={false}>
            <Navbar />
            <Outlet />
            <Footer />
        </MainContainer>

    );
};

export default Layout;
