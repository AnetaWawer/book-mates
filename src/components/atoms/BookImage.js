import React, {useEffect, useRef, useState} from "react";
import {CardMedia} from "@mui/material";



const BookImage = ({ book }) => {
    const [imageData, setImageData] = useState('');
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const maxWidth = 200; // maximum width of canvas
        const lineHeight = 20; // height of each line
        const text = book.title;

        // Set the dimensions of the canvas
        canvas.width = 200;
        canvas.height = 300;

        // Draw the background
        ctx.fillStyle = '#eeede7';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the title
        ctx.fillStyle = 'cadetblue';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        // ctx.fillText(book.title, canvas.width / 2, canvas.height / 2 - 20);

        // measure the width of the text
        const textWidth = ctx.measureText(text).width;
        // if the text is wider than the canvas, split it into multiple lines
        if (textWidth > maxWidth) {
            const words = text.split(' ');
            let line = '';
            let lines = [];

            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                const testLine = `${line}${word} `;
                const testWidth = ctx.measureText(testLine).width;

                if (testWidth > maxWidth) {
                    lines.push(line);
                    line = `${word} `;
                } else {
                    line = testLine;
                }
            }

            lines.push(line);

            // draw each line of text
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const y = (i + 1) * lineHeight + canvas.width/2;
                ctx.fillText(line.trim(), canvas.width / 2, y);
            }
        } else {
            // draw the text on a single line
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        }


        // Draw the author
        ctx.fillStyle = 'cadetblue';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(book.author ? book.author : "", canvas.width / 2, canvas.height / 2 + 60);

        // Set the image data to the base64-encoded image
        setImageData(canvas.toDataURL());
    }, [book]);

    return (
        <div style={{ height: "65%" }}>
            <CardMedia
                component="img"
                image={book.pictureUrl ? book.pictureUrl : imageData}
                alt={book.title}
                width="200"
                height="300"
                style={{ height: "100%" }}
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
    );
};

export default BookImage;
