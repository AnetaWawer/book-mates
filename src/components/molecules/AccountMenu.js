import React from "react";
import {AccountIcon, CustomizedMenuItem, Logout, Register, Login} from "./AccountMenu.styles";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AccountMenu = ({isUserLogged, close}) => {
    const navigate = useNavigate();
    function logout(){
        axios.post('http://localhost:8080/api/authentication/logout_user', localStorage.getItem('refresh'), {
            headers: {'Content-Type': 'text/plain'}
        });
        localStorage.removeItem('user');
        localStorage.removeItem('refresh');


    }
    function redirectTo(endpoint){
        navigate(endpoint);
    }

    if (isUserLogged){
        return (
            <Box>
                <CustomizedMenuItem onClick={() => {close(); redirectTo("/users/profile")}}><AccountIcon /> Mój profil </CustomizedMenuItem>
                <CustomizedMenuItem onClick={() => {logout(); close(); redirectTo("/"); }}> <Logout />Wyloguj się </CustomizedMenuItem>
            </Box>
        )
    } else {
        return (
            <Box>
                <CustomizedMenuItem onClick={() => {close(); redirectTo("/register")}}><Register /> Zarejestruj się  </CustomizedMenuItem>
                <CustomizedMenuItem onClick={() => {close(); redirectTo("/login")}}><Login /> Zaloguj się </CustomizedMenuItem>
            </Box>
        )
    }
}

export default AccountMenu