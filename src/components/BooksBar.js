import React, {useState} from 'react';
import {Grid} from "@mui/material";
import BookCard from "./BookCard";

const BooksBar = ( {books, header} ) => {
    return (
            <Grid container direction={'row'} spacing={4}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} xl={3} key={book.id}>
                        <BookCard
                            book={book}>
                        </BookCard>
                    </Grid>
                ))}
            </Grid>
    );
};

export default BooksBar;