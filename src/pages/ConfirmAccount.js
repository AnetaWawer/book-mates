import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import axios from "axios";

const ConfirmAccount = () => {

    const searchParams = new URLSearchParams(document.location.search);
    const token = searchParams.get("token");

    const [message, setMessage] = useState("")

    useEffect( () => {
        axios
            .get("http://localhost:8080/api/authentication/confirm-account?token=" + token)
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                if (error.response) {
                    setMessage(error.response.data)
                } else {
                    setMessage("Coś poszło nie tak.")
                }
            });
    }, [token])


    return (
        <Container component="main" maxWidth="sm" sx={{ py: 10 }}>
            <Typography variant="h6">
                {message}
            </Typography>
        </Container>
    );
};

export default ConfirmAccount;