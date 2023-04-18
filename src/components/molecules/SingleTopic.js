import React from 'react';
import {Grid, Typography, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {BookCover, ChatIcon, Img, SingleTopicContainer, TopicTitle} from "./SingleTopic.styles";


const SingleTopic = ({ topic }) => {
    const navigate = useNavigate();
    return (
        <SingleTopicContainer container columnSpacing={{ xs: 2, sm: 4, md: 12 }} >
            <Grid item md={1}>
                <BookCover>
                    <Img alt="book-cover" src={topic.bookPictureUrl} onClick={() =>navigate("/books/" + topic.bookId)} />
                </BookCover>
            </Grid>
            <Grid item sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item >
                        <Typography component="h5" >
                            {topic.bookTitle}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {topic.bookAuthor}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={8} container direction="column">
                    <Box >
                        <TopicTitle variant="h6" color="inherit"  onClick={ () => navigate("/books/" + topic.bookId+ "/topics")} >
                            {topic.title}
                        </TopicTitle>
                        <Typography variant="subtitle2">
                            {moment(topic.creationTime).format('DD.MM.YYYY  HH:mm')} przez  {topic.authorName}
                        </Typography>
                    </Box>
                </Grid>
                <Box>
                    <Typography variant="subtitle1" paragraph>
                        <ChatIcon />
                        {topic.numberOfComments===1 ? topic.numberOfComments+' Odpowiedź' : topic.numberOfComments+ ' Odpowiedzi'}
                    </Typography>
                </Box>
            </Grid>
        </SingleTopicContainer>
    );
};

export default SingleTopic;