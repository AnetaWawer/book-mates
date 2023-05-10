import {styled} from "@mui/material/styles";
import {Grid, ButtonBase, Typography} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const SingleTopicContainer = styled(Grid)({
    height: { xs:'600px',sm:'250px' ,md:'230px' ,lg:'180px' },
    display:'wrap',
    marginBottom:'25px',
});

export const BookCover = styled(ButtonBase)({
    width: 96,
    height: 128
});

export const ChatIcon = styled(ChatOutlinedIcon)({
    fontSize: 20,
    textAlign:'right'
});

export const TopicTitle = styled(Typography)({
    cursor:"pointer",
    color:"inherit"
});