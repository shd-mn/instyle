import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const API = `${process.env.REACT_APP_API}/${endpoint}`;

    const getData = async (url) => {
        setIsLoading(true);
        try {
            const result = await axios.get(url);
            setData(result.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        getData(API);
    }, [API]);

    return { data, isLoading, error };
};
