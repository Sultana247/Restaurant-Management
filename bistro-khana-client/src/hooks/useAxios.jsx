import axios from 'axios';
import React from 'react';

const axiosurl = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxios = () => {
    return axiosurl;
};

export default useAxios;