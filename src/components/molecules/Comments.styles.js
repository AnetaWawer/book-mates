import {styled} from "@mui/material/styles";
import {Button, Divider, Paper, TextField, Typography} from "@mui/material";


export const CommentBox = styled(Paper)({
    backgroundColor:'#eeede7'
});

export const CommentsDivider = styled(Divider)({
    marginTop:'30px'
});

export const NewCommentTextArea = styled(TextField)({
    width:'100%',
    marginTop:'5px'
});

export const SaveNewCommentButton = styled(Button)({
    float:'right',
    color:'inherit'
});

export const CommentData = styled(Typography)({
    padding:20
});
