import React, {useEffect, useState} from 'react';
import ForumPanel from "../components/ForumPanel";
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import CardsPanel from "../components/CardsPanel";
import {useNavigate} from "react-router-dom";

function Account() {
    const navigate = useNavigate();

    const userId = 1;
    const [books, setBooks] = useState([]);
    const booksHeader = "Książki użykownika";
    const [events, setEvents] = useState([]);
    const eventsHeader = "Polecane wydarzenia";
    const forumHeader = "Forum";
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        if (!books.length) {
            axios.get(`http://localhost:8080/api/users/1/books`)
                .then(response => {
                        setBooks(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [books]);

    // useEffect(() => {
    //     if (!events.length) {
    //         axios.get('http://localhost:8080/api/events/top_4')
    //             .then(response => {
    //                     setEvents(response.data);
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     }
    // }, [events]);
    //
    // useEffect(() => {
    //     if (!topics.length) {
    //         axios.get('http://localhost:8080/api/topics/top_4')
    //             .then(response => {
    //                     setTopics(response.data);
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     }
    // }, [topics]);

    return (
        <ContainerSize>
            <CardsPanel
                elements={books.filter(book => book.shelf==="FAVORITE")}
                header={"Favorite"}
            />
            <CardsPanel
                elements={books.filter(book => book.shelf==="READ")}
                header={booksHeader}
            />
            <CardsPanel
                elements={books.filter(book => book.shelf==="TO_READ")}
                header={booksHeader}
            />
            <CardsPanel
                elements={books.filter(book => book.shelf==="GIFT")}
                header={booksHeader}
            />
            <CardsPanel
                elements={books.filter(book => book.shelf==="SAVED")}
                header={booksHeader}
        />
            {/*<CardsPanel elements={events} header={eventsHeader}/>*/}
            {/*<ForumPanel topics={topics} header={forumHeader} />*/}
        </ContainerSize>
    );
}

export default Account;