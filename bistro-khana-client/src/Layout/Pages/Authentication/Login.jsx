import React, { useContext, useEffect, useState } from 'react';
import authBgImg from '../../../assets/others/authentication.png'
import auth2 from '../../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [disableSubmit, setDisabledSubmit]=useState(true);
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm()
    // handle captcha
    const handleCaptcha =()=>{
        const captcha = document.getElementById('captcha').value;
        if(validateCaptcha(captcha)){
            setDisabledSubmit(false);
        }
        else{
            setDisabledSubmit(true)
        }
        
    }
    // handle form
    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        signIn(email, password)
            .then(user => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user)
                navigate(location.state?.from || '/')
            })
            .catch(error => {
               console.log(error.me)
            })
    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div style={{ backgroundImage: `url(${authBgImg})` }} className='w-full min-h-screen pt-25'>
            <Helmet>
                <title>Bistro Boss | SignIn</title>
            </Helmet>
            <div className="hero flex flex-col md:flex-row justify-center items-center ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl shadow-[#00000040]  border-gray-300 border p-15">
                    <div className="card  w-full max-w-sm shrink-0">
                        <div className="card-body inter-font ">
                            <h1 className="text-3xl uppercase text-center font-bold">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset className="fieldset">
                                    <label className="dark-2 text-xl font-semibold">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" {...register("email", { required: "Email Address is required" })}
                                        aria-invalid={errors.mail ? "true" : "false"} />
                                    {errors.email && <p className='text-red-600 '>{errors.email.message}</p>}
                                    <label className="dark-2 text-xl font-semibold">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" {...register("password", { required: "Password is required", minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/ })}
                                        aria-invalid={errors.mail ? "true" : "false"} />
                                    {errors.password && <p className='text-red-600 '>{errors.password.message}</p>}
                                    {errors.password?.type === "minLength" && (
                                        <p className='text-red-600 '>Password should be at least 8 characters</p>)}
                                    {errors.password?.type === "pattern" && (
                                        <p className='text-red-600 '>Password should contain at least one uppercase, one lowercase, one digit and one special character</p>)}
                                    {/* recaptcha */}
                                    
                                    <LoadCanvasTemplate />
                                    
                                    <input type="text" onBlur={handleCaptcha} className='input' id='captcha' placeholder='Type above text here' />
                                    <input type="submit" disabled={disableSubmit? true : false}  className='btn bg-[#D1A054] font-bold text-white text-xl mt-5 ' value={'Sign In'} />
                                    
                                </fieldset>
                            </form>
                            <SocialLogin></SocialLogin>
                            <Link to={'/signup'}  className='text-lg authtext'>New here? Create a New Account</Link>
                            
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={auth2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;