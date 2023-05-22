import React, {useState} from 'react';
import {Grid, Box} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";
import {TopicBox, TopicsDivider, NewTopicTitleTextArea, NewTopicMessageTextArea, SaveNewTopicButton} from "./NewTopicForm.styles";
import BasicSnackBar from "../atoms/BasicSnackBar";

const NewTopicForm = () => {
    let { id } = useParams();
    let newTopicTitle = document.getElementById("newTopicTitle");
    let newTopicMessage = document.getElementById("newTopicMessage");
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState("");

    const handleSubmit = (topic) => {
        topic.preventDefault();
        const data = new FormData(topic.currentTarget);
        console.log(id);
        axios.post(`http://localhost:8080/api/books/${id}/topics`, {
            title: data.get('newTopicTitle'),
            message: data.get('newTopicMessage')
        })
            .then(response => {
                console.log(response)
                newTopicTitle.value='';
                newTopicMessage.value='';
                setOpen(true);
                setInfo("Wątek dodany poprawnie!");
            })
            .catch(error => {
                console.log(error);
                setOpen(true);
                setInfo("Wątek nie został dodany. Spróbuj ponownie!")
            })
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <TopicBox >
            <TopicsDivider />
            <Grid container spacing={2} >
                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Box component="form" onSubmit={handleSubmit}>
                            <NewTopicTitleTextArea
                                id="newTopicTitle"
                                name="newTopicTitle"
                                label="Wprowadź tytuł wątku"
                            />
                            <NewTopicMessageTextArea
                                id="newTopicMessage"
                                name="newTopicMessage"
                                label="Rozpocznij dyskusję"
                                multiline
                                rows={4}
                            />
                            <Grid item xs>
                                <SaveNewTopicButton type="submit" >Dodaj wątek</SaveNewTopicButton>
                                <BasicSnackBar
                                    open={open}
                                    handleClose={handleClose}
                                    message={info}
                                    autoHideDuration={5000}
                                >
                                </BasicSnackBar>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </TopicBox>
    )
}

export default NewTopicForm;