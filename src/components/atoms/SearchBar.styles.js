import {styled} from "@mui/material/styles";
import {Box,Input} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export const SearchBox = styled(Box)({
    display: 'flex',
    alignItems: 'center'
})

export const InputField= styled(Input)({
    width: '900px',
    color: '#2f2f2f',
    mt:5
})

export const LoupeIcon = styled(SearchIcon)({
    marginRight: '10px',
    mt:5
})


