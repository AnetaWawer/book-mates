import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer, Panel} from "../components/Container.styles";
import {useParams} from "react-router-dom";
import SectionHeader from "../components/atoms/SectionHeader";
import SingleTopic from "../components/molecules/SingleTopic";
import CommentsList from "../components/organisms/CommentsList";
import NewCommentTextField from "../components/molecules/NewCommentTextField";

function Topic() {
    const topicHeader = "Forum";
    const [topic, setTopic] = useState([]);
    const [comments, setComments] = useState([]);
    let { topicId } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/api/topics/' + topicId)
            .then(response => {
                setTopic(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [topicId]);

    let getComments = () => {
        axios.get('http://localhost:8080/api/topics/' + topicId + "/comments")
            .then(response => {
                    setComments(response.data);
                }
            )
            .catch(error => console.log(error));
        return comments;
    }

    useEffect(() => {
        getComments();
    }, [comments]);

    return (
        <MainContainer>
            <Panel>
                <SectionHeader header={topicHeader} />
                <SingleTopic topic={topic} />
                <NewCommentTextField comments={getComments} />
                <CommentsList comments={comments} />
            </Panel>
        </MainContainer>

    )
}


export default Topic;