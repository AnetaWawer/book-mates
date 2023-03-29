import React, {useEffect, useState} from 'react';
import ForumPanel from "../components/ForumPanel";
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import CardsPanel from "../components/CardsPanel";

function Home() {
    const [books, setBooks] = useState([]);
    const booksHeader = "Polecane książki";
    const [events, setEvents] = useState([]);
    const eventsHeader = "Polecane wydarzenia";
    const forumHeader = "Forum";

    useEffect(() => {
        if (!books.length) {
            axios.get('http://localhost:8080/api/books?amount=4')
                .then(response => {
                        setBooks(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [books]);

    useEffect(() => {
        if (!events.length) {
            axios.get('http://localhost:8080/api/events?amount=4')
                .then(response => {
                    setEvents(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [events]);

    return (
        <ContainerSize>
            <CardsPanel elements={books} header={booksHeader}/>
            <CardsPanel elements={events} header={eventsHeader}/>
            <ForumPanel header={forumHeader} />
        </ContainerSize>
    );
}

export default Home;