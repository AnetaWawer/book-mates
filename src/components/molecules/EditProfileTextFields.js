import React from "react";
import {Box, TextField} from "@mui/material";


const EditProfileTextFields = ({nickname, biogram}) => {
    return (
        <Box>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Nickname"
                name="title"
                placeholder={nickname}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                multiline
                label="Bio"
                name="description"
                placeholder={biogram}
            />

        </Box>
    );
};

export default EditProfileTextFields;