import React, {useState} from 'react';
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {Box, Popover, Typography} from "@mui/material";
import AbuseReportModal from "./AbuseReportModal";
import checkIfUserLogged from "../../services/JwtToken";
import {useNavigate} from "react-router-dom";

const AbuseReport = ({ item }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = Boolean(anchorEl);
    const [openForm, setOpenForm] = useState(false);

    const popoverText = checkIfUserLogged() ? 'Zgłoś nadużycie' : 'Aby zgłosić nadużycie musisz być zalogowany';

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handlePopoverClick = () => {
        if (checkIfUserLogged()) {
            setOpenForm(true);
            setAnchorEl(null);
        } else {
            navigate("/login/");
        }
    }

    const closeForm = () => {
        setOpenForm(false);
    }

    if (item.status !== 'ACCEPTED') {
        return (
            <Box align="center">
                <ErrorOutlineOutlinedIcon color="primary" onClick={handleClick}/>
                <Popover
                    // id={id}
                    open={openPopover}
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
                    onClick={handlePopoverClick}
                >
                    <Typography sx={{p: 2, bgcolor: '#F3F2EC'}}>{popoverText}</Typography>
                </Popover>
                <AbuseReportModal open={openForm} onClose={closeForm} item={item}/>
            </Box>
        );
    }
};

export default AbuseReport;