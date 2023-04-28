import React from "react";
import {Box} from "@mui/material";
import SingleComment from "../molecules/SingleComment";


const CommentsList = ({comments} ) => {
    return (
        <Box>
            {comments.map((comment) => (
                <Box xs={12} sm={6} xl={3} key={comment.id}>
                    <SingleComment comment={comment}/>
                </Box>
            ))}
        </Box>
    )

}
export default CommentsList;