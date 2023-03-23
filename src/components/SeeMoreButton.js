import React from "react";
import {Button} from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

function SeeMoreButton(){
    return (
        <Button className="more-button align-right" href="#" color="inherit" underline="none">
            Zobacz Więcej
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20, textAlign:'right' }} />
        </Button>
    )
}

export default SeeMoreButton;