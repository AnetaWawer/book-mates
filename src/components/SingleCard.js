import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";


const SingleCard = ({ element }) => {
    const navigate = useNavigate();
    return (
        <CardActionArea onClick={element.book ? () => navigate("/events/" + element.id) : () =>navigate("/books/" + element.id)}>
            <Card sx={{ maxWidth: 360, height: 480, backgroundColor:'inherit' }}>
                <CardMedia
                    component="img"
                    image= { element.book ? element.book.pictureUrl: element.pictureUrl }
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
                            { element.book ? moment(element.eventDate).format('DD.MM.YYYY  HH:mm') : element.author }
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>

    );
};

export default SingleCard;
