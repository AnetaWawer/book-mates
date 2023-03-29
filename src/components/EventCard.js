import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate, useRoutes} from "react-router-dom";

const EventCard = ({ event }) => {

    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 360, height: 460, backgroundColor:'inherit' }}>
            <CardActionArea onClick={() => navigate("/event/" + event.id)}>
                <CardMedia
                    component="img"
                    image= { event.url }
                    alt={ event.title }
                    sx={{
                        p: 4,
                        height: 340,
                        width: 400,
                        backgroundColor:'#eeede7',
                    }}
                />
                <CardContent>
                    <Box>
                        <Typography gutterBottom variant="h5" sx={{textAlign: "center"}}>
                            { event.title }
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="black" sx={{textAlign: "center"}}>
                            { event.eventDate }
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default EventCard;