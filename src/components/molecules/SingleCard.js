import React from 'react';
import {Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import BookImage from "../atoms/BookImage";


const SingleCard = ({ element }) => {
    const navigate = useNavigate();
    return (
        <CardActionArea onClick={element.eventDate!==undefined ? () => navigate("/events/" + element.id) : () => navigate("/book/" + element.externalId)}>
            <Card sx={{ maxWidth: 360, height: 480, backgroundColor:'inherit', display: 'flex', flexDirection: 'column' }}>
                <BookImage book={element} style={{ height: '75%' }} />
                <CardContent sx={{ height: '25%' }}>
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
