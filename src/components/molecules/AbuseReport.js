import React from 'react';
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {Popover, Typography} from "@mui/material";
import {CommentData} from "./Comments.styles";
import axios from "axios";

const AbuseReport = ({commentId}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);

    function reportAbuse() {
        axios.get(`http://localhost:8080/api/comments/${commentId}/report-abuse`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <CommentData align="right">
            <ErrorOutlineOutlinedIcon color="primary" onClick={handleClick}/>
            <Popover
                // id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right'
                }}
                onClick={reportAbuse}
            >
                <Typography sx={{ p: 2, bgcolor: '#F3F2EC'}}>Zgłoś nadużycie</Typography>
            </Popover>
        </CommentData>
    );
};

export default AbuseReport;