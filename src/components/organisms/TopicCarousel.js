import SingleTopic from "../molecules/SingleTopic";
import Carousel from "react-material-ui-carousel";
import {Box, Typography} from "@mui/material";

const TopicCarousel = ({topics} ) => {
    if (!topics.length){
        return (
            <Box sx={{mt: 5}}>
                <Typography>Brak aktywnych wątków</Typography>
            </Box>
        )
    }
    if (topics.length>=1) {
        return (
            <Carousel animation="fade" duration={900} interval={3000}>
                {
                    topics.map((topic, i) => (
                        <SingleTopic topic={topic} key={i}/>
                    ))
                }
            </Carousel>
        );
    }
};

export default TopicCarousel;