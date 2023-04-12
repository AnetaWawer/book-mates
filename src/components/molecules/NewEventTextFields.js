import React from "react";
import {Box, TextField} from "@mui/material";


const NewEventTextFields = () => {
    return (
       <Box>
           <TextField
               margin="normal"
               required
               fullWidth
               id="title"
               label="Nazwa"
               name="title"
           />
           <TextField
               margin="normal"
               required
               fullWidth
               id="description"
               multiline
               label="Opis"
               name="description"
           />
           <TextField
               margin="normal"
               required
               fullWidth
               type="number"
               id="maxParticipants"
               label="Ilość uczestników"
               name="maxParticipants"
           />
       </Box>
    );
};

export default NewEventTextFields;