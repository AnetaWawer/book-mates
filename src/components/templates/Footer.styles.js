import {styled} from "@mui/material/styles";
import {Grid, Box} from "@mui/material";

export const FooterContainer = styled(Grid)({
    marginLeft:'2%'
});

export const Logo = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const Item= styled(Box)({
    cursor:"pointer"
})