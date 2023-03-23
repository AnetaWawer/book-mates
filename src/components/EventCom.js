import './styles.css';

const EventComp = ({ event }) => {
    return (
        <div className="book-details">
            <div className="book-cover">
            </div>
            <div className="book-info">
                <p className="book-author">{event.description}</p>
            </div>
        </div>
    );
}

export default EventComp;