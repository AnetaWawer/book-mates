import './styles.css';

const BookHeader = ({ title, author, rating, coverImg }) => {
    return (
        <div className="book-details">
            <div className="book-cover">
                <img src={coverImg} alt={`Cover for ${title}`} />
            </div>
            <div className="book-info">
                <h1 className="book-title">{title}</h1>
                <p className="book-author">by {author}</p>
                <p className="book-rating">Rating: {rating}</p>
            </div>
        </div>
    );
}

export default BookHeader;