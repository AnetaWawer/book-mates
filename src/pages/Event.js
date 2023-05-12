import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer} from "../components/Container.styles";
import {useParams} from "react-router-dom";
import EventDetails from "../components/organisms/EventDetails";
import Description from "../components/atoms/Description";


function Event() {
    const [event, setEvent] = useState({});
    const [eventParticipants, setEventParticipants] = useState(0);
    const [book, setBook] = useState({});
    let { bookId } = useParams();
    let { eventId } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/api/books/' + bookId)
            .then(response => {
                    setBook(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [bookId]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/events/' + eventId )
            .then(response => {
                setEvent(response.data);
                setEventParticipants(event.participants+event.waitingList)
                }
            )
            .catch(error => console.log(error));
    }, [eventParticipants]);

    return (
        <MainContainer>
            <EventDetails event={event} getParticipants={setEventParticipants}/>
            <Description description={event.description}/>
        </MainContainer>
    );
}

export default Event;