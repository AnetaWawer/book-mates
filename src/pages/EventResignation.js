import React from 'react';
import {MainContainer} from "../components/Container.styles";
import EventResignationDetails from "../components/molecules/EventResignationDetails";
import Event from "./Event"


function EventResignation() {
    return (
        <MainContainer>
            <EventResignationDetails />
            <Event />
        </MainContainer>
    )
}

export default EventResignation;