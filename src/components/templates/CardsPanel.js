import React from 'react';
import SectionHeader from "../atoms/SectionHeader";
import CardsBar from "../organisms/CardsBar";
import {Panel} from "../Container.styles";
import SeeMoreButton from "../atoms/SeeMoreButton";

const CardsPanel = ({ elements, header }) => {
    return (
        <Panel>
            <SectionHeader header={header} />
            <CardsBar elements = {elements} keyField='id' />
            <SeeMoreButton />
        </Panel>
    );
};

export default CardsPanel;
