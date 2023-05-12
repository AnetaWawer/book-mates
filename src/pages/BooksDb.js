import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MainContainer} from "../components/Container.styles";
import {TablePagination} from "@mui/material";
import SectionHeader from "../components/atoms/SectionHeader";
import CardsBar from "../components/organisms/CardsBar";


const BooksDb = () =>{
    const booksHeader = "Polecane tytuły";
    const [books, setBooks] = useState([]);
    const [booksCount, setBooksCount] = useState(0);
    const [page, setPage] = useState(
        {
            page: 0,
            rowsPerPage: 12
        }
    );

    const handlePageChange = (books, newPage) => {
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
        axios.get(`http://localhost:8080/api/books?page=${page.page}&size=${page.rowsPerPage}` )
            .then(response => {
                    setBooks(response.data.content);
                    setBooksCount(response.data.totalElements);
                }
            )
            .catch(error => console.log(error));
    }, [page]);


    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (!searchedBooks.length) {
            axios.get('http://localhost:8080/api/books')
                .then(response => {
                    setSearchedBooks(response.data)
                })
                .catch(error => console.log(error))
        }
    })


    return (
        <MainContainer>
            <SectionHeader header={booksHeader} />
            <CardsBar elements = {books}  />
            {searchQuery.length > 0 ? null : <TablePagination
                component="div"
                rowsPerPageOptions={[12,24, 48, 96]}
                onPageChange={handlePageChange}
                page={page.page}
                count={booksCount}
                rowsPerPage={page.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage='Liczba książek na stronie'
            />}
        </MainContainer>
    );
};

export default BooksDb;