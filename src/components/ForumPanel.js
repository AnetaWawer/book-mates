import React from "react";
// import logo from './logo.jpg';
import SectionHeader from "./SectionHeader";
import SeeMoreButton from "./SeeMoreButton";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import {Link,Typography, Grid, ButtonBase, Container } from '@mui/material'
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const ForumPanel =({forum}) =>{
    return (
        <Container maxWidth="lg" >
            <SectionHeader header={"Forum"}></SectionHeader>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <ButtonBase sx={{ width: 96, height: 128 }}>
                            {/*<Img alt="book-cover" src={logo} />*/}
                        </ButtonBase>
                    </Grid>
                    <Grid  item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs={5}>
                                <Typography component="h5" >
                                    Simple Way of Piece Life
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Armor Ramsey
                                </Typography>
                            </Grid>
                        </Grid>
                            <Grid item xs={8} container direction="column">
                                <Grid item xs={5}>
                                    {/*change to onClick*/}
                                    <Link variant="h6" component="a" href="#" color="inherit" underline="none">
                                        Co myślicie o głównej bohaterce ?
                                    </Link>
                                    <Typography variant="subtitle2">
                                        <span>Opublikowano 19.03.2023 18:23 przez  <Link color="inherit" underline="none" href="#" >AAA</Link></span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" paragraph>
                                <ChatOutlinedIcon sx={{ fontSize: 20, textAlign:'right' }} />
                                <span> 90 Odpowiedzi</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            <SeeMoreButton/>
        </Container>
    )
}

export default ForumPanel;