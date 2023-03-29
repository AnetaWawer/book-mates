import {Grid} from "@mui/material";
import SingleTopic from "./SingleTopic";
import React from "react";

const TopicsList = ({topics} ) => {
    return (
        <Grid item>
            {topics.map((topic) => (
                <Grid item xs={12} sm={6} xl={3} key={topic.id}>
                    <SingleTopic topic={topic} />
                </Grid>
            ))}
        </Grid>
    );
};

export default TopicsList;