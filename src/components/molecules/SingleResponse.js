import React from 'react';
import {Grid, Typography, Divider, Paper} from "@mui/material";
import moment from "moment";

const SingleResponse = ({ comment }) => {
    return (
        <Paper sx={{backgroundColor:'#eeede7'}}>
            <Divider sx={{marginTop:'30px'}}/>
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Typography variant="h6" component="div" sx={{p:2}}>
                            {comment.authorName} odpowiedział(a):
                        </Typography>
                        <Typography variant="body1" component="div" sx={{p:2}}>
                            {comment.commentMessage}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="div">
                            {moment(comment.creationTime).format('DD.MM.YYYY  HH:mm')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default SingleResponse