import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            
            return res.data?.admin
        }
    });
    
    return [isAdmin, isAdminLoading];
};

export default useAdmin;