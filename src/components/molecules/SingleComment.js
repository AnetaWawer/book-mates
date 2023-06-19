import React from 'react';
import Grid from '@mui/material/Grid';
import moment from "moment";
import {CommentBox, CommentData, CommentsDivider} from "./Comments.styles";
import AbuseReport from "./AbuseReport";

const SingleComment = ({ comment }) => {


    return (
        <CommentBox>
            <CommentsDivider/>
            <Grid container spacing={2} >
                <Grid item xs>
                    <CommentData variant="h6">
                        {comment.authorName} odpowiedział(a):
                    </CommentData>
                    <CommentData>
                        {comment.commentMessage}
                    </CommentData>
                </Grid>
                <Grid item >
                    <CommentData>
                        {moment(comment.creationTime).format('DD.MM.YYYY  HH:mm')}
                    </CommentData>
                    <AbuseReport item={comment}/>
                </Grid>
            </Grid>
        </CommentBox>
    )
}
export default SingleComment