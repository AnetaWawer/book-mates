import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const BookCard = ({ book }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/*<CardActionArea>*/}
                <CardMedia
                    component="img"
                    // height="140"
                    image= { book.url }
                    alt={ book.title }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { book.title }
                    </Typography>
                    <Typography variant="h6" color="black" component="div">
                        { book.author }
                    </Typography>
                </CardContent>
            {/*</CardActionArea>*/}
        </Card>
    );
};

export default BookCard;
