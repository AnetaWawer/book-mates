import React, {useState} from 'react';
import {Box, Typography, Modal } from "@mui/material";
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
import BasicDateTimePicker from "../atoms/BasicDateTimePicker";
import NewEventTextFields from "../molecules/NewEventTextFields";
import {ModalBox, NewEventButton, SubmitEventButton} from "./NewEventModal.styles";

const AddBookToShelfModal = ({book}) => {
    const [open, setOpen] = useState(false);
    let { id } = useParams();
    const [shelfType, setShelfType] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleChange = (event) => {
        setShelfType(event.target.value);
    };

    const handleCloseSelect = () => {
        setOpenSelect(false);
    };

    const handleOpenSelect = () => {
        setOpenSelect(true);
    };
    const items = [
        {
            name:"Ulubione",
            value:0,
        },
        {
            name:"Przeczytane",
            value:1,
        },
        {
            name:"Do przeczytania",
            value:2,
        },
        {
            name:"Na prezent",
            value:3,
        },
        {
            name:"Zapisane",
            value:4,
        },
    ]


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8080/api/books/shelves/' + shelfType + '/' + id, {
            title:data.get('title'),
            shelfType:shelfType,
            externalId:book.externalId,
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
            <NewEventButton onClick={handleOpen}>Dodaj na półkę</NewEventButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalBox>
                    <Box component="form" onSubmit={handleSubmit} >
                        <BasicSelect
                            labelId="open-select-label"
                            id="shelfType"
                            value={shelfType}
                            label="Półka"
                            handleChange={handleChange}
                            handleCloseSelect={handleCloseSelect}
                            handleOpenSelect={handleOpenSelect}
                            openSelect={openSelect}
                            items={items}
                        />
                        <SubmitEventButton
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Dodaj
                        </SubmitEventButton>
                    </Box>
                </ModalBox>
            </Modal>
        </Box>
    )
}

export default AddBookToShelfModal;