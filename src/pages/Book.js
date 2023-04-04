import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';
import axios from 'axios';
import {useLocation, useParams} from "react-router-dom";
import CreateEvent from "../components/CreateEvent";


const Book = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    console.log("Starting rendering book page");

    useEffect(() => {
        console.log("Trying to call GAPI");
        axios.get('https://www.googleapis.com/books/v1/volumes?q=strange&maxResults=20')
            .then(res => setData(res.data.items))
            .catch(err => console.log("Error: " + err));
    }, []);
    console.log(bookData)


    return (
        <div>
            <div>
                <BookHeader book={bookData && bookData[0]} />
                <BookDescription description={bookData && bookData[0]} />
                <CreateEvent />
            </div>
        </div>
    );
};

export default Book;