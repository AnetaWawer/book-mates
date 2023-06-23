import React from "react";
import {Typography, Grid} from "@mui/material";
import logo from '../../mainLogo.png'
import {Panel} from "../Container.styles";
import { useNavigate, useLocation } from "react-router-dom";
import {FooterContainer, Logo, Item} from "./Footer.styles";
import checkIfUserLogged from "../../services/JwtToken";


function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const isUserLogged = checkIfUserLogged();

    return (
        <Panel maxWidth={false}>
            <FooterContainer container spacing={10} >
                <Grid item xs={5} md={4} lg={3}>
                    <Logo alt="main-logo" src={logo} />
                    <Typography variant="subtitle1" component="div">
                        Miejsce, w którym można dyskutować o książkach.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div" >
                            O nas
                        </Typography>
                        <Item variant="subtitle1" onClick={() =>navigate("/about")} >
                            Zespół
                        </Item>
                    </Grid>
                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div" >
                            Odwiedź
                        </Typography>
                        <Item variant="subtitle1"  onClick={() =>navigate("/")} >
                            Strona główna
                        </Item>
                        <Item variant="subtitle1"  onClick={() =>navigate("/booksdb")}>
                            Książki
                        </Item>
                        <Item variant="subtitle1" onClick={() =>navigate("/events")}>
                            Wydarzenia
                        </Item>
                    </Grid>
                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div">
                            Moje konto
                        </Typography>
                        <Item variant="subtitle1"  onClick={() =>navigate("/register/")}>
                            Rejestracja
                        </Item>
                        <Item variant="subtitle1"  onClick={() =>navigate("/login/")}>
                            Logowanie
                        </Item>
                        <Item variant="subtitle1" onClick={() => { isUserLogged ? navigate("/users/profile/") : navigate("/login", {state: { from: location}, replace: true})}} >
                            Mój profil
                        </Item>
                    </Grid>
                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div">
                            Pomoc
                        </Typography>
                        <Item variant="subtitle1" onClick={() =>navigate("/contact")}>
                            Kontakt
                        </Item>
                    </Grid>
                </Grid>
            </FooterContainer>
        </Panel>
    );
}

export default Footer;