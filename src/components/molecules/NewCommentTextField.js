import React, {useState} from 'react';
import {Grid, Box} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";
import {CommentBox, CommentsDivider, NewCommentTextArea, SaveNewCommentButton} from "./Comments.styles";
import BasicSnackBar from "../atoms/BasicSnackBar";

const NewCommentTextField = ({updateComments}) => {
    let { topicId } = useParams();
    let newCommentField = document.getElementById("newComment")
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (comment) => {
        comment.preventDefault();
        const data = new FormData(comment.currentTarget);
        axios.post('http://localhost:8080/api/topics/' + topicId + '/comments', {
            commentMessage:data.get('newComment')
        },{headers: {Authorization: "Bearer " + localStorage.getItem("user")}})
            .then(response => {
                console.log(response)
                newCommentField.value=''
                setOpen(true)
                setMessage("Komentarz dodany poprawnie!")
            })
            .catch(error => {
                console.log(error);
                setMessage("Komentarz nie został dodany. Spróbuj ponownie!")
            })
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <CommentBox >
            <CommentsDivider />
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Box component="form" onSubmit={handleSubmit}>
                            <NewCommentTextArea
                                id="newComment"
                                name="newComment"
                                label="Napisz komentarz"
                                multiline
                                rows={4}
                            />
                            <Grid item xs>
                                <SaveNewCommentButton type="submit" onClick={updateComments}>Dodaj komentarz</SaveNewCommentButton>
                                <BasicSnackBar
                                    open={open}
                                    handleClose={handleClose}
                                    message={message}
                                    autoHideDuration={5000}
                                >
                                </BasicSnackBar>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </CommentBox>
    )
}

export default NewCommentTextField;