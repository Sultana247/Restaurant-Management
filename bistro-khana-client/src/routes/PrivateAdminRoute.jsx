import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../Provider/AuthContext';
import useAdmin from '../hooks/useAdmin';

const PrivateAdminRoute = ({children}) => {
   const location = useLocation();
   
    const {user, loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading]=useAdmin();
        if(loading || isAdminLoading){
        return <div className='flex justify-center items-center m-25'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location.pathname}}></Navigate>
};

export default PrivateAdminRoute;