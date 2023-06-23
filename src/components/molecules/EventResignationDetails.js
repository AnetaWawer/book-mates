import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Typography, Box} from "@mui/material";

function EventResignationDetails({resignFromEvent}) {
    const navigate = useNavigate();

    return (
        <Box textAlign="center">
            <Typography variant="h6" textAlign="center">Czy na pewno chcesz zrezygnować z udziału w wydarzeniu ?</Typography>
                <Button variant="outlined" sx={{marginRight:"100px", marginTop:"30px"}} onClick={() => navigate("/")}> NIE </Button>
                <Button variant="outlined" sx={{ marginTop:"30px"}} onClick={resignFromEvent}> TAK </Button>
        </Box>
    )
}

export default EventResignationDetails;