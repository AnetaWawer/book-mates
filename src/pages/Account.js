import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box, Tab, Tabs} from "@mui/material";
import Shelf from "../components/templates/Shelf";
import SectionHeader from "../components/atoms/SectionHeader";
import {MainContainer} from "../components/Container.styles";
import SubscribedEvents from "../components/templates/SubscribedEvents";
import {useWindowSize} from "../hooks/useWindowSize";
import {useParams} from "react-router-dom";
import TopicsList from "../components/organisms/TopicsList";
import TabsBar from "../components/atoms/TabsBar";

export default function Account() {

    const { id } = useParams();

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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function setIndex(index) {
        return {
            id: `${index}`,
        };
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/` + id)
            .then(response => {
                const user = response.data;

                // fetch books
                const userBooks = user.books;
                setBooks(userBooks);
                setFavoriteBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "FAVORITE"), numberOfCardsOnPage));
                setReadBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "READ"), numberOfCardsOnPage));
                setToReadBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "TO_READ"), numberOfCardsOnPage));
                setGiftBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "GIFT"), numberOfCardsOnPage));
                setSavedBooksSequences(divideSequence(userBooks.filter(b => b.shelf === "SAVED"), numberOfCardsOnPage));
                // fetch events
                const userEvents = user.events;
                setEvents(userEvents);
                setEventsSequences(divideSequence(userEvents, numberOfCardsOnPage));
                // fetch topics
                setTopics(user.topics);
            })
            .catch(error => console.log(error));
        }, [numberOfCardsOnPage, id]);



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
                <Box display="flex" justifyContent="center" width="100%">
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Ulubione" {...setIndex(0)} />
                    <Tab label="Przeczytane" {...setIndex(1)} />
                    <Tab label="Chcę przeczytać" {...setIndex(2)} />
                    <Tab label="Na prezent" {...setIndex(3)} />
                    <Tab label="Pozostałe" {...setIndex(4)} />
                </Tabs>
                </Box>
                <TabsBar value={value} index={0}>
                    <Shelf  booksSequences={favoriteBooksSequences}/>
                </TabsBar>
                <TabsBar value={value} index={1}>
                    <Shelf booksSequences={readBooksSequences}/>
                </TabsBar>
                <TabsBar value={value} index={2}>
                    <Shelf  booksSequences={toReadBooksSequences}/>
                </TabsBar>
                <TabsBar value={value} index={3}>
                    <Shelf booksSequences={giftBooksSequences}/>
                </TabsBar>
                <TabsBar value={value} index={4}>
                    <Shelf booksSequences={savedBooksSequences}/>
                </TabsBar>
                <SectionHeader header={id === "profile" ? "Moje książki" : "Książki " }/>
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
            <Box sx={{mt: 8}}>
                <SectionHeader header= {id === "profile" ? "Moje wątki " :  "Wątki " } />
                <TopicsList topics={topics} />
            </Box>
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
