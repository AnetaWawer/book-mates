import {styled} from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
export const CustomizedMenuItem = styled(MenuItem)({
    justifyContent: "left",
    '&:hover': {backgroundColor: '#eeede7'}
});

export const AccountIcon = styled(PersonIcon)({
    color:'#757575',
    marginRight:'10px'
});

export const Login = styled(LoginIcon)({
    color:'#757575',
    marginRight:'10px'
});

export const Logout = styled(LogoutIcon)({
    color:'#757575',
    marginRight:'10px'
});

export const Register = styled(PersonAddAltIcon)({
    color:'#757575',
    marginRight:'10px'
});