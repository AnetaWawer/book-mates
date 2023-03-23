import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from '@mui/material/Container';

const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Layout;
