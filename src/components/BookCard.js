import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate, useRoutes} from "react-router-dom";

const BookCard = ({ book }) => {

    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 360, height: 480 }}>
            <CardActionArea onClick={() => navigate("/books/" + book.id)}>
                <CardMedia
                    component="img"
                    image= { book.pictureUrl }
                    alt={ book.title }
                    sx={{
                        p: 1,
                        height: 346,
                        width: 400
                    }}
                />
                <CardContent >
                    <Box>
                        <Typography gutterBottom variant="h5" sx={{textAlign: "center"}}>
                            { book.title }
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="black" sx={{textAlign: "center"}}>
                            { book.author }
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BookCard;
