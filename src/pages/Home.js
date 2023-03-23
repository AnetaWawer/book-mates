import React, {useState} from 'react';
import BooksBar from "../components/BooksBar";
import {Container, Typography} from "@mui/material";


function Home() {
    const [books, setBooks] = useState([
        {
            id: 1,
            url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
            title: "Gdzie śpiewają raki",
            author: "Delia Owens"
        },
        {
            id: 2,
            url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
            title: "Gdzie śpiewają raki",
            author: "Delia Owens"
        },
        {
            id: 3,
            url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
            title: "Gdzie śpiewają raki",
            author: "Delia Owens"
        },
        {
            id: 4,
            url: "https://s.lubimyczytac.pl/upload/books/5019000/5019183/1045632-352x500.jpg",
            title: "Gdzie śpiewają raki",
            author: "Delia Owens"
        }
    ]
    )

    return (
        <Container>
            <Typography variant="h3" sx={{textAlign: "center"}}>Polecane książki</Typography>
            <BooksBar books={books}> </BooksBar>
        </Container>
    );
}

export default Home;