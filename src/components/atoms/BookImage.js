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
                        p: 1,
                        height: 300,
                        width: 200
                    }}
                />
            ) : (
                <DefaultBookCover book={book} />
            )}
        </>
    );
};

export default BookImage;
