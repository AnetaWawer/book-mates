import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../style.css"
import Button from '@mui/material/Button';
import logo from '../../mainLogo.png'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import {NavbarContainer} from "../Container.styles";
import SearchPanel from "../molecules/SearchPanel";
import AccountMenu from "../molecules/AccountMenu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {Menu} from "@mui/material";
import checkIfUserLogged from "../../services/JwtToken";


const StyledButton = styled(Button)(({ theme }) => ({
    color:"inherit",
    fontSize:'16px'
}));

const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const isUserLogged=checkIfUserLogged();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (input, criteria) => {
        navigate(`/books?query=${input}&criteria=${criteria}`);
    };

    const searchCriteriaItems = [
        {
            name: "Tytuł",
            value: "intitle"
        },
        {
            name: "Autor",
            value: "inauthor"
        }
    ]

    return (
        <NavbarContainer maxWidth={false}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={2} >
                    <Button sx={{marginTop:'-6%'}} >
                        <Img alt="logo of Bookmates app, with name and image of bookcovers" src={logo} onClick={ () => navigate("/")}/>
                    </Button>
                </Grid>
                <Grid  item xs={12} md={9} lg={10} sm container>
                    <Grid item xs container direction="column">
                        <StyledButton  onClick={handleClick}>
                            <PersonOutlineOutlinedIcon sx={{ fontSize: 18}} />Konto
                        </StyledButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                                  anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                  }}
                                  transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                  }}
                        >
                            <AccountMenu isUserLogged={isUserLogged} close={handleClose} />
                        </Menu>

                    </Grid>
                    <Grid item xs container direction="column" >
                        <StyledButton onClick={ () => navigate("/books")}>Książki</StyledButton>
                    </Grid>
                    <Grid item xs container direction="column">
                        <StyledButton onClick={ () => navigate("/events")}>Wydarzenia</StyledButton>
                    </Grid>
                    <Grid item xs container direction="column" >
                        <StyledButton onClick={ () => navigate("/contact")}>Kontakt</StyledButton>
                    </Grid>

                </Grid>
            </Grid>
            <SearchPanel searchCriteriaItems={searchCriteriaItems} onSearch={handleSearch} />
        </NavbarContainer>
    );
}

export default Navbar;