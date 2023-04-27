import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {

    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(true);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //         userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     const result = USERNAME_REGEX.test(username);
    //     console.log(result);
    //     setValidName(result);
    // }, [username])

    const onBlurUsername = () => {
        setValidName(USERNAME_REGEX.test(username));
        setUserFocus(false);
    }

    const onBlurEmail = () => {
        setValidEmail(EMAIL_REGEX.test(email));
        setUserFocus(false);
    }
    const onBlurPassword = () => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setUserFocus(false);
    }

    // useEffect(() => {
    //     const result  = PASSWORD_REGEX.test(password);
    //     setValidPassword(result);
    //     const match = password === matchPassword;
    //     setValidMatch(match);
    // }, [password, matchPassword])
    //
    // useEffect(() => {
    //     setErrorMessage('');
    // }, [username, password, matchPassword])

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
            <p
                ref={errRef}
                className={errorMessage ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errorMessage}
            </p>
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
                        error={!validName}
                        helperText={validName && !userFocus? '': 'Nazwa użytkownika musi zawierać od 4 do 24 znaków, zaczynać od litery i składać się wyłącznie z liter, cyfr, znaków _ lub -'}
                        autoFocus
                        ref={userRef}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setUserFocus(true)}
                        onBlur={onBlurUsername}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres email"
                        name="email"
                        autoComplete="email"
                        error={!validEmail}
                        helperText={validEmail ? '': 'niepoprawny adres email'}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={onBlurEmail}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="matchPassword"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="matchPassword"
                        label="Hasło"
                        type="password"
                        id="password"
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