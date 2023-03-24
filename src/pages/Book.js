import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';
import axios from 'axios';
import {useLocation} from "react-router-dom";


const Book = () => {
    const [book, setBook] = useState({});
    const location = useLocation();

    const [bookId, setBookId] = useState(location.pathname.substring(7)); //we remove '/books/' from the path


    useEffect(() => {
        axios.get('http://localhost:8080/api/books/' + bookId)
            .then(response => {
                setBook(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [bookId]);


    return (
        <div>
            <div>
                <BookHeader book={book} />
                <BookDescription description={book.description} />
            </div>
        </div>
    );
};

export default Book;