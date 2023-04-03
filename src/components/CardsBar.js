import React from 'react';
import {Grid} from "@mui/material";
import SingleCard from "./SingleCard";

const CardsBar = ({elements, header} ) => {
    return (
            <Grid container direction={'row'} spacing={4}>
                {elements.map((element) => (
                    <Grid item xs={12} sm={6} xl={3} key={element.id}>
                        <SingleCard
                            element={element}>
                        </SingleCard>
                    </Grid>
                ))}
            </Grid>
    );
};

export default CardsBar;