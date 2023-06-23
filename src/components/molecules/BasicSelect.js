import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    return (
            <FormControl fullWidth sx={props.sx ? props.sx : { } }>
                <InputLabel id="label">{props.label}</InputLabel>
                <Select
                    value={props.value}
                    label={props.label}
                    onChange={props.handleChange}
                    onClose={props.handleCloseSelect}
                    onOpen={props.handleOpenSelect}
                    open={props.openSelect}
                    required
                    size={props.size ? props.size : 'medium'}
                >
                    {
                        props.items.map((item) =>
                            <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
    );
}
