import React from 'react';
import { Paper, Typography } from '@mui/material';

const DefaultBookCover = ({ book }) => {
    return (
        <Paper
            elevation={3}
            style={{
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: 'url(http://sasieczno.pl/wp-content/uploads/2018/07/20180707_sniardwy.jpg)', // Replace with your own URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                width: '200px',
                height: '300px',
            }}
        >
            {/*<div style={{ flexGrow: 1 }}>*/}
            {/*    <img*/}
            {/*        src="https://example.com/default-cover.jpg" // Replace with your own URL*/}
            {/*        alt={`${book.title} by ${book.author}`}*/}
            {/*        width="200"*/}
            {/*        height="300"*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <Typography variant="h5" component="h2">
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                    {book.author}
                </Typography>
            </div>
        </Paper>
    );
};

export default DefaultBookCover;

