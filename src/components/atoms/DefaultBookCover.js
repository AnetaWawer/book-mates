import React from 'react';
import { Paper, Typography } from '@mui/material';
import "./DefaultBookCover.styles"
import {CoverPaper} from "./DefaultBookCover.styles";

const DefaultBookCover = ({ book }) => {
    return (
        <CoverPaper elevation={3}>
            <div>
                <Typography variant="h5" component="h2" color="inherit">
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                    {book.author}
                </Typography>
            </div>
        </CoverPaper>
    );
};

export default DefaultBookCover;

