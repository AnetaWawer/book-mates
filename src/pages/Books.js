import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsBar from "../components/organisms/CardsBar";
import {useParams} from "react-router-dom";


const Books = () => {

    const [books, setBooks] = useState([]);
    const { query } = useParams();


    useEffect(() => {
        axios.get('http://localhost:8080/api/books/search/' + query)
            .then(response => {
                    setBooks(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [query]);

    return (
        <CardsBar elements = {books}  />
    );
}

export default Books;