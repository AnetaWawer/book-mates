import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box, Typography} from "@mui/material";
import CardsBar from "./organisms/CardsBar";

const Shelf = ({ header, booksSequences }) => {

    if ( !booksSequences.length && header!=="Pozostałe"){
        return (
            <Box sx={{mt: 5}}>
                <Typography variant="h4" >{header}</Typography>
                <Typography>Ta półka jest na razie pusta</Typography>
            </Box>
        )
    }
    if ( booksSequences.length === 1) {
        return (
            <Box sx={{mt: 5}}>
                <Typography variant="h4">{header}</Typography>
                <CardsBar elements={booksSequences[0]} />
            </Box>
        )
    }
    if ( booksSequences.length > 1) {
        return (
            <Box sx={{mt: 5}}>
                <Typography variant="h4">{header}</Typography>
                <Carousel animation="fade" duration={900} interval={3000}>
                    {
                        booksSequences.map((booksSequence, i) => (
                            <CardsBar elements={booksSequence} key={i}/>
                        ))
                    }
                </Carousel>
            </Box>
        );
    }
};

export default Shelf;