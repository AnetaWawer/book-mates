import React, {useState} from 'react';
import {Box, Modal,Divider,} from "@mui/material";
import {ModalBox} from "./NewEventModal.styles";
import moment from "moment/moment";
import axios from "axios";
import {useParams} from "react-router-dom";
import {EventButton, Text} from "../organisms/EventDetials.styles";

const EventSignUpModal = ({event, getParticipants}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    let { eventId } = useParams();
    let currentWaitingListNumber = event.waitingList +1;
    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/events/' + eventId + '/join', {
        })
            .then(response => {
                console.log(response)
                handleClose();
                getParticipants()
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <Box>
            <EventButton onClick={handleOpen}>Dołącz do wydarzenia </EventButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
            <ModalBox>
                <Text  variant="h6">
                    {event.participants!==event.maxParticipants ? 'Czy na pewno chcesz dołączyć do wydarzenia ?' : 'Jesteś ' + currentWaitingListNumber + ' na liście oczekujących. Czy na pewno chcesz dołączyć do wydarzenia ?'}
                </Text>
                <Text  variant="body1" >
                    Tytuł: { event.title}
                </Text>
                <Text  variant="body1" >
                    Data wydarzenia: { moment(event.eventDate).format('DD.MM.YYYY  HH:mm') }
                </Text>
                <Text  variant="body1">
                    Książka: { event.bookAuthor } - {event.bookTitle}
                </Text>
                <Divider />
                <EventButton onClick={handleSubmit} >Dołącz</EventButton>
                <EventButton sx={{float:'right'}} onClick={handleClose}>Zrezygnuj</EventButton>
            </ModalBox>
            </Modal>
        </Box>
    )
}

export default EventSignUpModal;