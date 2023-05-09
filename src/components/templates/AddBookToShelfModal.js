import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
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
            value:"FAVORITE",
        },
        {
            name:"Przeczytane",
            value:"READ",
        },
        {
            name:"Do przeczytania",
            value:"TO_READ",
        },
        {
            name:"Na prezent",
            value:"GIFT",
        },
        {
            name:"Zapisane",
            value:"SAVED",
        },
    ]


    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8080/api/books/shelves/' + shelfType + '/' + id)
            .then(() => {
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