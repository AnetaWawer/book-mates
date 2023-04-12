import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SeeMoreButton from "../atoms/SeeMoreButton";
import {ContainerStyles} from "../Container.styles";
import TopicsList from "../organisms/TopicsList";


const ForumPanel =( {topics, header} ) =>{
    return (
        <ContainerStyles maxWidth="lg" >
            <SectionHeader header={header} />
                    <TopicsList topics={topics} />
            <SeeMoreButton/>
        </ContainerStyles>
    )
}

export default ForumPanel;