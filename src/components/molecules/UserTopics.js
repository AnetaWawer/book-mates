import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box, Typography} from "@mui/material";
import SingleTopic from "./SingleTopic";

const UserTopics = ({ topics }) => {
    if (!topics.length){
        return (
            <Box sx={{mt: 5}}>
                <Typography>Brak aktywnych wątków</Typography>
            </Box>
        )
    }
    if (topics.length>=1) {
        return (
            <Box sx={{mt: 5}}>
                {
                    topics.map((topic, i) => (
                        <SingleTopic topic={topic} key={i}/>
                    ))
                }
            </Box>
        );
    }
};

export default UserTopics;