import React from "react";
import {Box} from "@mui/material";
import SingleResponse from "../molecules/SingleResponse";


const ResponseList = ({comments} ) => {
    return (
        <Box>
            {comments.map((comment) => (
                <Box xs={12} sm={6} xl={3} key={comment.id}>
                    <SingleResponse comment={comment}/>
                </Box>
            ))}
        </Box>
    )

}
export default ResponseList;