import React from "react";
import {ArrowImage, SeeMore} from "./SeeMoreButton.styles";
import {useNavigate} from "react-router-dom";

function SeeMoreButton(props){
    const navigate = useNavigate();
    return (
        <SeeMore onClick={() =>navigate(props.url)}> Zobacz Więcej
            <ArrowImage />
        </SeeMore>
    )
}

export default SeeMoreButton;