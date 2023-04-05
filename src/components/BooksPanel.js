import React, {useState} from 'react';
import {Box} from "@mui/material";
import SingleCard from "./SingleCard";

const BooksPanel = ({books, startIndex, numberOfCardsOnPage}) => {
    // const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(4);
    const cards = [];
    for (let i = startIndex; i < startIndex + numberOfCardsOnPage; i++ ){
        cards.push(<SingleCard element={books[i]}/>)
    }
    return (
        <Box
            // xs={setNumberOfCardsOnPage(1)}
            // sm={setNumberOfCardsOnPage(2)}
            // md={setNumberOfCardsOnPage(3)}
            // lg={setNumberOfCardsOnPage(4)}
        >
            {cards}
        </Box>
    );
};

export default BooksPanel;