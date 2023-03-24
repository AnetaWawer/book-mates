import React from 'react';
import SectionHeader from "./SectionHeader";
import BooksBar from "./BooksBar";
import SeeMoreButton from "./SeeMoreButton";
import {ContainerStyles} from "./Container.styles";

const BooksPanel = ({ books, header }) => {
    return (
        <ContainerStyles>
            <SectionHeader header={header} />
            <BooksBar books = {books} />
            <SeeMoreButton />
        </ContainerStyles>
    );
};

export default BooksPanel;
