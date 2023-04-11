import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button, CardMedia} from "@mui/material";
import React from "react";
import moment from "moment/moment";


const EventDetails = ({ book, event }) => {
    return (
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
                    <h1 className="book-title">{event.title}</h1>
                    <p>{moment(event.eventDate).format('DD.MM.YYYY  HH:mm')} </p>
                    <p>{event.organizer}</p>
                    <p>zapisanych uczesntików: 0/{event.maxParticipants}</p>

                    <Grid container justifyContent="flex-end">
                        <Button sx={{color:'inherit'}} onClick="console.log('click')">Dołącz do wydarzenia</Button>
                    </Grid>
                </Grid>
            </Grid>

    );
}

export default EventDetails;