import {styled} from "@mui/material/styles";
import {Box, Button} from '@mui/material'

export const ModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#eeede7',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 50,
});

export const SubmitEventButton = styled(Button)({
    marginTop: 3,
    marginBottom: 2,
    backgroundColor:'inherit',
    color:'inherit',
    '&:hover': {backgroundColor: 'inherit'}
});

export const NewEventButton = styled(Button)({
    color:'inherit',
});