import React, { useState, useEffect } from 'react';
import BookDetails from '../components/organisms/BookDetails';
import Description from '../components/atoms/Description';
import axios from 'axios';
import {useParams} from "react-router-dom";
import NewEventModal from "../components/templates/NewEventModal";
import {Box} from "@mui/material";


const Book = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:8080/api/books/search/' + id)
            .then(response => {
                    setBook(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [id]);

    return (
        <Box sx={{mt: 5}}>
            <BookDetails book={book} />
            <Description description={book.description} />
            <NewEventModal book={book}/>
        </Box>
    );
};

export default Book;