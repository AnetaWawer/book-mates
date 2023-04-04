import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsPanel from "../components/CardsPanel";
import {ContainerSize} from "../components/Container.styles";
import {Pagination} from "@mui/material";

function Events(){
    const eventsHeader = "Wszystkie wydarzenia";
    const [events, setEvents] = useState([]);
    const [eventsCount, setEventsCount] = useState(0);
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (!events.length) {
            axios.get('http://localhost:8080/api/events?page' + page)
                .then(response => {
                        setEvents(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [events]);
    return (
        <ContainerSize>
            <CardsPanel elements={events} header={eventsHeader}/>
            <Pagination count={10} showFirstButton showLastButton sx={{ justifyContent:"center", display:'flex'}} onChange={handleChange} />
        </ContainerSize>
    );
};

export default Events;