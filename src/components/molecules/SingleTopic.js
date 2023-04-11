import React from 'react';
import {ButtonBase, Grid, Typography} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const SingleTopic = ({ topic }) => {
    const navigate = useNavigate();
    return (
        <Grid container columnSpacing={{ xs: 2, sm: 4, md: 12 }}  sx={{ height: { xs:'600px',sm:'250px' ,md:'230px' ,lg:'180px' } , display:'wrap'} }>
            <Grid item md={1}>
                <ButtonBase sx={{ width: 96, height: 128 }}>
                    <Img alt="book-cover" src={topic.bookPictureUrl} onClick={() =>navigate("/books/" + topic.bookId)} />
                </ButtonBase>
            </Grid>
            <Grid  item  sm container>
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
                    <Grid item >
                        <Typography variant="h6" color="inherit"  onClick={ () => navigate("/books/" + topic.bookId+ "/topics")} sx={{cursor:"pointer", color:"inherit"}} >
                            {topic.title}
                        </Typography>
                        <Typography variant="subtitle2">
                            <span> {topic.creationTime} przez  {topic.authorName} </span>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item >
                    <Typography variant="subtitle1" paragraph>
                        <ChatOutlinedIcon sx={{ fontSize: 20, textAlign:'right' }} />
                        {/*make dynamic*/}
                        <span> 90 Odpowiedzi</span>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SingleTopic;