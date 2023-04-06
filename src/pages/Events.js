import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsPanel from "../components/CardsPanel";
import {ContainerSize} from "../components/Container.styles";
import {TablePagination} from "@mui/material";
import {Filter} from "@mui/icons-material";
import DateSelector from "../components/DateSelector";
import FirstComponent from "../components/DateSelector";
import DateRangePickerValue from "../components/DateSelector";
import BasicSelect from "../components/BasicSelect";
import Grid from "@mui/material/Grid";
import SectionHeader from "../components/SectionHeader";
import CardsBar from "../components/CardsBar";
import SeeMoreButton from "../components/SeeMoreButton";
import BasicDatePicker from "../components/BasicDatePicker";

const Events = () =>{
    const eventsHeader = "Wszystkie wydarzenia";
    const [events, setEvents] = useState([]);
    const [eventsCount, setEventsCount] = useState(0);
    const [page, setPage] = useState(
        {
            page: 0,
            rowsPerPage: 12
        }
    );

    const handlePageChange = (event, newPage) => {
        setPage({
            ...page,
            page: newPage
        });
    };
    const handleChangeRowsPerPage = (event) => {
        setPage({
            ...page,
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        });
    };

    useEffect(() => {
            axios.get(`http://localhost:8080/api/events?page=${page.page}&size=${page.rowsPerPage}` )
                .then(response => {
                    setEvents(response.data.content);
                    setEventsCount(response.data.totalElements);
                    console.log("pobralem wydarzenia");
                    }
                )
                .catch(error => console.log(error));
    }, [page]);

    return (
        <ContainerSize>
            <SectionHeader header={eventsHeader} />
            <Grid container spacing={10} sx={{  marginBottom: 2 }} >
                <Grid item sm={4}>
                    <BasicDatePicker label="od" />
                </Grid>
                <Grid item sm={4}>
                    <BasicDatePicker label="do"/>
                </Grid>
                <Grid item sm={4} >
                    <BasicSelect />
                </Grid>
            </Grid>


            <CardsBar elements = {events} />
            <SeeMoreButton />
            <TablePagination
                component="div"
                rowsPerPageOptions={[12,24, 48, 96]}
                onPageChange={handlePageChange}
                page={page.page}
                count={eventsCount}
                rowsPerPage={page.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Ilość wydarzeń na stronie'
            />

        </ContainerSize>
    );
};

export default Events;