import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsBar from "../components/organisms/CardsBar";
import {useSearchParams} from "react-router-dom";


const Books = () => {

    const [books, setBooks] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get('query');
    console.log("Books.query = " + query);
    const criteria = searchParams.get('criteria');
    // console.log("Url send to backend = " + 'http://localhost:8080/api/books/search/' + criteria +":/\"" + query + "\"");

    useEffect(() => {
        // axios.get('http://localhost:8080/api/books/search/' + criteria +":/\"" + query + "\"")
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