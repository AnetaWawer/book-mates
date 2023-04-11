import '../styles.css';
import Paper from '@mui/material/Paper'



const Description = ({ description }) => {
    return (
        <Paper>
            <div className="book-description">
                <h2>Opis</h2>
                {description}
            </div>
        </ Paper>
    );
};

export default Description;