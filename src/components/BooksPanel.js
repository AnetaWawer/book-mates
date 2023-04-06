import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import SingleCard from "./SingleCard";

const BooksPanel = ({books, startIndex, numberOfCardsOnPage}) => {
    // const [numberOfCardsOnPage, setNumberOfCardsOnPage] = useState(4);
    console.log("jestem w bookPanel, \nindeks startowy to = " + startIndex + " liczba kart na stronie to " + numberOfCardsOnPage)

    const cards = [];

    useEffect( () => {
        for (let i = startIndex; i < startIndex + numberOfCardsOnPage; i++) {
            console.log("jestem w for " + i);
            cards.push(<SingleCard element={books[i]} key={i}/>);
            console.log(cards);
        }
    })

    console.log(cards)
    console.log(books)
    return (
        <Box>
            {cards}
        </Box>
    );
};

export default BooksPanel;