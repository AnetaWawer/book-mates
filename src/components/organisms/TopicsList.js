import SingleTopic from "../molecules/SingleTopic";
import {Box, Typography} from "@mui/material";
import React from "react";

const TopicsList = ( {topics} ) => {
    if (!topics.length) {
        return (
            <Box sx={{mt: 5}}>
                <Typography>Brak aktywnych wątków</Typography>
            </Box>
        )
    }
    if (topics.length>=1) {
        return (
            <Box>
                {topics.map((topic) => (
                    <Box xs={12} sm={6} xl={3} key={topic.id}>
                        <SingleTopic topic={topic}/>
                    </Box>
                ))}
            </Box>
        );
    }
};

export default TopicsList;