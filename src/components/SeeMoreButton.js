import React from "react";
import {Button} from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

function SeeMoreButton(){
    return (
        <Button sx={{ mt: 1 }} className="more-button align-right" href="#" color="inherit" underline="none">
            {/* dodałam sx={{ mt: 1 }} bo stylowanie w css nie pomagało nie wiem czemu */}
            Zobacz Więcej
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20, textAlign:'right' }} />
        </Button>
    )
}

export default SeeMoreButton;