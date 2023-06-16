import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Avatar, Box, Button, Container, Typography, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^\s'"`&<>*]{8,24}$/;

const USERNAME_RESTRICTIONS = 'Nazwa użytkownika musi zawierać od 4 do 24 znaków, zaczynać od litery i składać się wyłącznie z liter, cyfr, znaków _ lub -';
const PASSWORD_RESTRICTIONS = 'Hasło musi zawierać od 8 do 24 znaków i musi zawierać co najmniej: jedną małą literę, jedną wielką literę i jedną cyfrę. Nie może zwierać znaków " ` \' & < > * '
const Register = () => {

    const navigate = useNavigate();

    const CONFIRMATION_EMAIL_INFO = "Aby dokończyć proces rejestracji, postępuj zgodnie ze wskazówkami przesłanymi na podany adres email.";

    const [username, setUsername] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isNameFocused, setIsNameFocused] = useState(true);
    const [isNameEdited, setIsNameEdited] = useState(false);
    const [isNameOmitted, setIsNameOmitted] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState('Nazwa użytkownika musi zawierać od 4 do 24 znaków, zaczynać od litery i składać się wyłącznie z liter, cyfr, znaków _ lub -');

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailEdited, setIsEmailEdited] = useState(false);
    const [isEmailOmitted, setIsEmailOmitted] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');

    const [password, setPassword] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordEdited, setIsPasswordEdited] = useState(false);
    const [isPasswordOmitted, setIsPasswordOmitted] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState('');


    const [matchPassword, setMatchPassword] = useState('');
    const [isMatchPasswordValid, setIsMatchPasswordValid] = useState(false);
    const [isMatchPasswordEdited, setIsMatchPasswordEdited] = useState(false);
    const [isMatchPasswordOmitted, setIsMatchPasswordOmitted] = useState(false);
    const [matchPasswordHelperText, setMatchPasswordHelperText] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [isRegistrationInProgress, setIsRegistrationInProgress] = useState(true);

    // every page reload should show registration form, which will vanish after successful registration
    useEffect(() => {
        setIsRegistrationInProgress(true);
    }, [])

    const onUsernameChange = (e) => {
        setIsNameValid(USERNAME_REGEX.test(e.target.value));
        setUsername(e.target.value);
        setIsNameOmitted(e.target.value === '');
    }

    const onBlurUsername = () => {
        setIsNameValid(USERNAME_REGEX.test(username));
        setIsNameFocused(false);
        setIsNameEdited(true);
        setIsNameOmitted(username === '');
    }

    useEffect (() => {
        if (isNameFocused && !isNameEdited) {
            setUsernameHelperText(USERNAME_RESTRICTIONS);
        } else if (!isNameValid && isNameOmitted && isNameEdited) {
            setUsernameHelperText('Należy podać nazwę użytkownika');
        } else if (!isNameValid && isNameEdited) {
            setUsernameHelperText('Błędna nazwa użytkownika. ' + USERNAME_RESTRICTIONS);
        } else {
            setUsernameHelperText('');
        }
    }, [username, isNameValid, isNameFocused, isNameEdited, isNameOmitted])

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        setIsEmailValid(EMAIL_REGEX.test(e.target.value));
        setIsEmailOmitted(e.target.value === '');
    }

    const onBlurEmail = () => {
        setIsEmailValid(EMAIL_REGEX.test(email));
        setIsEmailEdited(true);
        setIsEmailOmitted(email === '');
    }

    useEffect(() => {
        if (isEmailOmitted) {
            setEmailHelperText('Należy podać email.');
        } else if (!isEmailValid && isEmailEdited) {
            setEmailHelperText('Niepoprawny format adresu email.');
        } else {
            setEmailHelperText('');
        }
    }, [email, isEmailValid, isEmailEdited, isEmailOmitted])

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordValid(PASSWORD_REGEX.test(e.target.value));
        setIsPasswordOmitted(e.target.value === '');
        setIsMatchPasswordValid(e.target.value === matchPassword);
    }

    const onBlurPassword = () => {
        setIsPasswordValid(PASSWORD_REGEX.test(password));
        setIsPasswordEdited(true);
        setIsPasswordOmitted(password === '');
        setIsPasswordFocused(false);
    }

    useEffect(() => {
        if (isPasswordFocused && !isPasswordEdited) {
            setPasswordHelperText(PASSWORD_RESTRICTIONS);
        } else if (isPasswordOmitted) {
            setPasswordHelperText('Należy podać hasło');
        } else if (!isPasswordValid && isPasswordEdited) {
            setPasswordHelperText('Niepoprawne hasło. ' + PASSWORD_RESTRICTIONS);
        } else {
            setPasswordHelperText('');
        }
    }, [password, isPasswordValid, isPasswordEdited, isPasswordOmitted, isPasswordFocused])

    const onMatchPasswordChange = (e) => {
        setMatchPassword(e.target.value);
        setIsMatchPasswordValid(e.target.value === password);
        setIsMatchPasswordOmitted(e.target.value === '');
    }

    const onBlurMatchPassword = () => {
        setIsMatchPasswordValid(matchPassword === password);
        setIsMatchPasswordEdited(true);
        setIsMatchPasswordOmitted(matchPassword === '');
    }

    useEffect(() => {
        if (isMatchPasswordOmitted) {
            setMatchPasswordHelperText('Należy powtórzyć hasło');
        } else if (!isMatchPasswordValid && isMatchPasswordEdited) {
            setMatchPasswordHelperText('Podane hasła różnią się');
        } else {
            setMatchPasswordHelperText('');
        }
    }, [matchPassword, isMatchPasswordValid, isMatchPasswordEdited, isMatchPasswordOmitted, password])

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEmailOmitted(email === '');
        setIsPasswordOmitted(password === '');
        setIsMatchPasswordOmitted(matchPassword === '');
        if (isNameValid && isEmailValid && isPasswordValid && isMatchPasswordValid) {
            const data = new FormData(event.currentTarget);
            axios
                .post("http://localhost:8080/api/authentication/register", {
                    username: data.get('username'),
                    email: data.get('email'),
                    password: data.get('password')
                })
                .then( () => {
                        setIsRegistrationInProgress(false);
                })
                .catch((error) => {
                    if (error.response) {
                        setErrorMessage(error.response.data)
                    }
                })
        }
    }

    if (isRegistrationInProgress) {
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
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}/>
                    <Typography variant="h5">
                        REJESTRACJA
                    </Typography>
                    <Typography sx={{m: 1, color: 'error.main'}}>
                        {errorMessage}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Nazwa użytkownika"
                            name="username"
                            error={!isNameValid && isNameEdited}
                            helperText={usernameHelperText}
                            onChange={(e) => onUsernameChange(e)}
                            onFocus={() => setIsNameFocused(true)}
                            onBlur={onBlurUsername}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adres email"
                            name="email"
                            error={!isEmailValid && (isEmailEdited || isEmailOmitted)}
                            helperText={emailHelperText}
                            onChange={(e) => onEmailChange(e)}
                            onBlur={onBlurEmail}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Hasło"
                            type="password"
                            error={!isPasswordValid && (isPasswordEdited || isPasswordOmitted)}
                            helperText={passwordHelperText}
                            onFocus={() => {
                                setIsEmailOmitted(email === '');
                                setIsPasswordFocused(true);
                            }}
                            onChange={(e) => onPasswordChange(e)}
                            onBlur={onBlurPassword}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="matchPassword"
                            label="Powtórz hasło"
                            type="password"
                            error={(!isMatchPasswordValid && isMatchPasswordEdited) || isMatchPasswordOmitted}
                            helperText={matchPasswordHelperText}
                            onFocus={() => {
                                setIsEmailOmitted(email === '');
                                setIsPasswordOmitted(password === '');
                            }}
                            onChange={(e) => onMatchPasswordChange(e)}
                            onBlur={onBlurMatchPassword}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, py: 2}}
                        >
                            Zapisz się
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={() =>navigate("/login/")} style={{textDecoration: 'underline', fontSize:'11px'}} variant="subtitle1">
                                    Masz już konto? Zaloguj się!
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        );
    } else {
        return (
            <Container component="main" maxWidth="sm" sx={{ py: 10 }}>
                <Typography variant="h6">
                    {CONFIRMATION_EMAIL_INFO}
                </Typography>
            </Container>
        )
    }
};

export default Register;