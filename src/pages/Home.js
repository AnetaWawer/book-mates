import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import CardsPanel from "../components/templates/CardsPanel";
import ForumCarouselPanel from "../components/templates/ForumCarouselPanel";

function Home() {
    const [books, setBooks] = useState([]);
    const booksHeader = "Polecane książki";
    const [events, setEvents] = useState([]);
    const eventsHeader = "Polecane wydarzenia";
    const forumHeader = "Forum";
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        if (!books.length) {
            axios.get('http://localhost:8080/api/books?amount=4')
                .then(response => {
                        setBooks(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, []);

    useEffect(() => {
        if (!events.length) {
            axios.get('http://localhost:8080/api/events/top_4')
                .then(response => {
                    setEvents(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, []);

    useEffect(() => {
        if (!topics.length) {
            axios.get('http://localhost:8080/api/topics/top_4')
                .then(response => {
                        setTopics(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <ContainerSize>
            <CardsPanel elements={books} header={booksHeader}/>
            <CardsPanel elements={events} header={eventsHeader}/>
            <ForumCarouselPanel topics={topics} header={forumHeader}/>
        </ContainerSize>
    );
}

export default Home;