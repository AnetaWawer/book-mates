import React from 'react';
import {Box, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {BookCover, ChatIcon, Img, SingleTopicContainer, SpacedTypography, TopicTitle} from "./SingleTopic.styles";


const SingleTopic = ({ topic }) => {
    const navigate = useNavigate();
    return (
        <SingleTopicContainer container columnSpacing={{ xs: 2, sm: 4, md: 12 }}>
            <Grid item container>
                <Grid item xs container direction="row" spacing={0} alignItems="center">
                    <SpacedTypography variant="subtitle2">
                        Dyskusja rozpoczęta {moment(topic.creationTime).format('DD.MM.YYYY  HH:mm')} przez {topic.authorName}
                    </SpacedTypography>
                    <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <ChatIcon />
                        <SpacedTypography sx={{ textAlign: "right", marginLeft: '5px' }} variant="subtitle2" paragraph>
                            {topic.numberOfComments === 1 ? topic.numberOfComments + ' Odpowiedź' : topic.numberOfComments + ' Odpowiedzi'}
                        </SpacedTypography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={1}>
                <BookCover>
                    <Img alt="book-cover" src={topic.bookPictureUrl} onClick={() => navigate("/book/" + topic.bookExternalId)} />
                </BookCover>
            </Grid>
            <Grid item sm container>
                <Grid item xs container direction="row" spacing={0}>
                    <Grid item xs={12} sm={4} md={3}>
                        <SpacedTypography component="h5">
                            {topic.bookTitle}
                        </SpacedTypography>
                        <SpacedTypography variant="body2" gutterBottom>
                            {topic.bookAuthor}
                        </SpacedTypography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <TopicTitle variant="h6" color="inherit" onClick={() => navigate("/topics/" + topic.id)}>
                            {topic.title}
                        </TopicTitle>
                        <SpacedTypography variant="body2">
                            {topic.message}
                        </SpacedTypography>
                    </Grid>
                </Grid>
            </Grid>
        </SingleTopicContainer>
    );
};

export default SingleTopic;