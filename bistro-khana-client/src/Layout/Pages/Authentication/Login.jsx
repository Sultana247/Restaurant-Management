import React from 'react';
import authBgImg from '../../../assets/others/authentication.png'
import auth2 from '../../../assets/others/authentication2.png'
import { Link } from 'react-router';

const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${authBgImg})` }} className='w-full min-h-screen pt-25'>
            <div className="hero flex flex-col md:flex-row justify-center items-center ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl shadow-[#00000040]  border-gray-300 border p-15">
                    <div className="card  w-full max-w-sm shrink-0">
                        <div className="card-body inter-font ">
                            <h1 className="text-3xl uppercase text-center font-bold">Login</h1>
                            <form>
                                <fieldset className="fieldset">
                                <label className="dark-2 text-xl font-semibold">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />
                                <label className="dark-2 text-xl font-semibold">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input type="submit" className='btn authbtn font-bold text-white text-xl ' value={'Sign In'}/>
                            </fieldset>
                            </form>
                            <Link to={'/signup'} className='text-lg authtext'>New here? Create a New Account</Link>
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