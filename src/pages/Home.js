import React, {useEffect, useState} from 'react';
import ForumPanel from "../components/ForumPanel";
import {Container, Typography} from "@mui/material";
import BooksBar from "../components/BooksBar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (!books.length) {
            axios.get('http://localhost:8080/api/books?amount=4')
                .then(response => {
                        setBooks(response.data);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [books]);

    // const [books, setBooks] = useState(
    //     [
    //         {
    //             id: 1,
    //             url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
    //             title: "Gdzie śpiewają raki",
    //             author: "Delia Owens"
    //         },
    //         {
    //             id: 2,
    //             url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
    //             title: "Gdzie śpiewają raki",
    //             author: "Delia Owens"
    //         },
    //         {
    //             id: 3,
    //             url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
    //             title: "Gdzie śpiewają raki",
    //             author: "Delia Owens"
    //         },
    //         {
    //             id: 4,
    //             url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
    //             title: "Gdzie śpiewają raki",
    //             author: "Delia Owens"
    //         }
    //     ]
    // )
    //

    return (
        <Container>
            <Typography variant="h3" sx={{textAlign: "center"}}>Polecane książki</Typography>
            <BooksBar books={books}> </BooksBar>
            <ForumPanel />
        </Container>
    );
}

export default Home;