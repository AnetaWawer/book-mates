import React from "react";
import {IconButton, Snackbar} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BasicSnackBar = (props) => {
    const close = (
        <IconButton
            color="inherit"
            onClick={props.handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );
    return (
        <Snackbar open={props.open}
                  autoHideDuration={props.autoHideDuration}
                  onClose={props.handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  message={props.message}
                  action={close}
        >
        </Snackbar>
    )
}

export default BasicSnackBar;