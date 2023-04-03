import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SingleCard = ({ element }) => {

    const navigate = useNavigate();
    return (
        <CardActionArea onClick={element.book ? () => navigate("/events/" + element.id) : () =>navigate("/books/" + element.id)}>
            <Card sx={{ maxWidth: 360, height: 480, backgroundColor:'inherit' }}>
                <CardMedia
                    component="img"
                    image= { element.book ? element.url: element.pictureUrl }
                    alt={ element.title }
                    sx={{
                        p: 4,
                        height: 340,
                        width: 400,
                        backgroundColor:'#eeede7',
                    }}
                />
                <CardContent >
                    <Box>
                        <Typography gutterBottom variant="h5" sx={{textAlign: "center"}}>
                            { element.title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="black" sx={{textAlign: "center"}}>
                            { element.book ? element.eventDate: element.author }
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>

    );
};

export default SingleCard;
