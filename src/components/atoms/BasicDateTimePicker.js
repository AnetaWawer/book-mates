import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import {DateTimePicker} from "@mui/x-date-pickers";

const BasicDateTimePicker = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label={props.label}
                value={props.selectedDateTime}
                onChange={(newValue) => props.setSelectedDateTime(newValue)}
                sx={{width:'500px'}}
            />
        </LocalizationProvider>
    );
};

export default BasicDateTimePicker;