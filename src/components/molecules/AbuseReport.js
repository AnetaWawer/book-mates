import React, {useState} from 'react';
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {Box, Popover, Typography} from "@mui/material";
import AbuseReportModal from "./AbuseReportModal";

const AbuseReport = ({ item }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = Boolean(anchorEl);
    const [openForm, setOpenForm] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const getAbuseReportForm = () => {
        setOpenForm(true);
        setAnchorEl(null);
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
                    onClick={getAbuseReportForm}
                >
                    <Typography sx={{p: 2, bgcolor: '#F3F2EC'}}>Zgłoś nadużycie</Typography>
                </Popover>
                <AbuseReportModal open={openForm} onClose={closeForm} item={item}/>
            </Box>
        );
    }
};

export default AbuseReport;