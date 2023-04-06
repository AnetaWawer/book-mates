import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import Shelf from "../components/Shelf";
import {Container} from "@mui/material";

function Account() {

    const [books, setBooks] = useState([]);
    const [bookSequences, setBookSequences] = useState([])

    useEffect(() => {
        if (!books.length) {
            axios.get(`http://localhost:8080/api/users/3/books`)
                .then(response => {
                        console.log(response);
                        setBooks(response.data);
                    }
                )
                .then(() => {
                        console.log("książki = ");
                        console.log(books);
                    }
                )
                .then(() => {
                        for (let i = 0; i < books.length; i + 4) {
                            setBookSequences([...bookSequences, [books[i], books[i + 1], books[i + 2], books[i + 3]]])
                        }
                        console.log(bookSequences);
                    }
                )
                .catch(error => console.log(error));
        }
    }, [books]);

    const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(4);
    return (
        <Container
            // xs={setNumberOfCardsOnPage(1)}
            // sm={setNumberOfCardsOnPage(2)}
            // md={setNumberOfCardsOnPage(3)}
            // lg={setNumberOfCardsOnPage(4)}
        >
            <Shelf
                booksSequences={bookSequences}
                books={books.filter(book => book.shelf==="FAVORITE")}
                header={"Ulubione"}
                numberOfCardsOnPage={numberOfCardsOnPage}
            />
            <Shelf
                booksSequences={bookSequences}
                books={books.filter(book => book.shelf==="READ")}
                header={"Przeczytane"}
                numberOfCardsOnPage={numberOfCardsOnPage}

            />
            {/*<Shelf*/}
            {/*    books={books.filter(book => book.shelf==="TO_READ")}*/}
            {/*    header={"Chcę przeczytać"}*/}
            {/*    numberOfCardsOnPage={numberOfCardsOnPage}*/}

            {/*/>*/}
            {/*<Shelf*/}
            {/*    books={books.filter(book => book.shelf==="GIFT")}*/}
            {/*    header={"Na prezent"}*/}
            {/*    numberOfCardsOnPage={numberOfCardsOnPage}*/}

            {/*/>*/}
            {/*<Shelf*/}
            {/*    books={books.filter(book => book.shelf==="SAVED")}*/}
            {/*    header={"Zapisane"}*/}
            {/*    numberOfCardsOnPage={numberOfCardsOnPage}*/}
            {/*/>*/}
        </Container>
    );
}

export default Account;
