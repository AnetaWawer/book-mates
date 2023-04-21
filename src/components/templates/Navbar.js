import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../style.css"
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../mainLogo.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {NavbarContainer} from "../Container.styles";
import BasicSelect from "../molecules/BasicSelect";
import SearchPanel from "../molecules/SearchPanel";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f2f1eb',
    '&:hover': {
        backgroundColor: '#eeede7',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

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
    const [searchInput, setSearchInput] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("intitle");

    const handleChange = (event) => {
        setSearchCriteria(event.target.value);
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
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={5} md={3} lg={2} >
                        <Button sx={{marginTop:'-6%'}} >
                            <Img alt="book-cover" src={logo} onClick={ () => navigate("/")}/>
                        </Button>
                    </Grid>
                    <Grid  item xs={10} md={9} lg={10} sm container>
                        <Grid item xs container direction="column">
                            <StyledButton  onClick={ () => navigate("/account")} >
                                <PersonOutlineOutlinedIcon sx={{ fontSize: 18}} />Konto
                            </StyledButton>
                        </Grid>
                        <Grid item xs container direction="column" >
                            <StyledButton onClick={ () => navigate("/books")}>Książki</StyledButton>
                        </Grid>
                        <Grid item xs container direction="column">
                            <StyledButton onClick={ () => navigate("/events")}> Wydarzenia </StyledButton>
                        </Grid>
                        <Grid item xs container direction="column" >
                            <StyledButton onClick={ () => navigate("/contact")}>Kontakt</StyledButton>
                        </Grid>

                    </Grid>
                </Grid>
            </Toolbar>
            <Grid item xs container direction="column" >
                <SearchPanel searchCriteriaItems={searchCriteriaItems} onSearch={handleSearch} />
                {/*<Search>*/}
                {/*    <StyledInputBase*/}
                {/*        placeholder="Tytuł lub autor"*/}
                {/*        inputProps={{ 'aria-label': 'search' }}*/}
                {/*        value={searchInput} onInput={e => setSearchInput(e.target.value)}*/}
                {/*    />*/}
                {/*    <BasicSelect labelId="search-by-label"*/}
                {/*                 id="searchCriteria"*/}
                {/*                 value={searchCriteria}*/}
                {/*                 label="Znajdź:"*/}
                {/*                 handleChange={handleChange}*/}
                {/*                 items={searchCriteriaItems}*/}
                {/*                 />*/}
                {/*</Search>*/}
                {/*<StyledButton onClick={() => navigate("/books?query="+searchInput+"&criteria="+searchCriteria)}>*/}
                {/*    <SearchIconWrapper>*/}
                {/*        Szukaj<SearchIcon sx={{ color: '#afafaf'}} />*/}
                {/*    </SearchIconWrapper>*/}
                {/*</StyledButton>*/}

            </Grid>
        </NavbarContainer>
    );
}

export default Navbar;