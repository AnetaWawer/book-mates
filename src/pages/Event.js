import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer} from "../components/Container.styles";
import {useParams} from "react-router-dom";
import EventDetails from "../components/organisms/EventDetails";
import Description from "../components/atoms/Description";


function Event() {
    const [event, setEvent] = useState({});
    const [userEvents, setUserEvents] = useState([])
    const [organizer, setOrganizer] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [eventParticipants, setEventParticipants] = useState(0);
    let { eventId } = useParams();
    let alreadySubscribed = false;
    let eventOrganizer="";

    useEffect(() => {
        axios.get('http://localhost:8080/api/events/' + eventId )
            .then(response => {
                setEvent(response.data);
                setEventParticipants(event.participants+event.waitingList)
                }
            )
            .catch(error => console.log(error));
    }, [eventParticipants]);

    useEffect(() => {
        const checkIfUserIsLoggedId = () => {
                if (localStorage.getItem('user')!=null){
                    axios.get(`http://localhost:8080/api/users/profile`)
                    .then(response => {
                        setUserEvents(response.data.events)
                        setOrganizer(response.data.nickname)
                        setIsLoggedIn(true)
                    })
                    .catch(error => console.log(error));
                }
            }
            checkIfUserIsLoggedId()
    }, []);

    userEvents.forEach((userEvent) => {
        if (userEvent.eventId == eventId) {
            alreadySubscribed = true;
            eventOrganizer=userEvent
            return;
        }
    });


    return (
        <MainContainer>
            <EventDetails event={event} getParticipants={setEventParticipants} alreadySubscribed={alreadySubscribed} isLoggedIn={isLoggedIn} organizer={organizer}/>
            <Description description={event.description}/>
        </MainContainer>
    );
}

export default Event;