
import Grid from "@mui/material/Grid";

import React from "react";


const NameButton = ({ name, link }) => {

    const styleObj = {
        fontSize: 23,
        color: 'inherit',
        textDecoration: 'none'
    }
    return (
        <Grid item xs={12} md={3} lg={2} sx={{ m: 2 }} >
            <a style={styleObj} href={link} target="_blank" rel="link to linkedin profile">
                {name}
            </a>
        </Grid>
    );
};

export default NameButton;