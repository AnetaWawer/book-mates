import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Ania from "../../Ania.jpg";
import React from "react";
import {Img} from "../molecules/SingleTopic.styles";
import {Typography} from "@mui/material";
import NameButton from "./NameButton";

const FacePicture = ({ image, name, link, paddingRight, paddingLeft }) => {
    return (
        <Grid item xs={12} md={3} lg={2}  >

            <Img
                alt= "profile picture"
                src={image}
                sx={{
                    height: 307,
                    width: 235
            }}
            />
            <Grid  container justifyContent="center" style={{paddingRight: paddingRight, paddingLeft: paddingLeft}}>
                <NameButton name={name} link={link}></NameButton>
            </Grid>
        </Grid>
    );
};

export default FacePicture;