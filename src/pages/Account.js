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
import moment from "moment";

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
    const [eventOrganizer, setEventOrganizer] = useState([]);
    const [eventParticipant, setEventParticipant] = useState([]);
    const [eventWaitingList, setEventWaitingList] = useState([]);
    const [eventsInPast, setEventsInPast] = useState([]);

    const [topics, setTopics] = useState([]);

    const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(()=> getInitNumberOfCardsInCarousel());

    const size = useWindowSize();

    const [bookValue, setBookValue] = React.useState(0);
    const [eventValue, setEventValue] = React.useState(0);

    const handleShelfChange = (event, newValue) => {
        setBookValue(newValue);
    };

    const handleEventChange = (event, newValue) => {
        setEventValue(newValue);
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
                setEventsInPast(divideSequence(userEvents.filter(e => moment(moment()).isAfter(e.eventDate)), numberOfCardsOnPage))
                setEventParticipant(divideSequence(userEvents.filter(e => e.participantType === "PARTICIPANT" && moment(moment()).isBefore(e.eventDate)), numberOfCardsOnPage));
                setEventWaitingList(divideSequence(userEvents.filter(e => e.participantType === "WAITING_LIST" && moment(moment()).isBefore(e.eventDate)), numberOfCardsOnPage));
                setEventOrganizer(divideSequence(userEvents.filter(e => e.participantType === "ORGANIZER" && moment(moment()).isBefore(e.eventDate)), numberOfCardsOnPage));

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
                    <Tabs value={bookValue} onChange={handleShelfChange} sx={{'& .MuiTabs-flexContainer': {flexWrap: 'wrap',},}}>
                        <Tab label="Ulubione" {...setIndex(0)} />
                        <Tab label="Przeczytane" {...setIndex(1)} />
                        <Tab label="Chcę przeczytać" {...setIndex(2)} />
                        <Tab label="Na prezent" {...setIndex(3)} />
                        <Tab label="Pozostałe" {...setIndex(4)} />
                    </Tabs>
                </Box>
                <TabsBar value={bookValue} index={0}>
                    <Shelf  booksSequences={favoriteBooksSequences}/>
                </TabsBar>
                <TabsBar value={bookValue} index={1}>
                    <Shelf booksSequences={readBooksSequences}/>
                </TabsBar>
                <TabsBar value={bookValue} index={2}>
                    <Shelf  booksSequences={toReadBooksSequences}/>
                </TabsBar>
                <TabsBar value={bookValue} index={3}>
                    <Shelf booksSequences={giftBooksSequences}/>
                </TabsBar>
                <TabsBar value={bookValue} index={4}>
                    <Shelf booksSequences={savedBooksSequences}/>
                </TabsBar>
            </Box>
            <Box sx={{mt: 8}}>
                <SectionHeader header={"Moje wydarzenia"} />
                <Box display="flex" justifyContent="center" width="100%">
                    <Tabs value={eventValue} onChange={handleEventChange} sx={{'& .MuiTabs-flexContainer': {flexWrap: 'wrap',},}}>
                        <Tab label="Uczestniczę" {...setIndex(0)} />
                        <Tab label="Na liście rezerwowych" {...setIndex(1)} />
                        <Tab label="Organizuję" {...setIndex(2)} />
                        <Tab label="Odbyły się" {...setIndex(3)} />
                    </Tabs>
                </Box>
                <TabsBar value={eventValue} index={0}>
                    <SubscribedEvents events={eventParticipant}/>
                </TabsBar>
                <TabsBar value={eventValue} index={1}>
                    <SubscribedEvents events={eventWaitingList}/>
                </TabsBar>
                <TabsBar value={eventValue} index={2}>
                    <SubscribedEvents  events={eventOrganizer}/>
                </TabsBar>
                <TabsBar value={eventValue} index={3}>
                    <SubscribedEvents  events={eventsInPast}/>
                </TabsBar>
            </Box>
            <Box sx={{mt: 8}}>
                <SectionHeader header="Moje wątki" />
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