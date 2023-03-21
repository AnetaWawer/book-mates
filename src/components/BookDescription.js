import './styles.css';


const BookDescription = ({ description }) => {
    return (
        <div className="book-description">
            <p>
                <h2>Description</h2>
                {description}
            </p>
        </div>
    );
};

export default BookDescription;