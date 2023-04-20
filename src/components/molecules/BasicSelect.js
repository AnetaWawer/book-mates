import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    return (
        // <Box sx={{ minWidth: 320 }}>
            <FormControl fullWidth>
                <InputLabel id="label">{props.label}</InputLabel>
                <Select
                    labelId={props.labelId}
                    id={props.id}
                    value={props.value}
                    label={props.label}
                    onChange={props.handleChange}
                    onClose={props.handleCloseSelect}
                    onOpen={props.handleOpenSelect}
                    open={props.openSelect}
                >
                    {
                        props.items.map((item) =>
                            <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        // </Box>
    );
}
