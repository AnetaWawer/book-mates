import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import React from "react";


const BookData = (props) => {
    const { title, author, year, pages, rating } = props.book;

    return (
        <>
            <h1 className="book-title">{title}</h1>
            <p className="book-author">{author}</p>
            <p className="book-year">Data wydania: {year}</p>
            <p className="number-pages">Liczba stron: {pages}</p>
            <Typography component="legend">Ocena</Typography>
            <Rating name="customized-10" value={Math.round(rating)} max={10}/>
        </>
    )
}

export default BookData
