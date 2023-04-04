import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import React from "react";


const BookHeader = ({book}) => {
    console.log("Book in BookHeader: " + book)
    if (!book) {
        return null;
    }
    let thumbnail = book && book.volumeInfo.imageLinks &&
        book.volumeInfo.imageLinks.smallThumbnail;
    if (thumbnail !== undefined) {
        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item sm={4}>
                        {/*<img className="img" src={ book.pictureUrl } alt={`Cover for ${book.title}`} />*/}
                        <CardMedia
                            component="img"
                            image={thumbnail}
                            alt={book.title}
                            sx={{
                                p: 1,
                                height: 300,
                                width: 200
                            }}
                        />
                    </Grid>
                    <Grid item sm={8}>
                        <h1 className="book-title">{book.volumeInfo.title}</h1>
                        {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 &&
                            <p className="book-author">{book.volumeInfo.authors[0]}</p>
                        }
                        <p className="number-pages">Liczba stron: {book.volumeInfo.pageCount}</p>
                        <Typography component="legend">Ocena</Typography>
                        <Rating name="customized-10" value={Math.round(book.volumeInfo.averageRating*2)} max={10} readOnly />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default BookHeader;