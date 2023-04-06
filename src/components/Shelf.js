import React from 'react';
import SingleCard from "./SingleCard";
import Carousel from "react-material-ui-carousel";
import {Typography} from "@mui/material";
import BooksPanel from "./BooksPanel";
import CardsBar from "./CardsBar";

const Shelf = ({ books, header, numberOfCardsOnPage, booksSequences }) => {
    //if ( !books.length ){
    if ( !booksSequences){
        return (
            <>
                <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
                <Typography>Ta półka jest na razie pusta</Typography>
            </>
        )
    }
    // console.log("books in shelf ");
    // console.log(books);
    console.log("books sequences in shelf " );
    console.log( booksSequences );
    return (
        <>
            <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
            <Carousel>
                {
                    booksSequences.map((booksSequence, i) => (
                        <CardsBar elements={booksSequence} key={i} />
                    ))
                    // books.map( book => <SingleCard key={book.id} element={book} />)

                    // books.map( (book, i) => (
                    //         <BooksPanel
                    //             books={books}
                    //             numberOfCardsOnPage={numberOfCardsOnPage}
                    //             startIndex={i}
                    //             key={i}
                    //         />
                    //     )
                    // )

                    // <SingleCard key={i} element={book} />)
                }
            </Carousel>
        </>
    );
};

export default Shelf;