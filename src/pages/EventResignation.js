import React, {useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {MainContainer} from "../components/Container.styles";
import EventResignationDetails from "../components/molecules/EventResignationDetails";
import Event from "./Event"
import BasicSnackBar from "../components/atoms/BasicSnackBar";


function EventResignation() {
    const navigate = useNavigate();
    let { eventId } = useParams();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const resignFromEvent = () => {
        if (localStorage.getItem('user')!=null) {
            axios.put('http://localhost:8080/api/events/' + eventId + '/resign')
                .then((response) => {
                    console.log(response)
                })
                .then(() => navigate("/"))
                .catch(error => console.log(error))
        } else {
            setOpen(true);
            setMessage("Aby zrezygnować z wydarzenia musisz być zalagowany!");
        }
    };

    return (
        <MainContainer>
            <EventResignationDetails resignFromEvent={resignFromEvent} />
            <Event />
            <BasicSnackBar
                open={open}
                handleClose={handleClose}
                message={message}
                autoHideDuration={5000}
            >
            </BasicSnackBar>
        </MainContainer>
    )
}

export default EventResignation;