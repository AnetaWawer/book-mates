import {Panel} from "../Container.styles";
import SectionHeader from "../atoms/SectionHeader";
import TopicCarousel from "../organisms/TopicCarousel";

const ForumCarouselPanel =( {topics, header} ) =>{
    return (
        <Panel>
            <SectionHeader header={header} />
            <TopicCarousel topics={topics}/>
        </Panel>
    )
}

export default ForumCarouselPanel;