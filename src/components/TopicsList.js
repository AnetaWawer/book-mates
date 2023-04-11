import {Box} from "@mui/material";
import SingleTopic from "./SingleTopic";
import React from "react";

const TopicsList = ({topics} ) => {
    return (
        <Box>
            {topics.map((topic) => (
                <Box xs={12} sm={6} xl={3} key={topic.id}>
                    <SingleTopic topic={topic} />
                </Box>
            ))}
        </Box>
    );
};

export default TopicsList;