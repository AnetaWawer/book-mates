import React, {useState} from 'react';
import {Grid} from "@mui/material";
import BookCard from "./BookCard";



const BooksBar = ( {books} ) => {
    return (
        <Grid sx={{my: 2}} container spacing={2}>
            {books.map((book) => (
                <Grid item xs={12} sm={6} xl={3} >
                    <BookCard
                        key={book.id}
                        book={book}>
                    </BookCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default BooksBar;