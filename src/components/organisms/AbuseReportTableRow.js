import React, {useState} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AbuseReportTableRow = (props) => {
    const {row} = props;
    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': {borderBottom: 'unset'} }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{ row.id }</TableCell>
                <TableCell align="right">{ row.creationTime }</TableCell>
                <TableCell align="right">{ row.itemType }</TableCell>
                <TableCell align="right">{ row.itemId }</TableCell>
                <TableCell align="right">{ row.problemType }</TableCell>
                <TableCell align="right">{ row.reviewStatus }</TableCell>
            </TableRow>
        </>
    );
};

export default AbuseReportTableRow;