import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import {Panel} from "../Container.styles";
import TopicsList from "../organisms/TopicsList";


const ForumPanel =( {topics, header} ) =>{
    return (
        <Panel>
            <SectionHeader header={header} />
                <TopicsList topics={topics} />
        </Panel>
    )
}

export default ForumPanel;