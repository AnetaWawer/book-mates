import React from 'react';
import {Button, Divider, Grid, Paper, TextField, Box} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";

const ResponseTextField = (props) => {
    let { topicId } = useParams();
    let newCommentField = document.getElementById("newComment")
    const handleSubmit = (comment) => {
        comment.preventDefault();
        const data = new FormData(comment.currentTarget);
        axios.post('http://localhost:8080/api/topics/' + topicId + '/comments', {
            commentMessage:data.get('newComment')
        })
            .then(response => {
                console.log(response)
                newCommentField.value=''
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <Paper sx={{backgroundColor:'#eeede7'}}>
            <Divider sx={{marginTop:'30px'}}/>
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            id="newComment"
                            name="newComment"
                            label="Napisz komentarz"
                            multiline
                            rows={4}
                            sx={{width:'100%',marginTop:'5px'}}
                        />
                        <Grid item xs>
                            <Button sx={{float:'right', color:'inherit'}} type="submit" onClick={(props.comments)}>Dodaj komentarz</Button>
                        </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ResponseTextField;