import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';
import axios from 'axios';
import {useLocation, useParams} from "react-router-dom";
import CreateEvent from "../components/CreateEvent";


const Book = () => {
    const [book, setBook] = useState({});
    const location = useLocation();
    let { bookId } = useParams();
    console.log(bookId);
    // const [bookId, setBookId] = useState(location.pathname.substring(7)); //we remove '/books/' from the path


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
                <CreateEvent />
            </div>
        </div>
    );
};

export default Book;