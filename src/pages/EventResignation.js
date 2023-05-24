import React from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {MainContainer} from "../components/Container.styles";
import EventResignationDetails from "../components/molecules/EventResignationDetails";
import Event from "./Event"


function EventResignation() {
    const navigate = useNavigate();
    let { eventId } = useParams();
    const resignFromEvent = () => {
        axios.put('http://localhost:8080/api/events/' + eventId + '/resign')
            .then((response) => {
                console.log(response)
            })
            .then(() => navigate("/"))
            .catch(error => console.log(error))
    };

    return (
        <MainContainer>
            <EventResignationDetails resignFromEvent={resignFromEvent} />
            <Event />
        </MainContainer>
    )
}

export default EventResignation;