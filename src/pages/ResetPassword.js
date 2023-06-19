import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography
} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();
    const [params] = useSearchParams();
    const token = params.get('token');
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^\s'"`&<>*]{8,24}$/;

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
            setPasswordHelperText('Hasło musi zawierać od 8 do 24 znaków i musi zawierać co najmniej: jedną małą literę, jedną wielką literę i jedną cyfrę. Nie może zwierać znaków \"\`\'&<>* ');
        } else if (isPasswordOmitted) {
            setPasswordHelperText('Należy podać hasło');
        } else if (!isPasswordValid && isPasswordEdited) {
            setPasswordHelperText('Niepoprawne hasło. Hasło musi zawierać od 8 do 24 znaków i musi zawierać co najmniej: jedną małą literę, jedną wielką literę i jedną cyfrę. Nie może zwierać znaków \"\`\'&<>*');
        } else {
            setPasswordHelperText('');
        }
    }, [password, isPasswordValid, isPasswordEdited, isPasswordOmitted, isPasswordFocused])

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
        if (isPasswordValid && isMatchPasswordValid) {
            const data = new FormData(event.currentTarget);
            axios.put(`http://localhost:8080/api/authentication/reset_password`, {
                newPassword: data.get('password'),
            }, {
                params: {
                    token: token
                },
            })
                .then(response => {
                    console.log(response)
                    navigate("/login/");
                })
                .catch(error => {
                    console.log(error);
                })
        }
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
                    RESETOWANIE HASŁA
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Nowe hasło"
                        type="password"
                        error={!isPasswordValid && (isPasswordEdited || isPasswordOmitted)}
                        helperText={passwordHelperText}
                        onFocus={() => {
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
                        label="Powtórz nowe hasło"
                        type="password"
                        error={(!isMatchPasswordValid && isMatchPasswordEdited) || isMatchPasswordOmitted}
                        helperText={matchPasswordHelperText}
                        onFocus={() => {
                            setIsPasswordOmitted(password === '');
                        }}
                        onChange={(e) => onMatchPasswordChange(e)}
                        onBlur={onBlurMatchPassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 2 }}
                    >
                        Zapisz
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ResetPassword;