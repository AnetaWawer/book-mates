import React from "react";
import {Typography, Box, TextField, Grid} from "@mui/material";
import {ContactFormContainer, SendMessage, SendMessageIcon} from "./ContactForm.styles";
const ContactForm = () => {
    return (
        <ContactFormContainer >
            <Typography variant='h4'>
                Napisz do nas
            </Typography>
            <Typography variant='body1'>
                Aby wysłać wiadomość, wypełnij formularz kontaktowy.
            </Typography>
            <Box component="form" >
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="name"
                            label="Imię"
                            name="name"
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
                            type="emial"
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
            </Box>
        </ContactFormContainer>
    );
}

export default ContactForm;