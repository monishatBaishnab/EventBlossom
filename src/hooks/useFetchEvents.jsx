import { useEffect, useState } from "react";

const useFetchEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=> {
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents(data));

    }, [])
    return events;
};

export default useFetchEvents;