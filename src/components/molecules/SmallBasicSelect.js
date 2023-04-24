import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SmallFormControl, SmallSelect} from "./SmallBasicSelect.styles";
import InputLabel from "@mui/material/InputLabel";

function SmallBasicSelect(props) {
    return (
        <SmallFormControl fullWidth>
            <InputLabel id="label">{props.label}</InputLabel>
            <SmallSelect
                labelId={props.labelId}
                id={props.id}
                value={props.value}
                label={props.label}
                onChange={props.handleChange}
                onClose={props.handleCloseSelect}
                onOpen={props.handleOpenSelect}
                open={props.openSelect}
                required
            >
                {
                    props.items.map((item) =>
                        <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                    )
                }
            </SmallSelect>
        </SmallFormControl>
    );
}

export default SmallBasicSelect