import React, {useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import axios from "axios";

const RecoverPasswordModal = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setResponse('')
    };

    const handleSave = () => {
        axios.post(`http://localhost:8080/api/authentication/reset_password_confirmation`,{}, {
            params: {
                email: input.email
            },
        })
            .then(response => {
                setResponse(response.data);
                if (response.data === "Email z linkiem do resetowania hasła został wysłany.") {
                    setOpen(false);
                }
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const emailSubmit = e => {
        const {value} = e.target;
        setInput(() => ({
            email: value
        }));
    }

    return (
        <Box>
            <Button onClick={handleClickOpen} style={{textDecoration: 'underline',fontSize:'11px'}} variant="subtitle1" >
                Zapomniałeś hasła?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Zapomniałeś hasła do własnego konta?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Aby ustawić nowe hasło podaj swój adres email.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Adres email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={emailSubmit}
                        helperText={response}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Wróć</Button>
                    <Button onClick={handleSave} autoFocus>
                        Wyślij
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default RecoverPasswordModal;