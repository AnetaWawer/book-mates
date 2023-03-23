import React, {useState} from 'react';
import {Grid} from "@mui/material";
import BookCard from "./BookCard";
import {ContainerStyles} from "./Container.styles";
import SectionHeader from "./SectionHeader";



const BooksBar = ( {books} ) => {
    return (
        <ContainerStyles>
            <SectionHeader header={"Polecane książki"}></SectionHeader>
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
        </ContainerStyles>
    );
};

export default BooksBar;