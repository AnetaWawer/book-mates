import '../styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from "react";
import BookData from "../molecules/BookData";
import BookImage from "../atoms/BookImage";


const BookDetails = ({ book }) => {
    return (
        <Paper>
            <Grid container >
                <Grid item sm={4}>
                    <BookImage book={book} />
                </Grid>
                <Grid item sm={8}>
                    <BookData book = {book} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookDetails;