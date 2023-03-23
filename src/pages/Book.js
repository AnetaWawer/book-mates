import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';
import axios from 'axios';


const Book = ({ bookId }) => {
    const[book, setBook] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/api/books/4')
            .then(response => setBook(response.data))
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