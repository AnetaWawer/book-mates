import React from 'react';
import {Fab, Grid, Popover, Typography} from "@mui/material";
import moment from "moment";
import {CommentBox, CommentData, CommentsDivider} from "./Comments.styles";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
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
                    <AbuseReport commentId={comment.id}/>
                </Grid>
            </Grid>
        </CommentBox>
    )
}
export default SingleComment