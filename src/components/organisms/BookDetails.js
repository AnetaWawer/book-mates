import '../styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import React from "react";
import DefaultBookCover from "../atoms/DefaultBookCover";


const BookDetails = ({ book }) => {
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    {book.pictureUrl && book.pictureUrl !== null ? (
                        <CardMedia
                            component="img"
                            image={book.pictureUrl}
                            alt={book.title}
                            sx={{
                                p: 1,
                                height: 300,
                                width: 200
                            }}
                        />
                    ) : (
                        <DefaultBookCover book={book} />
                    )}
                    {/*<img className="img" src={ book.pictureUrl } alt={`Cover for ${book.title}`} />*/}
                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    image= { book.pictureUrl }*/}
                    {/*    alt={ book.title }*/}
                    {/*    sx={{*/}
                    {/*        p: 1,*/}
                    {/*        height: 300,*/}
                    {/*        width: 200*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<DefaultBookCover book={ book } />*/}
                </Grid>
                <Grid item sm={8}>
                    {/*wydzielic jako molekule*/}
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">{book.author}</p>
                    <p className="book-year">Data wydania: {book.year}</p>
                    <p className="number-pages">Liczba stron: {book.pages}</p>
                    <Typography component="legend">Ocena</Typography>
                    <Rating name="customized-10" value={Math.round(book.rating)} max={10} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookDetails;