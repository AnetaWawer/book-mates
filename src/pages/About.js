import React from 'react';
import SectionHeader from "../components/atoms/SectionHeader";
import Grid from "@mui/material/Grid";
import Ania from "../Ania.jpg";
import Kuba from "../Kuba.jpg";
import Karolina from "../Karolina.jpg";
import Aneta from "../Aneta.jpg";
import FacePicture from "../components/atoms/FacePicture";
import {Container} from "@mui/material";
import NameButton from "../components/atoms/NameButton";

function About() {
    const header = "Nasz zespół"

    return (
        <Container>

            <SectionHeader header={header}/>

            <Grid container spacing={1} columns={8}>
                <FacePicture image={Ania}  name={"Ania"} link={"https://linkedin.com/in/annanataliagasiorowska/"}></FacePicture>
                <FacePicture image={Kuba} name={"Kuba"} link={"https://linkedin.com/in/jakub-kuba-kuca"}></FacePicture>
                <FacePicture paddingRight = {20} image={Karolina} name={"Karolina"} link={"https://www.linkedin.com/in/karolina-cha%C5%82upka-ph-d-a115a3170/"}></FacePicture>
                <FacePicture image={Aneta} name={"Aneta"} link={"https://linkedin.com/"} ></FacePicture>
            </Grid>

        </Container>
    );
}

export default About;