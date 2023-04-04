import React, {useEffect, useState} from 'react';

import axios from "axios";
import {ContainerSize} from "../components/Container.styles";

import {useParams} from "react-router-dom";
import EventHeader from "../components/EventHeader";
import BookDescription from "../components/BookDescription";


function Event() {
    const [book, setBook] = useState({});
    const [event, setEvent] = useState({});
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
                    }
                )
                .catch(error => console.log(error));

    }, [eventId]);


    return (
        <ContainerSize>
            <EventHeader book={book} event={event}/>
            <BookDescription description={event.description}/>
        </ContainerSize>
    );
}

export default Event;