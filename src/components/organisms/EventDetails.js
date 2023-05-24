import Grid from '@mui/material/Grid';
import React from "react";
import moment from "moment/moment";
import EventSignUpModal from "../templates/EventSignUpModal";
import BookImage from "../atoms/BookImage";
import {DetailsWindow, Text} from "./EventDetials.styles";

const EventDetails = ({ event, getParticipants, alreadySubscribed, isLoggedIn, organizer }) => {
    let eventTime = moment(event.eventDate)
    let currentDate = moment();

    function getEventDetails(signForEventDetails) {
        return (
            <DetailsWindow>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <BookImage book={event}/>
                    </Grid>
                    <Grid item sm={8}>
                        <Text variant="h4">{event.title}</Text>
                        <Text variant="body1">Autor: {event.bookAuthor}</Text>
                        <Text variant="body1">Książka: {event.bookTitle}</Text>
                        <Text variant="body1">Data
                            wydarzenia: {moment(event.eventDate).format('DD.MM.YYYY  HH:mm')} </Text>
                        <Text variant="body1">Organizator: {event.organizatorName}</Text>
                        <Text variant="body1">Wolnych miejsc: {event.maxParticipants - event.participants}</Text>
                        <Text variant="body1">Ilość osób na liście oczekujących: {event.waitingList}</Text>
                        <Grid container justifyContent="flex-end" >
                            {signForEventDetails}
                        </Grid>
                    </Grid>
                </Grid>
            </DetailsWindow>
        );
    }

    if ((window.location.pathname).includes("resign")){
        return (
            getEventDetails()
        );
    } else if (organizer === event.organizatorName){
        return (
            getEventDetails(<Text variant="h6">Jesteś organizatorem tego wydarzenia.</Text>)
        );
    }else if (alreadySubscribed) {
        return (
            getEventDetails(<Text variant="h6">Jesteś już zapisany na to wydarzenie.</Text>)
        );
    } else if (moment(currentDate).isAfter(eventTime)){
        return (
            getEventDetails(<Text variant="h6">Wydarzenie już się odbyło.</Text>)
        );
    } else if (!isLoggedIn){
        return (
            getEventDetails(<Text variant="h6">Aby dołączyć do wydarzenia musisz się zalogować.</Text>)
        );
    } else {
        return (
            getEventDetails(<EventSignUpModal event={event} getParticipants={getParticipants} />)
        );
    }
}

export default EventDetails;