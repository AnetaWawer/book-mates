import Typography from "@mui/material/Typography";
import React from "react";
import {BookDataContainer} from "./BookData.styles";


const BookData = ( {book} ) => {


    return (
        <BookDataContainer>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-year">Data wydania: {book.year}</p>
            <p className="number-pages">Liczba stron: {book.pages}</p>
            {book.rating !== undefined && book.rating !== 0 && (
                    <Typography component="legend">Ocena: {book.rating}</Typography>
                )}
        </BookDataContainer>
    )
}

export default BookData
