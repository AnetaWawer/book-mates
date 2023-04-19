import Grid from '@mui/material/Grid';
import React from "react";
import moment from "moment/moment";
import EventSignUpModal from "../templates/EventSignUpModal";
import BookImage from "../atoms/BookImage";
import {DetailsWindow, Text} from "./EventDetials.styles";


const EventDetails = ({ book, event }) => {
    return (
        <DetailsWindow>
            <Grid container spacing={2} >
                <Grid item sm={4}>
                    <BookImage book={book} />
                </Grid>
                <Grid item sm={8}>
                    <Text variant="h4" >{event.title}</Text>
                    <Text variant="body1">Autor: {event.bookAuthor}</Text>
                    <Text variant="body1">Książka: {event.bookTitle}</Text>
                    <Text variant="body1" >Data wydarzenia: {moment(event.eventDate).format('DD.MM.YYYY  HH:mm')} </Text>
                    <Text variant="body1">Organizator: {event.organizatorName}</Text>
                    <Text variant="body1">Wolnych miejsc: {event.maxParticipants-event.participants}</Text>
                    <Text variant="body1">Ilość osób na liście oczekujących: {event.waitingList}</Text>
                    <Grid container justifyContent="flex-end">
                        <EventSignUpModal event={event} />
                    </Grid>
                </Grid>
            </Grid>
        </DetailsWindow>

    );
}

export default EventDetails;