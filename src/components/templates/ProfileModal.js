import React, {useState} from 'react';
import {Box, Typography, Modal } from "@mui/material";
import dayjs from 'dayjs';
import axios from "axios";
import {useParams} from "react-router-dom";
import BasicSelect from "../molecules/BasicSelect";
import BasicDateTimePicker from "../atoms/BasicDateTimePicker";
import NewEventTextFields from "../molecules/NewEventTextFields";
import {ModalBox, NewEventButton, SubmitEventButton} from "./NewEventModal.styles";
import EditProfileTextFields from "../molecules/EditProfileTextFields";

const ProfileModal = ({user, nickname, biogram}) => {
    const [open, setOpen] = useState(false);

    let { id } = useParams();
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



    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     axios.post('http://localhost:8080/api/books/' + id + '/event', {
    //         title:data.get('title'),
    //         eventDate:selectedDateTime,
    //         description: data.get('description'),
    //         maxParticipants: data.get('maxParticipants'),
    //         url: data.get('url'),
    //         eventType:eventsType,
    //         externalId:book.externalId,
    //         author:book.author,
    //         bookDescription:book.description,
    //         bookTitle:book.title,
    //         pages:book.pages,
    //         pictureUrl:book.pictureUrl,
    //         rating:book.rating,
    //         year:book.year,
    //
    //     })
    //         .then(response => {
    //             handleClose();
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // };
    return (
        <Box>
            <NewEventButton onClick={handleOpen}>Edytuj profil</NewEventButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalBox>
                    <Typography  variant="h6" component="h2">
                       Zmień swój profil
                    </Typography>
                    <Box component="form"
                         //onSubmit={handleSubmit}
                        >
                        <EditProfileTextFields nickname={nickname} biogram={biogram}/>

                        <SubmitEventButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            //onClick={}
                        >
                            Zapisz
                        </SubmitEventButton>
                    </Box>
                </ModalBox>
            </Modal>
        </Box>
    )
}

export default ProfileModal;