import { useEffect, useState } from "react";

const useFetchPricing = () => {
    const [pricing, setPricing] = useState([]);
    useEffect(()=> {
        fetch('/pricing.json')
        .then(res => res.json())
        .then(data => setPricing(data));

    }, [])
    return pricing;
};

export default useFetchPricing;