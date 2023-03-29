import React from 'react';
import SectionHeader from "./SectionHeader";
import CardsBar from "./CardsBar";
import SeeMoreButton from "./SeeMoreButton";
import {ContainerStyles} from "./Container.styles";

const CardsPanel = ({ elements, header }) => {
    return (
        <ContainerStyles>
            <SectionHeader header={header} />
            <CardsBar elements = {elements} />
            <SeeMoreButton />
        </ContainerStyles>
    );
};

export default CardsPanel;
