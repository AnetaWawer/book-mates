import React from 'react';
import SingleCard from "./SingleCard";
import Carousel from "react-material-ui-carousel";
import {Typography} from "@mui/material";
import BooksPanel from "./BooksPanel";

const Shelf = ({ books, header, numberOfCardsOnPage }) => {
    if ( !books.length ){
        return (
            <>
                <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
                <Typography>Ta półka jest na razie pusta</Typography>
            </>
        )
    }
    return (
        <>
            <Typography variant="h4" sx={{mt: 3}}>{header}</Typography>
            <Carousel>
                {
                    // books.map( book => <SingleCard key={book.id} element={book} />)
                    books.map( (book, i) => (
                            <BooksPanel
                                books={books}
                                numberOfCardsOnPage={numberOfCardsOnPage}
                                startIndex={i}
                                key={i}
                            />
                        )
                    )
                        // <SingleCard key={i} element={book} />)
                }
            </Carousel>
        </>
    );
};

export default Shelf;