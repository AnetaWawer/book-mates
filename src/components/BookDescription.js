import './styles.css';
import Paper from '@mui/material/Paper'



const BookDescription = ( {description} ) => {
    return (
        <Paper>
            <div className="book-description">
                <h2>Opis</h2>
                {description && description.volumeInfo.description}
            </div>
        </ Paper>
    );
};

export default BookDescription;