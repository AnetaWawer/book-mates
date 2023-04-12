import React from "react";
import {Typography} from '@mui/material'
import "./SectionHeader.styles"
import {Header, HeaderContainer} from "./SectionHeader.styles";


const SectionHeader = ({header}) =>{
    return (
        <HeaderContainer>
            <Header>
                <Typography component="h2"  sx={{fontSize: 50}}>{header}</Typography>
            </Header>
        </HeaderContainer>
    )
}

export default SectionHeader;