import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box} from "@mui/material";
import Shelf from "../components/templates/Shelf";
import SectionHeader from "../components/atoms/SectionHeader";
import {MainContainer} from "../components/Container.styles";
import SubscribedEvents from "../components/templates/SubscribedEvents";
import ForumPanel from "../components/templates/ForumPanel";
import {useWindowSize} from "../hooks/useWindowSize";

export default function Account() {

    const [books, setBooks] = useState([]);

    const [favoriteBooksSequences, setFavoriteBooksSequences] = useState([])
    const [readBooksSequences, setReadBooksSequences] = useState([])
    const [toReadBooksSequences, setToReadBooksSequences] = useState([])
    const [giftBooksSequences, setGiftBooksSequences] = useState([])
    const [savedBooksSequences, setSavedBooksSequences] = useState([])

    const [events, setEvents] = useState([]);
    const [eventsSequences, setEventsSequences] = useState([]);

    const [topics, setTopics] = useState([]);

    const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(()=> getInitNumberOfCardsInCarousel());

    const size = useWindowSize();

    // fetch books from the backend and process the data for display on the shelves if form of a carousel
    useEffect(() => {
        if (!books.length) {
            axios.get(`http://localhost:8080/api/users/3/books`)
                .then(response => {
                    const userBooks = response.data;
                    setBooks(userBooks);
                    setFavoriteBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "FAVORITE"), numberOfCardsOnPage));
                    setReadBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "READ"), numberOfCardsOnPage));
                    setToReadBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "TO_READ"), numberOfCardsOnPage));
                    setGiftBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "GIFT"), numberOfCardsOnPage));
                    setSavedBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "SAVED"), numberOfCardsOnPage));
                })
                .catch(error => console.log(error));
        }
    }, [numberOfCardsOnPage]);


    // fetch events from the backend and process the data for display as a carousel
    useEffect(() => {
        if (!events.length) {
            axios.get(`http://localhost:8080/api/users/3/events`)
                .then(response => {
                    setEvents(response.data);
                    const userEvents = response.data;
                    setEventsSequences(divideSequence(userEvents, numberOfCardsOnPage));
                })
                .catch(error => console.log(error));
        }
    }, []);

    // fetch topics from the backend
    useEffect(() => {
        if (!topics.length) {
            axios.get(`http://localhost:8080/api/users/3/topics`)
                .then(response => {
                    setTopics(response.data);
                })
                .catch(error => console.log(error));
        }
    }, []);


    // react on size change, i.e. the number of cards in carousel will increase or decrease depending on width
    useEffect(() => {
        if (size[1] > 1200) {
            setNumberOfCardsOnPage(4);
        } else if (size[1] > 900 && size[1] <= 1200) {
            setNumberOfCardsOnPage(2);
        } else {
            setNumberOfCardsOnPage(1);
        }
        const favoriteBooks = books.filter(book => book.shelf === "FAVORITE");
        setFavoriteBooksSequences(divideSequence(favoriteBooks, numberOfCardsOnPage));
        const readBooks = books.filter(book => book.shelf === "READ");
        setReadBooksSequences(divideSequence(readBooks, numberOfCardsOnPage));
        const toReadBooks = books.filter(book => book.shelf === "TO_READ");
        setToReadBooksSequences(divideSequence(toReadBooks, numberOfCardsOnPage));
        const giftBooks = books.filter(book => book.shelf === "GIFT");
        setGiftBooksSequences(divideSequence(giftBooks, numberOfCardsOnPage));
        const savedBooks = books.filter(book => book.shelf === "SAVED");
        setSavedBooksSequences(divideSequence(savedBooks, numberOfCardsOnPage));
        setEventsSequences(divideSequence(events, numberOfCardsOnPage));
    }, [size]);

    return (
        <MainContainer >
            <Box sx={{mt: 8}}>
                <SectionHeader header={"Moje książki"} />
                <Shelf header={"Ulubione"} booksSequences={favoriteBooksSequences}/>
                <Shelf header={"Przeczytane"} booksSequences={readBooksSequences}/>
                <Shelf header={"Chcę przeczytać"} booksSequences={toReadBooksSequences}/>
                <Shelf header={"Na prezent"} booksSequences={giftBooksSequences}/>
                <Shelf header={"Pozostałe"} booksSequences={savedBooksSequences}/>
            </Box>
            <Box sx={{mt: 8}}>
                <SectionHeader header={"Moje wydarzenia"} />
                <SubscribedEvents events={eventsSequences}/>
            </Box>
            <ForumPanel topics={topics} header="Moje wątki" />
        </MainContainer>
    );
}
const getInitNumberOfCardsInCarousel = () => {
    const width = window.innerWidth;
    if (width > 1200) return 4;
    if (width > 900 && width <= 1200) return 2;
    else return 1;
}

const divideSequence = (sequence, maxSubsequenceLength) => {
    let sequenceOfSubsequences = []
    for (let i = 0; i < sequence.length; i = i + maxSubsequenceLength) {
        let subsequence = [];
        for (let j = i ; j < i + maxSubsequenceLength && j < sequence.length; j++) {
            subsequence.push(sequence[j])
        }
        sequenceOfSubsequences.push(subsequence);
    }
    return sequenceOfSubsequences;
}
