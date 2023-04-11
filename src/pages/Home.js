import React, {useEffect, useState} from 'react';
import ForumPanel from "../components/templates/ForumPanel";
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import CardsPanel from "../components/templates/CardsPanel";
import Carousel from "react-material-ui-carousel";
import SingleTopic from "../components/SingleTopic";
import SectionHeader from "../components/SectionHeader";
import SeeMoreButton from "../components/SeeMoreButton";

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
    }, [books]);

    useEffect(() => {
        if (!events.length) {
            axios.get('http://localhost:8080/api/events/top_4')
                .then(response => {
                    setEvents(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [events]);

    useEffect(() => {
        if (!topics.length) {
            axios.get('http://localhost:8080/api/topics/top_4')
                .then(response => {
                        setTopics(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [topics]);

    return (
        <ContainerSize>
            <CardsPanel elements={books} header={booksHeader}/>
            <CardsPanel elements={events} header={eventsHeader}/>
            {/*<ForumPanel topics={topics} header={forumHeader} />*/}
            <SectionHeader header={forumHeader} />
            <Carousel animation="fade" duration={900} interval={3000}>
                {
                    topics.map((topic, i) => (
                        <SingleTopic topic={topic} key={i}/>
                    ))
                }
            </Carousel>
            <SeeMoreButton />

        </ContainerSize>
    );
}

export default Home;