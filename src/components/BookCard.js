import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate, useRoutes} from "react-router-dom";

const BookCard = ({ book }) => {

    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate("/books/" + book.id)}>
                <CardMedia
                    component="img"
                    // height="140"
                    image= { book.pictureUrl }
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
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
