import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardsBar from "../components/organisms/CardsBar";
import {useSearchParams} from "react-router-dom";
import SectionHeader from "../components/atoms/SectionHeader";
import {MainContainer} from "../components/Container.styles";


const Books = () => {
    const booksHeader = "Wybrane tytuły"
    const [books, setBooks] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get('query');
    console.log("Books.query = " + query);
    const criteria = searchParams.get('criteria');
    console.log("Url send to backend = " + `http://localhost:8080/api/books/search/?criteria=${criteria}&query=${query}`);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/books/search?criteria=${criteria}&query=${query}`)
            .then(response => {
                    setBooks(response.data);
                    console.log("Books get from API: " + books);
                }
            )
            .catch(error => console.log(error));
    }, [searchParams]);

    return (
        <MainContainer>
            <SectionHeader header={booksHeader} />
            <CardsBar elements = {books} keyField="externalId" />
        </MainContainer>
    );
}

export default Books