import React from "react";
import SectionHeader from "./SectionHeader";
import SeeMoreButton from "./SeeMoreButton";
import {ContainerStyles} from "./Container.styles";
import TopicsList from "./TopicsList";


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