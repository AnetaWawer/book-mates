import React from 'react';
import {Grid} from "@mui/material";
import SingleCard from "../molecules/SingleCard";

const CardsBar = ( {elements, keyField='id'} ) => {
    return (
            <Grid container direction={'row'} spacing={4}>
                {elements.map((element) => (
                    <Grid item xs={12} sm={6} lg={3} key={element[keyField]}>
                        <SingleCard
                            element={element}>
                        </SingleCard>
                    </Grid>
                ))}
            </Grid>
    );
};

export default CardsBar;