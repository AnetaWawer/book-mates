import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer} from "../components/Container.styles";
import {TablePagination} from "@mui/material";
import SearchBar from "../components/atoms/SearchBar";
import Grid from "@mui/material/Grid";
import SectionHeader from "../components/atoms/SectionHeader";
import CardsBar from "../components/organisms/CardsBar";
import BasicDatePicker from "../components/atoms/BasicDatePicker";


const Events = () => {
    const eventsHeader = "Wszystkie wydarzenia";
    const [events, setEvents] = useState([]);
    const [eventsCount, setEventsCount] = useState(0);
    const [page, setPage] = useState(
        {
            page: 0,
            rowsPerPage: 12
        }
    );

    const dateSinceDefault = new Date(2000, 0, 1)
    const [selectSinceDate, setSelectedSinceDate]= useState(dateSinceDefault);
    const dateUntilDefault = new Date(2100, 0, 1);
    const [selectUntilDate, setSelectedUntilDate]= useState(dateUntilDefault);

    const [searchedEvents, setSearchedEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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
                }
            )
            .catch(error => console.log(error));
    }, [page]);


    useEffect(() => {
        if (!searchedEvents.length) {
            axios.get('http://localhost:8080/api/events/all')
                .then(response => {
                    setSearchedEvents(response.data)
                })
                .catch(error => console.log(error))
        }
    })

    const handleSearch = (search, dateSince, dateUntil) => {
        setSearchQuery(search);
        setSelectedSinceDate(dateSince);
        setSelectedUntilDate(dateUntil);
        const searchedEvent = searchedEvents.filter( (element) => {
                if (search.length===0){
                    return (new Date(dateUntil).toISOString() > element.eventDate) && (new Date(dateSince).toISOString() < element.eventDate);
                }
                else {
                    return (element.bookAuthor.toLowerCase().includes(search)
                    || element.bookTitle.toLowerCase().includes(search))
                    && (new Date(dateUntil).toISOString() > element.eventDate) && (new Date(dateSince).toISOString() < element.eventDate);
                }
        });
        setEvents(searchedEvent);
        // if (search.length!==0){
        //     setEvents(searchedEvent);
        // } else {
        //     handlePageChange(1,0)
        // }
    };

    return (
        <MainContainer>
            <SectionHeader header={eventsHeader} />
            <SearchBar
                placeholder="Szukaj wydarzeń według autora lub tytułu książki.."
                onChange={(event) => handleSearch(
                   event.target.value, selectSinceDate, selectUntilDate
                )}
            />
            <Grid container spacing={10} sx={{  marginBottom: 2 }} >
                <Grid item sm={4}>
                    <BasicDatePicker
                        label="od"
                        selectedDate={selectSinceDate}
                        onChange={(newValue) => handleSearch(
                            searchQuery, newValue, selectUntilDate
                        )}
                    />
                </Grid>
                <Grid item sm={4}>
                    <BasicDatePicker
                        label="do"
                        selectedDate={selectUntilDate}
                        onChange={(newValue) => handleSearch(
                            searchQuery, selectSinceDate, newValue
                        )}
                    />
                </Grid>
                <Grid item sm={4} >
                    {/*<BasicSelect />*/}
                </Grid>
            </Grid>


            <CardsBar elements = {events}  />
            {searchQuery.length > 0 ? null : <TablePagination
                component="div"
                rowsPerPageOptions={[12,24, 48, 96]}
                onPageChange={handlePageChange}
                page={page.page}
                count={eventsCount}
                rowsPerPage={page.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Ilość wydarzeń na stronie'
            />}

        </MainContainer>

    );
};

export default Events;