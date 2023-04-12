import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import {ContainerSize} from "../components/Container.styles";

const Layout = () => {
    return (
        <ContainerSize>
            <Navbar />
            <Outlet />
            <Footer />
        </ContainerSize>

    );
};

export default Layout;
