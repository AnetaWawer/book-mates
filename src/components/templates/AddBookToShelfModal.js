import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
import {ModalBox, NewEventButton, SubmitEventButton} from "./NewEventModal.styles";
import BasicSnackBar from "../atoms/BasicSnackBar";

const AddBookToShelfModal = ({book}) => {
    const [open, setOpen] = useState(false);
    let { id } = useParams();
    const [shelfType, setShelfType] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [info, setInfo] = useState("");
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
        axios.post('http://localhost:8080/api/books/shelves/' + shelfType + '/' + id)
            .then(() => {
                handleClose();
                setOpenInfo(true);
                setInfo("Dodano pomyślnie na półkę");
            })
            .catch(error => {
                console.log(error);
                setOpenInfo(true);
                setInfo("Nie udało się dodać.");
            })
    };

    const handleCloseInfo = () => {
        setOpenInfo(false);
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
            <BasicSnackBar
                open={openInfo}
                handleClose={handleCloseInfo}
                message={info}
                autoHideDuration={5000}
            >
            </BasicSnackBar>
        </Box>
    )
}

export default AddBookToShelfModal;