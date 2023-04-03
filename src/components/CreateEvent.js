import React, { useState } from 'react';
import {Box, Typography, Modal, Button, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";


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

const CreateEvent = () => {
    const [open, setOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs);
    let { bookId } = useParams();
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8080/api/books/' + bookId + '/event', {
            title:data.get('title'),
            eventDate:selectedDateTime,
            description: data.get('description'),
            maxParticipants: data.get('max-participants'),
            url: data.get('event-url'),
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Nazwa"
                            name="title"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            multiline
                            label="Opis"
                            name="description"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="max-participants"
                            label="Ilość uczestników"
                            name="max-participants"
                        />
                        {/*<TextField*/}
                        {/*    margin="normal"*/}
                        {/*    required*/}
                        {/*    fullWidth*/}
                        {/*    id="event-url"*/}
                        {/*    label="Link do wydarzenia"*/}
                        {/*    name="event-url"*/}
                        {/*    autoComplete="event-url"*/}
                        {/*    autoFocus*/}
                        {/*/>*/}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label='Data i godzina rozpoczęcia wydarzenia'
                                value={selectedDateTime}
                                onChange={(newValue) => setSelectedDateTime(newValue)}
                            />
                        </LocalizationProvider>
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

export default CreateEvent;