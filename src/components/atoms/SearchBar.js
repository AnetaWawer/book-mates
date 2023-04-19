import React from 'react'
import {InputField, LoupeIcon, SearchBox} from "./SearchBar.styles";


const SearchBar = ({ placeholder, onChange }) => {
    return (
        <SearchBox >
            <LoupeIcon />
            <InputField
                placeholder={placeholder}
                onChange={onChange}
                disableUnderline
            />
        </SearchBox>
    )
}

export default SearchBar