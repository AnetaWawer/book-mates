import React, {useState} from 'react';
import {Grid} from "@mui/material";
import EventCard from "./EventCard";

const EventsBar = ( {events, header} ) => {
    return (
        <Grid container direction={'row'} spacing={4}>
            {events.map((event) => (
                <Grid item xs={12} sm={6} xl={3} key={event.id}>
                    <EventCard
                        event={event}>
                    </EventCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default EventsBar;