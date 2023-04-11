import React from "react";
import {Typography} from '@mui/material'
import "./SectionHeader.styles"
import {Header, Title} from "./SectionHeader.styles";


const SectionHeader = ({header}) =>{
    return (
        <Header className='section-header'>
            <Title className='section-title'>
                <Typography component="h2" className="align-center" sx={{fontSize: 50}}>{header}</Typography>
            </Title>
        </Header>
    )
}

export default SectionHeader;