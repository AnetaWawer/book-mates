import React from 'react';
import {Grid} from "@mui/material";
import moment from "moment";
import {CommentBox, CommentData, CommentsDivider} from "./Comments.styles";

const SingleComment = ({ comment }) => {
    return (
        <CommentBox>
            <CommentsDivider/>
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <CommentData variant="h6">
                            {comment.authorName} odpowiedział(a):
                        </CommentData>
                        <CommentData variant="body1">
                            {comment.commentMessage}
                        </CommentData>
                    </Grid>
                    <Grid item>
                        <CommentData variant="body1">
                            {moment(comment.creationTime).format('DD.MM.YYYY  HH:mm')}
                        </CommentData>
                    </Grid>
                </Grid>
            </Grid>
        </CommentBox>
    )
}
export default SingleComment