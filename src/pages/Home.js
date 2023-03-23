import React, {useState} from 'react';
import ForumPanel from "../components/ForumPanel";
import {Container, Typography} from "@mui/material";
import BooksBar from "../components/BooksBar";
import SectionHeader from "../components/SectionHeader";
import {ContainerSize, ContainerStyles} from "../components/Container.styles";

function Home() {
    const [books, setBooks] = useState(
        [
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
        <ContainerSize>
            <BooksBar books={books}> </BooksBar>
            <ForumPanel />
        </ContainerSize>
    );
}

export default Home;