import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import AuthContext from '../../../Provider/AuthContext';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleSignin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const axiosurl = useAxios();
    const handleGoogleSignin = () => {
        googleSignin()
            .then(data => {
                console.log(data)
                const userinfo = { name: data.user.displayName, email: data.user.email }
                axiosurl.post('/users', userinfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "You logged in successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });


                        }

                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state?.from || '/')
            })
    }
    return (
        <div>
            <div className="divider">OR</div>

            <button onClick={handleGoogleSignin} className="btn btn-outline btn-accent w-full"><FaGoogle></FaGoogle> Login with Google</button>
        </div>
    );
};

export default SocialLogin;