import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import React from "react";


const BookHeader = ({ book }) => {
    console.log(book.rating);
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    {/*<img className="img" src={ book.pictureUrl } alt={`Cover for ${book.title}`} />*/}
                    <CardMedia
                        component="img"
                        image= { book.pictureUrl }
                        alt={ book.title }
                        sx={{
                            p: 1,
                            height: 300,
                            width: 200
                        }}
                    />
                </Grid>
                <Grid item sm={8}>
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">{book.author}</p>
                    <Typography component="legend">Ocena</Typography>
                    <Rating name="customized-10" value={Math.round(book.rating)} max={10} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookHeader;