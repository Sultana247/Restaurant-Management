import React, { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <div className='flex justify-center items-center m-25'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'} location={{location: location.pathname}}></Navigate>
};

export default PrivateRoute;