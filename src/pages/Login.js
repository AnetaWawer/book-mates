import React, {useState} from 'react';
import axios from "axios";
import {
    Link,
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

const Login = () => {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [isDataValid, setIsDataValid] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios
            .post("http://localhost:8080/api/authentication/login", {
                email: data.get('email'),
                password: data.get('password')
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", response.data.token);
                    localStorage.setItem("refresh", response.data.refreshToken);
                    navigate("/users/profile");
                } else {
                    console.log("no token in response");
                }
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data);
                    setIsDataValid(false);
                }
            });
    }


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
                <Typography variant="h5">
                    LOGOWANIE
                </Typography>
                <Typography sx={{ m: 1, color: 'error.main' }}>
                    {errorMessage}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Adres email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={!isDataValid}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        autoComplete="current-password"
                        error={!isDataValid}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 2 }}
                    >
                        Zaloguj
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {"Zapomniałeś hasła?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Nie masz konta? Zapisz się!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;