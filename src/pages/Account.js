import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerSize} from "../components/Container.styles";
import Shelf from "../components/Shelf";
import {Container} from "@mui/material";

function Account() {

    const [books, setBooks] = useState([]);
    const [readBooksSequences, setReadBooksSequences] = useState([])

    useEffect(() => {
        if (!books.length) {
            axios.get(`http://localhost:8080/api/users/3/books`)
                .then(response => {
                    console.log("response ");
                    console.log(response);
                    setBooks(response.data);
                    console.log("books ");
                    console.log(books);
                    const readBooks = response.data.filter(book => book.shelf === "READ");
                    console.log("read books ");
                    console.log( readBooks);
                    setReadBooksSequences([[readBooks[0], readBooks[1], readBooks[2], readBooks[3]], [readBooks[4], readBooks[5], readBooks[6], readBooks[7]]])
                    console.log("read books sequences");
                    console.log(readBooksSequences);
                })
                .catch(error => console.log(error));
        }
    }, []);

    // useEffect(() => {
    //     //if (books.length) {
    //         console.log("books ");
    //         console.log(books);
    //         const readBooks = books.filter(book => book.shelf === "READ");
    //         console.log("read books ");
    //         console.log( readBooks);
    //         setReadBooksSequences([[readBooks[0], readBooks[1], readBooks[2], readBooks[3]], [readBooks[4], readBooks[5], readBooks[6], readBooks[7]]])
    //         console.log("read books sequences");
    //         console.log(readBooksSequences);
    //
            // const readBooks = books.filter(book => book.shelf === "READ");
            // console.log("read books ");
            // console.log( readBooks);
            // for (let i = 0; i < readBooks.length; i=i + 4) {
            //     setReadBooksSequences([...readBooksSequences, readBooks[i], readBooks[i + 1], readBooks[i + 2], readBooks[i + 3]]);
            // }
            // console.log("read books sequences");
            // console.log(readBooksSequences);
        //}

    // }, [books, readBooksSequences])

    const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(4);
    return (
        <Container
            // xs={setNumberOfCardsOnPage(1)}
            // sm={setNumberOfCardsOnPage(2)}
            // md={setNumberOfCardsOnPage(3)}
            // lg={setNumberOfCardsOnPage(4)}
        >
            <Shelf
                // booksSequences={bookSequences}
                books={books.filter(book => book.shelf==="FAVORITE")}
                header={"Ulubione"}
                numberOfCardsOnPage={numberOfCardsOnPage}
            />
            <Shelf
                booksSequences={readBooksSequences}
                //books={books.filter(book => book.shelf==="READ")}
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

// const divideSequence = (seq) => {
//     for (let i = 0; i < readBooks; i + 4) {
//         setReadBooksSequences([...readBooksSequences, readBooks[i], readBooks[i + 1], readBooks[i + 2], readBooks[i + 3]]);
//     }
// }