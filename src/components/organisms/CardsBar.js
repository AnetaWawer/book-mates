import React from 'react';
import {Grid} from "@mui/material";
import SingleCard from "../molecules/SingleCard";

const CardsBar = ( {elements} ) => {
    return (
            <Grid container direction={'row'} spacing={4}>
                {elements.map((element) => (
                    <Grid item xs={12} sm={6} lg={3} key={(element.externalId) ? element.externalId : element.id }>
                        <SingleCard element={element} />
                    </Grid>
                ))}
            </Grid>
    );
};

export default CardsBar;