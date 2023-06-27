import React, {useEffect, useState} from 'react';
import BookDetails from '../components/organisms/BookDetails';
import Description from '../components/atoms/Description';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import CardsPanel from "../components/templates/CardsPanel";
import SectionHeader from "../components/atoms/SectionHeader";
import {MainContainer, Panel} from "../components/Container.styles";
import CircularProgress from "@mui/material/CircularProgress";
import ForumPanel from "../components/templates/ForumPanel";
import NewTopicForm from "../components/molecules/NewTopicForm";
import Grid from "@mui/material/Grid";
import NewEventModal from "../components/templates/NewEventModal";


const Book = () => {
    const bookHeader = "O tytule"
    const [book, setBook] = useState({});
    const [events, setEvents] = useState([]);
    const [eventsNumber, setEventsNumber] = useState(0);
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const eventsHeader = "Wydarzenia";
    const forumHeader = "Dyskusje";

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/api/books/search/' + id)
            .then(response => {
                    setBook(response.data);
                    setLoading(false);
                }
            )
            .catch(error => {setLoading(false);
                console.log(error)}
            );
    }, [id]);

    const fetchEvent = () => {
        axios.get('http://localhost:8080/api/books/'+ id +'/events')
            .then(response => {
                    setEvents(response.data);
                    setEventsNumber(events.length)
                }
            )
            .catch(error => console.log(error));
    }


    useEffect(() => {
            fetchEvent();
        },[eventsNumber]);

    const fetchTopic = () => {
        axios.get('http://localhost:8080/api/books/'+ id +'/topics')
            .then(response => {
                    setTopics(response.data);
                }
            )
            .catch(error => console.log(error));}

    useEffect(() => {
        fetchTopic();
    }, [id]);

    return (
        <MainContainer>
            <SectionHeader header={bookHeader} />
            <Box sx={{mt: 5}}>
                <div>
                    {loading ? <CircularProgress /> : <BookDetails book={book} fetchEvent={fetchEvent}/>}
                </div>
                <Description description={book.description} />
                <CardsPanel elements={events} header={eventsHeader} book={book} fetchEvent={fetchEvent} />
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "right" }}>
                    <NewEventModal book={book} fetchEvent={fetchEvent} />
                </Grid>
               <Panel>
                   <ForumPanel topics={topics} header={forumHeader} />
                   <NewTopicForm fetchTopic={fetchTopic} />
               </Panel>
            </Box>
        </ MainContainer>
    );
};

export default Book;