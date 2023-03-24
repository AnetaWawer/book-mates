import React, {useEffect, useState} from 'react';
import ForumPanel from "../components/ForumPanel";
import {Container, Typography} from "@mui/material";
import BooksBar from "../components/BooksBar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SectionHeader from "../components/SectionHeader";
import {ContainerSize, ContainerStyles} from "../components/Container.styles";
import BooksPanel from "../components/BooksPanel";
import SeeMoreButton from "../components/SeeMoreButton";

function Home() {
    const [books, setBooks] = useState([]);
    const booksHeader = "Polecane książki";
    const forumHeader = "Forum";

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

    return (
        <ContainerSize>
            <BooksPanel books={books} header={booksHeader}/>
            <ForumPanel header={forumHeader} />
        </ContainerSize>
    );
}

export default Home;