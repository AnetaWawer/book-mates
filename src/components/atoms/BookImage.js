import React from "react";
import {CardMedia} from "@mui/material";
import DefaultBookCover from "../atoms/DefaultBookCover";

const BookImage = ({ book }) => {
    return (
        <>
            {book.pictureUrl && book.pictureUrl !== null ? (
                <CardMedia
                    component="img"
                    image={book.pictureUrl}
                    alt={book.title}
                    sx={{
                        p: 4,
                        height: 340,
                        width: 400,
                        backgroundColor:'#eeede7',
                    }}
                />
            ) : (
                <DefaultBookCover book={book} />
            )}
        </>
    );
};

export default BookImage;
