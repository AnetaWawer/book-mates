import React, {useEffect, useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AbuseReportTableRow from "../components/organisms/AbuseReportTableRow";

const Dashboard = () => {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        if (!reports.length) {
            axios.get(`http://localhost:8080/api/abuse-reports/`)
                .then(response => setReports(response.data))
                .catch(error => console.log(error.response.data))
        }
    }, [reports])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="right">Id zgłoszenia</TableCell>
                        <TableCell align="right">Data</TableCell>
                        <TableCell align="right">Typ wpisu</TableCell>
                        <TableCell align="right">Id wpisu</TableCell>
                        <TableCell align="right">Typ problemu</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.map((report) => (
                        <AbuseReportTableRow key={report.id} row={report} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Dashboard;