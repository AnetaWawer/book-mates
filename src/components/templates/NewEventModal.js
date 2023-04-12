import React, { useState } from 'react';
import {Box, Typography, Modal, Button } from "@mui/material";
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
import BasicDateTimePicker from "../atoms/BasicDateTimePicker";
import NewEventTextFields from "../molecules/NewEventTextFields";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#eeede7',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
};

const NewEventModal = () => {
    const [open, setOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs);
    let { bookId } = useParams();
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
        axios.post('http://localhost:8080/api/books/' + bookId + '/event', {
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
        <div>
            <Button sx={{color:'inherit'}} onClick={handleOpen}>Utwórz wydarzenie</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography  variant="h6" component="h2">
                        Utwórz nowe wydarzenie
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2,backgroundColor:'inherit', color:'inherit', '&:hover': {backgroundColor: 'inherit'}}}
                        >
                            Dodaj wydarzenie
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default NewEventModal;