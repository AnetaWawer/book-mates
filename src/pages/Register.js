import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios
            .post("http://localhost:8080/api/authentication/register", {
                username: data.get('username'),
                email: data.get('email'),
                password: data.get('password')
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", response.data.token);
                    navigate("/users/profile");
                } else {
                    console.log("no token in respone");
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    alert("nie można zarejestrować konta, niepoprawne dane");
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error ", error.message());
                }
            });    }


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                <Typography component="h1" variant="h5">
                    REJESTRACJA
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nazwa użytkownika"
                        name="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 2 }}
                    >
                        Zapisz się
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Masz już konto? Zaloguj się!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;