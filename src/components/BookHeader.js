import './styles.css';

const BookHeader = ({ book }) => {
    return (
        <div className="book-details">
            <div className="book-cover">
                <img src={book.pictureUrl} alt={`Cover for ${book.title}`} />
            </div>
            <div className="book-info">
                <h1 className="book-title">{book.title}</h1>
                <p className="book-author">by {book.author}</p>
                <p className="book-rating">Rating: {book.rating}</p>
            </div>
        </div>
    );
}

export default BookHeader;