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

const RecoverPasswordModal = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
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