import './styles.css';
import Paper from '@mui/material/Paper'



const BookDescription = ({ description }) => {
    return (
        <Paper>
            <p className="book-description">
                <h2>Description</h2>
                {description}
            </p>
        </ Paper>
    );
};

export default BookDescription;