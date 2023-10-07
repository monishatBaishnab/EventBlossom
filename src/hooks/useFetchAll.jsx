import { useEffect, useState } from "react";

const useFetchAll = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=> {
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents(data));

    }, [])
    return events;
};

export default useFetchAll;