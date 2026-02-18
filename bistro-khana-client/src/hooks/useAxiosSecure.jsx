import React from 'react';
import axios from "axios";
import { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxiosSecure = () => {
    const { logout}=useContext(AuthContext);
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(
        function(config){
            const token = localStorage.getItem('access-token')
            config.headers.authorization = `Bearer ${token}`;
            return config
        }, function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
    );

    axiosSecure.interceptors.response.use(
         function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  },async function(error){
    console.log(error)
    
    const status = error.response.status;
    if(status === 401 || status === 403){
        await logout();
        navigate('/login')
    }
     return Promise.reject(error);
  }
    )
    return axiosSecure;
};

export default useAxiosSecure;