import React, { useState, useEffect } from 'react';

import axios from 'axios';
import EventCom from "../components/EventCom";



const Event = ({ eventId }) => {
    const[event, setEvent] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/api/event/0')
            .then(response => setEvent(response.data))
            .catch(error => console.log(error));
    }, [eventId]);

    return (
        <div>
            <div>
                <EventCom event={event}/>
            </div>
        </div>
    );
};

export default Event;