import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Input,Box } from '@mui/material';


const SearchBar = ({ placeholder, onChange }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px',mt:5 }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: '900px', color: '#2f2f2f', mt:5 }}
                disableUnderline
            />
        </Box>
    )
}

export default SearchBar