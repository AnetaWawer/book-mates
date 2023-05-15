import {styled} from "@mui/material/styles";
import {Button, Divider, Paper, TextField, Typography} from "@mui/material";


export const TopicBox = styled(Paper)({
    backgroundColor:'#eeede7'
});

export const TopicsDivider = styled(Divider)({
    marginTop:'30px'
});

export const NewTopicTitleTextArea = styled(TextField)({
    width:'100%',
    marginTop:'5px'
});

export const NewTopicMessageTextArea = styled(TextField)({
    width:'100%',
    marginTop:'5px'
});

export const SaveNewTopicButton = styled(Button)({
    float:'right',
    color:'inherit'
});

export const CommentData = styled(Typography)({
    padding:20
});
