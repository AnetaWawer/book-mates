import React from 'react';
import {Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import BookImage from "../atoms/BookImage";


const SingleCard = ({ element }) => {
    const navigate = useNavigate();
    return (
        <CardActionArea onClick={element.eventDate!==undefined ? () => navigate("/events/" + element.id) : () => navigate("/book/" + element.externalId)}>
            <Card sx={{ maxWidth: 360, height: 480, backgroundColor:'inherit' }}>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    image= { element.pictureUrl }*/}
                {/*    alt={ element.title }*/}
                {/*    sx={{*/}
                {/*        p: 4,*/}
                {/*        height: 340,*/}
                {/*        width: 400,*/}
                {/*        backgroundColor:'#eeede7',*/}
                {/*    }}*/}
                {/*/>*/}
                <BookImage style={{flexGrow: 3}} book={element} />
                <CardContent sx={{flexGrow: 1}}>
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
