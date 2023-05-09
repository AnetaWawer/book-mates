import {styled} from "@mui/material/styles";
import {Button, Container} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const SendMessage = styled(Button)({
    marginTop: 3,
    marginBottom: 2,
    backgroundColor:'inherit',
    color:'inherit',
    '&:hover': {backgroundColor: 'inherit'}
});

export const ContactFormContainer = styled(Container)({
    backgroundColor:'#eeede7',
    textAlign: "center",
    paddingBottom:'20px',
    paddingTop:'20px',
});

export const SendMessageIcon = styled(SendIcon)({
    fontSize:'22px',
    marginLeft:'5px',
    marginBottom:'2px'
});