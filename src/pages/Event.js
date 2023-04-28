import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer} from "../components/Container.styles";
import {useParams} from "react-router-dom";
import EventDetails from "../components/organisms/EventDetails";
import Description from "../components/atoms/Description";


function Event() {
    const [event, setEvent] = useState({});
    let { eventId } = useParams();

    useEffect(() => {
            axios.get('http://localhost:8080/api/events/' + eventId )
                .then(response => {
                        setEvent(response.data);
                    }
                )
                .catch(error => console.log(error));

    }, [eventId]);

    return (
        <MainContainer>
            <EventDetails event={event}/>
            <Description description={event.description}/>
        </MainContainer>
    );
}

export default Event;