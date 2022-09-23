import { useState, useEffect } from 'react';

export default function useFetch(url: string) {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(resData => {
            setData(resData);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false)
        })
    }, [url])
    return { data, loading, error }
}