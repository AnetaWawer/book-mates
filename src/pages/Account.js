import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box} from "@mui/material";
import Shelf from "../components/molecules/Shelf";
import SectionHeader from "../components/atoms/SectionHeader";
import {ContainerSize} from "../components/Container.styles";
import SubscribedEvents from "../components/molecules/SubscribedEvents";
import UserTopics from "../components/molecules/UserTopics";

export default function Account() {

    const [books, setBooks] = useState([]);
    const [events, setEvents] = useState([]);
    const [topics, setTopics] = useState([]);
    const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(()=> computeNumber());
    const [favoriteBooksSequences, setFavoriteBooksSequences] = useState([])
    const [readBooksSequences, setReadBooksSequences] = useState([])
    const [toReadBooksSequences, setToReadBooksSequences] = useState([])
    const [giftBooksSequences, setGiftBooksSequences] = useState([])
    const [savedBooksSequences, setSavedBooksSequences] = useState([])

    useEffect(() => {
        if (!books.length) {
            axios.get(`http://localhost:8080/api/users/3/books`)
                .then(response => {
                    setBooks(response.data);
                    const favoriteBooks = response.data.filter(book => book.shelf === "FAVORITE");
                    setFavoriteBooksSequences(divideSequence(favoriteBooks, numberOfCardsOnPage));
                    const readBooks = response.data.filter(book => book.shelf === "READ");
                    setReadBooksSequences(divideSequence(readBooks, numberOfCardsOnPage));
                    const toReadBooks = response.data.filter(book => book.shelf === "TO_READ");
                    setToReadBooksSequences(divideSequence(toReadBooks, numberOfCardsOnPage));
                    const giftBooks = response.data.filter(book => book.shelf === "GIFT");
                    setGiftBooksSequences(divideSequence(giftBooks, numberOfCardsOnPage));
                    const savedBooks = response.data.filter(book => book.shelf === "SAVED");
                    setSavedBooksSequences(divideSequence(savedBooks, numberOfCardsOnPage));
                })
                .catch(error => console.log(error));
        }
    }, []);

    useEffect(() => {
        if (!events.length) {
            axios.get(`http://localhost:8080/api/users/3/events`)
                .then(response => {
                    setEvents(response.data);
                    const userEvents = response.data;
                    setEvents(divideSequence(userEvents, numberOfCardsOnPage));
                })
                .catch(error => console.log(error));
        }
    }, []);

    useEffect(() => {
        if (!topics.length) {
            axios.get(`http://localhost:8080/api/users/3/topics`)
                .then(response => {
                    setTopics(response.data);
                })
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <ContainerSize >
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
                <SubscribedEvents events={events}/>
            </Box>
            <Box sx={{mt: 8}}>
                <SectionHeader header={"Moje wątki"} />
                <UserTopics topics={topics}/>
            </Box>
        </ContainerSize>
    );
}
function computeNumber() {
    // eslint-disable-next-line
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width >= 1200) return 4;
    if (width >= 600 && width < 1200) return 2;
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