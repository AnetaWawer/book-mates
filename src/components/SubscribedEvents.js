import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box, Typography} from "@mui/material";
import CardsBar from "./CardsBar";

const SubscribedEvents = ({ events }) => {
    if (!events.length){
        return (
            <Typography>Brak wydarzeń</Typography>
        )
    }
    if ( events.length === 1) {
        return (
            <Box sx={{mt: 5}}>
                <CardsBar elements={events[0]} />
            </Box>
        )
    }
    if ( events.length > 1) {
        return (
            <Box sx={{mt: 5}}>
                <Carousel animation="fade" duration={900} interval={3000}>
                    {
                        events.map((event, i) => (
                            <CardsBar elements={event} key={i}/>
                        ))
                    }
                </Carousel>
            </Box>
        );
    }
};

export default SubscribedEvents;