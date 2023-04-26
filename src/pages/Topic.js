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
    const [commentsNumber, setCommentsNumber] = useState(-1);
    let { topicId } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/api/topics/' + topicId)
            .then(response => {
                setTopic(response.data);
                setCommentsNumber(response.data.length)
                }
            )
            .catch(error => console.log(error));
    }, [commentsNumber]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/topics/' + topicId + "/comments")
            .then(response => {
                setComments(response.data);
                setCommentsNumber(response.data.length)
                }
            )
            .catch(error => console.log(error));

    }, [commentsNumber]);

    return (
        <MainContainer>
            <Panel>
                <SectionHeader header={topicHeader} />
                <SingleTopic topic={topic} updateCommentsNumber={setCommentsNumber}/>
                <NewCommentTextField updateComments={setCommentsNumber}/>
                <CommentsList comments={comments} />
            </Panel>
        </MainContainer>

    )
}


export default Topic;