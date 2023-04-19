import React, {useState} from 'react';
import {Box, Typography, Modal } from "@mui/material";
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
import BasicDateTimePicker from "../atoms/BasicDateTimePicker";
import NewEventTextFields from "../molecules/NewEventTextFields";
import {ModalBox, NewEventButton, SubmitEventButton} from "./NewEventModal.styles";

const NewEventModal = () => {
    const [open, setOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs);
    let { query } = useParams();
    const [eventsType, setEventsType] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleChange = (event) => {
        setEventsType(event.target.value);
    };

    const handleCloseSelect = () => {
        setOpenSelect(false);
    };

    const handleOpenSelect = () => {
        setOpenSelect(true);
    };
    const items = [
        {
            name:"Wspólne czytanie",
            value:0,
        },
        {
            name:"Spotkanie autorskie",
            value:1,
        },
        {
            name:"Wydarzenie cykliczne",
            value:2,
        },
        {
            name:"Dyskusje",
            value:3,
        },
    ]


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8080/api/books/' + query + '/event', {
            title:data.get('title'),
            eventDate:selectedDateTime,
            description: data.get('description'),
            maxParticipants: data.get('maxParticipants'),
            url: data.get('url'),
            eventType:eventsType,

        })
            .then(response => {
                handleClose();
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <Box>
            <NewEventButton onClick={handleOpen}>Utwórz wydarzenie</NewEventButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
            <ModalBox>
                <Typography  variant="h6" component="h2">
                    Utwórz nowe wydarzenie
                </Typography>
                <Box component="form" onSubmit={handleSubmit} >
                    <BasicSelect
                        labelId="open-select-label"
                        id="eventType"
                        value={eventsType}
                        label="Typ wydarzenia"
                        handleChange={handleChange}
                        handleCloseSelect={handleCloseSelect}
                        handleOpenSelect={handleOpenSelect}
                        openSelect={openSelect}
                        items={items}
                        />
                    <NewEventTextFields />
                    <BasicDateTimePicker
                        label='Data i godzina rozpoczęcia wydarzenia'
                        selectedDateTime={selectedDateTime}
                        setSelectedDateTime={(newValue) => setSelectedDateTime(newValue)}
                    />
                    <SubmitEventButton
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Dodaj wydarzenie
                    </SubmitEventButton>
                </Box>
            </ModalBox>
            </Modal>
        </Box>
    )
}

export default NewEventModal;