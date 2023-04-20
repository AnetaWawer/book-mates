import React from 'react';
import SectionHeader from "../atoms/SectionHeader";
import CardsBar from "../organisms/CardsBar";
import {Panel} from "../Container.styles";

const CardsPanel = ({ elements, header }) => {
    return (
        <Panel>
            <SectionHeader header={header} />
            <CardsBar elements = {elements} />
        </Panel>
    );
};

export default CardsPanel;
