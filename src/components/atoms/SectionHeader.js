import React from "react";
import "./SectionHeader.styles"
import {Header, HeaderBox, HeaderContainer} from "./SectionHeader.styles";


const SectionHeader = ({header}) =>{
    return (
        <HeaderContainer>
            <HeaderBox>
                <Header component="h2">{header}</Header>
            </HeaderBox>
        </HeaderContainer>
    )
}

export default SectionHeader;