import { useEffect, useState } from 'react';

const useFetchTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(()=> {
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data));

    }, [])
    return testimonials;
};

export default useFetchTestimonials;