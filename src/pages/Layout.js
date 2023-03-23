import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from '@mui/material/Container';
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
