import React from 'react';
import books from "../pages/Books";
import SingleCard from "./SingleCard";
import Carousel from "react-material-ui-carousel";

const Shelf = ({books}) => {
    return (
        <Carousel>
            {
                books.map( (book, i) => <SingleCard key={i} element={book} />)
            }
        </Carousel>
    );
};

export default Shelf;