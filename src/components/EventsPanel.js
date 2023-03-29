import React from 'react';
import SectionHeader from "./SectionHeader";
import SeeMoreButton from "./SeeMoreButton";
import {ContainerStyles} from "./Container.styles";
import EventsBar from "./EventsBar";

const EventsPanel = ({ events, header }) => {
    return (
        <ContainerStyles>
            <SectionHeader header={header} />
            <EventsBar events = {events} />
            <SeeMoreButton />
        </ContainerStyles>
    );
};

export default EventsPanel;
