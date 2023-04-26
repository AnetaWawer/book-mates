import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../style.css"
import Button from '@mui/material/Button';
import logo from '../../mainLogo.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import {NavbarContainer} from "../Container.styles";
import SearchPanel from "../molecules/SearchPanel";



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
    // const [searchInput, setSearchInput] = useState("");
    // const [searchCriteria, setSearchCriteria] = useState("intitle");
    //
    // const handleChange = (event) => {
    //     setSearchCriteria(event.target.value);
    // };

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
                        <StyledButton  onClick={ () => navigate("/users/profile")} >
                            <PersonOutlineOutlinedIcon sx={{ fontSize: 18}} />Konto
                        </StyledButton>
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