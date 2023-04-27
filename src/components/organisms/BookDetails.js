import '../styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from "react";
import BookData from "../molecules/BookData";
import BookImage from "../atoms/BookImage";
import {DetailsWindow} from "./EventDetials.styles";


const BookDetails = ({ book }) => {
    return (
        <DetailsWindow>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <BookImage book={book} />
                </Grid>
                <Grid item xs={12} sm={6} md={8} container direction="column">
                    <Grid item>
                        <BookData book={book} />
                    </Grid>
                </Grid>
            </Grid>
        </DetailsWindow>
    );
}

export default BookDetails;