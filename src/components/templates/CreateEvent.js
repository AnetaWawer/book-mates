import React, { useState } from 'react';
import {Box, Typography, Modal, Button, TextField,MenuItem, Select, InputLabel,FormControl } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";


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
            organizerId:2
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
                        {/*wydzielic*/}
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

                        {/*<FormControl sx={{ width: 500}}>*/}
                        {/*    <InputLabel id="label">Typ wydarzenia</InputLabel>*/}
                        {/*    <Select*/}
                        {/*        labelId="open-select-label"*/}
                        {/*        id="eventType"*/}
                        {/*        open={openSelect}*/}
                        {/*        onClose={handleCloseSelect}*/}
                        {/*        onOpen={handleOpenSelect}*/}
                        {/*        value={eventsType}*/}
                        {/*        label="Typ wydarzenia"*/}
                        {/*        onChange={handleChange}*/}
                        {/*    >*/}
                        {/*        <MenuItem value={0} >Wspólne czytanie</MenuItem>*/}
                        {/*        <MenuItem value={1}>Spotkanie autorskie</MenuItem>*/}
                        {/*        <MenuItem value={2}>Wydarzenie cykliczne</MenuItem>*/}
                        {/*        <MenuItem value={3}>Dyskusje</MenuItem>*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}
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
                            id="maxParticipants"
                            label="Ilość uczestników"
                            name="maxParticipants"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label='Data i godzina rozpoczęcia wydarzenia'
                                value={selectedDateTime}
                                onChange={(newValue) => setSelectedDateTime(newValue)}
                            />
                        </LocalizationProvider>

                        {/*---*/}
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