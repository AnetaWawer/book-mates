import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import React from "react";
import {BookDataContainer} from "./BookData.styles";


const BookData = ( {book} ) => {


    return (
        <BookDataContainer>
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">{book.author}</p>
            <p className="book-year">Data wydania: {book.year}</p>
            <p className="number-pages">Liczba stron: {book.pages}</p>
            <Typography component="legend">Ocena</Typography>
            <Rating value={book.rating !== undefined ? book.rating : 0} max={5} />
        </BookDataContainer>
    )
}

export default BookData
