import axios from 'axios';
import React from 'react';

const axiosurl = axios.create({
    baseURL: 'https://bistro-khana-server.vercel.app'
});
const useAxios = () => {
    return axiosurl;
};

export default useAxios;