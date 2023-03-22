import './styles.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const BookHeader = ({ book }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper>
                    <img src={book.pictureUrl} alt={`Cover for ${book.title}`} />
                </ Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-rating">Rating: {book.rating}</p>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default BookHeader;