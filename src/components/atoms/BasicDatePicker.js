import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BasicDatePicker = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    format="DD/MM/YYYY"
                    value={props.selectedDateTime}
                    label={props.label}
                    onChange= {props.onChange}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default BasicDatePicker;