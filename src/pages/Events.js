import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsPanel from "../components/CardsPanel";
import {ContainerSize} from "../components/Container.styles";
import {TablePagination} from "@mui/material";

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
            <CardsPanel elements={events} header={eventsHeader}/>
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