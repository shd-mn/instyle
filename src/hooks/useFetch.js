import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endpoint, select, filter, page) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    let API = '';
    if (filter) {
        API = `${process.env.REACT_APP_API}/${endpoint}?select=${select}&${filter}`;
    } else {
        API = `${process.env.REACT_APP_API}/${endpoint}?select=${select}`;
    }

    let range = '';
    if (page) {
        range = page;
    }

    const getData = async (url) => {
        setIsLoading(true);
        try {
            const result = await axios.get(url, {
                headers: {
                    apikey: process.env.REACT_APP_API_KEY,
                    Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY,
                    Range: range,
                },
            });
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
