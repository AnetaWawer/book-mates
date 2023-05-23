import React from 'react';
import {Box, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {BookCover, ChatIcon, Img, SingleTopicContainer, SpacedTypography, TopicTitle} from "./SingleTopic.styles";


const SingleTopic = ({topic}) => {
    const navigate = useNavigate();
    return (
        <SingleTopicContainer container columnSpacing={{xs: 2, sm: 4, md: 12}}>
            <Grid item md={12}>
                <SpacedTypography variant="subtitle2">
                    Dyskusja
                    rozpoczęta {moment(topic.creationTime).format('DD.MM.YYYY  HH:mm')} przez {topic.authorName}
                </SpacedTypography>
            </Grid>
            <Grid item md={1}>
                <BookCover>
                    <Img alt="book-cover" src={topic.bookPictureUrl}
                         onClick={() => navigate("/book/" + topic.bookExternalId)}/>
                </BookCover>
            </Grid>
            <Grid item sm container>
                <Grid item xs container direction="row" spacing={0}>
                    <Grid item xs={4}>
                        <SpacedTypography component="h5">
                            {topic.bookTitle}
                        </SpacedTypography>
                        <SpacedTypography variant="body2" gutterBottom>
                            {topic.bookAuthor}
                        </SpacedTypography>
                    </Grid>
                    <Grid item xs={8}>
                        <TopicTitle variant="h6" color="inherit" onClick={() => navigate("/topics/" + topic.id)}>
                            {topic.title}
                        </TopicTitle>
                        <SpacedTypography variant="body2">
                            {topic.message}
                        </SpacedTypography>
                    </Grid>
                </Grid>
                <Box>
                    <SpacedTypography variant="subtitle1" paragraph>
                        <ChatIcon/>
                        {topic.numberOfComments === 1 ? topic.numberOfComments + ' Odpowiedź' : topic.numberOfComments + ' Odpowiedzi'}
                    </SpacedTypography>
                </Box>
            </Grid>

        </SingleTopicContainer>
    );
};

export default SingleTopic;