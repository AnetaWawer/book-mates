import {ContainerStyles} from "../Container.styles";
import SectionHeader from "../atoms/SectionHeader";
import TopicCarousel from "../organisms/TopicCarousel";

const ForumCarouselPanel =( {topics, header} ) =>{
    return (
        <ContainerStyles maxWidth="lg" >
            <SectionHeader header={header} />
            <TopicCarousel topics={topics}/>
        </ContainerStyles>
    )
}

export default ForumCarouselPanel;