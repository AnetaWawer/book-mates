import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsBar from "../components/organisms/CardsBar";


const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                    setBooks(response.data);
                }
            )
            .catch(error => console.log(error));
    }, []);


    return (
        <CardsBar elements = {books}  />
    );
}

export default Books;