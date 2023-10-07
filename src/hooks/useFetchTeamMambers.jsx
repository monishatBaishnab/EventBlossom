import { useEffect, useState } from "react";

const useFetchTeamMambers = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(()=> {
        fetch('/teamMambers.json')
        .then(res => res.json())
        .then(data => setTestimonials(data));

    }, [])
    return testimonials;
};

export default useFetchTeamMambers;