import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Typography} from "@mui/material";
import CardsBar from "./CardsBar";

const Shelf = ({ header, booksSequences }) => {

    if ( !booksSequences.length && header!="Pozostałe"){
        return (
            <>
                <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
                <Typography>Ta półka jest na razie pusta</Typography>
            </>
        )
    }
    if ( booksSequences.length === 1) {
        return (
            <>
                <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
                <CardsBar elements={booksSequences[0]} />
            </>
        )
    }
    if ( booksSequences.length > 1) {
        return (
            <>
                <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
                <Carousel>
                    {
                        booksSequences.map((booksSequence, i) => (
                            <CardsBar elements={booksSequence} key={i}/>
                        ))
                    }
                </Carousel>
            </>
        );
    }
};

export default Shelf;