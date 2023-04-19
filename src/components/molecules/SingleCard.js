import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";


const SingleCard = ({ element }) => {
    const navigate = useNavigate();
    return (
        <CardActionArea onClick={element.eventDate!==undefined ? () => navigate("/books/" + element.bookId + "/events/" + element.id) : () => navigate("/book/" + element.id)}>
            <Card sx={{ maxWidth: 360, height: 480, backgroundColor:'inherit' }}>
                <CardMedia
                    component="img"
                    image= { element.pictureUrl }
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
                        <Typography gutterBottom variant="h6" sx={{textAlign: "center"}}>
                            { element.title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography  color="black" sx={{textAlign: "center"}}>
                            {element.eventDate!==undefined ? moment(element.eventDate).format('DD.MM.YYYY  HH:mm') : element.author }
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>

    );
};

export default SingleCard;
