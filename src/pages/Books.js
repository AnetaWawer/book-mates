import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import BookHeader from "../components/BookHeader";

const Books = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    console.log("Starting rendering book page");

    useEffect(() => {
        console.log("Trying to call API");
        axios.get('http://localhost:8080/api/books/search/' + query)
            .then(res => setData(res.data))
            .catch(err => console.log("Error: " + err));
    }, []);
    console.log(bookData)


    return (
        <div>
            {bookData.length > 0 && <BookHeader book={bookData} />}
        </div>
    );
}

export default Books;