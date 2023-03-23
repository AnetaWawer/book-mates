import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const BookHeader = ({ book }) => {
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img className="img" src="http://books.google.com/books/content?id=Ii4xwxU2PYsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt={`Cover for ${book.title}`} />
                </Grid>
                <Grid item xs={8}>
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">{book.author}</p>
                    <p className="number-pages">Liczba stron: {book.pages}</p>
                    <Typography component="legend">Ocena</Typography>
                    <Rating name="customized-10" value={Math.round(book.rating)} max={10} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookHeader;