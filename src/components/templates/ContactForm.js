import React, {useState} from "react";
import {Typography, Box, TextField, Grid} from "@mui/material";
import {ContactFormContainer, SendMessage, SendMessageIcon} from "./ContactForm.styles";
import { send } from 'emailjs-com';
import BasicSnackBar from "../atoms/BasicSnackBar";

const ContactForm = () => {
    const [toSend, setToSend] = useState({
        firstname: '',
        surname: '',
        title: '',
        email: '',
        message: '',
    });
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_adbd6rm',
            'template_305ynj5',
            toSend,
            'kl967flV_f7-Okf9s'
        )
            .then((response) => {
                setOpen(true)
                setToSend({
                    firstname: '',
                    surname: '',
                    title: '',
                    email: '',
                    message: '',
                })
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <ContactFormContainer >
            <Typography variant='h4'>
                Napisz do nas
            </Typography>
            <Typography variant='body1'>
                Aby wysłać wiadomość, wypełnij formularz kontaktowy.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} >
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="name"
                            label="Imię"
                            name="firstname"
                            value={toSend.firstname}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="surname"
                            label="Nazwisko"
                            name="surname"
                            value={toSend.surname}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Tytuł"
                            name="title"
                            value={toSend.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adres email"
                            name="email"
                            type="email"
                            value={toSend.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={5}
                            id="message"
                            label="Wiadomość"
                            name="message"
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <SendMessage
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Wyślij wiadomość
                    <SendMessageIcon />
                </SendMessage>
                <BasicSnackBar
                    open={open}
                    handleClose={handleClose}
                    message="Wiadomość wysłana poprawnie !"
                    autoHideDuration={5000}
                >
                </BasicSnackBar>
            </Box>
        </ContactFormContainer>
    );
}

export default ContactForm;