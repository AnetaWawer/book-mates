import React from "react";
import {Typography, Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import logo from './mainLogo.png'
import {ContainerStyles} from "./Container.styles";
import {useNavigate} from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Item= styled('div')({
    cursor:"pointer"
})

function Footer() {
    const navigate = useNavigate();
    return (
        <ContainerStyles maxWidth="lg" >
            <Grid container spacing={10} sx={{marginLeft:'2%'}}>
                <Grid item xs={5} md={4} lg={3}>
                    <Img alt="main-logo" src={logo} />
                    <Typography variant="subtitle1" component="div">
                        Miejsce w którym można dyskutować o książkach.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs={7} md={5} lg={3}>
                        <Typography variant="h6" component="div" >
                            O nas
                        </Typography>
                        <Item variant="subtitle1" onClick={() =>navigate("/about")} >
                            Zespół
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={5} lg={3}>
                        <Typography variant="h6" component="div" >
                            Odwiedź
                        </Typography>
                        <Item variant="subtitle1"  onClick={() =>navigate("/")} >
                            Strona główna
                        </Item>
                        <Item variant="subtitle1"  onClick={() =>navigate("/books")}>
                            Książki
                        </Item>
                        <Item variant="subtitle1" onClick={() =>navigate("/events")}>
                            Wydarzenia
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={5} lg={3}>
                        <Typography variant="h6" component="div">
                            Moje konto
                        </Typography>
                        <Item variant="subtitle1"  onClick={() =>navigate("/login/")}>
                            Logowanie
                        </Item>
                        <Item variant="subtitle1" onClick={() =>navigate("/user/")}>
                            Mój profil
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={5} lg={3}>
                        <Typography variant="h6" component="div">
                            Pomoc
                        </Typography>
                        <Item variant="subtitle1" onClick={() =>navigate("/contact")}>
                            Kontakt
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </ContainerStyles>
    );
}

export default Footer;