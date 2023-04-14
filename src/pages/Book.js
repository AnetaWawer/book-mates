import React, { useState, useEffect } from 'react';
import BookDetails from '../components/organisms/BookDetails';
import Description from '../components/atoms/Description';
import axios from 'axios';
import {useParams} from "react-router-dom";
import NewEventModal from "../components/templates/NewEventModal";
import {Box} from "@mui/material";


const Book = () => {
    const [book, setBook] = useState({});
    const { query } = useParams();

    // const [bookId, setBookId] = useState(location.pathname.substring(7)); //we remove '/books/' from the path


    useEffect(() => {
        axios.get('http://localhost:8080/api/books/search/' + query)
            .then(response => {
                    setBook(response.data[1]);
                }
            )
            .catch(error => console.log(error));
    }, [query]);

    return (
        <Box sx={{mt: 5}}>
            <BookDetails book={book} />
            <Description description={book.description} />
            <NewEventModal />
        </Box>
    );
};

export default Book;