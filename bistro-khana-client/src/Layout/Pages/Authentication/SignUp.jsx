import React, { useContext } from 'react';
import authBgImg from '../../../assets/others/authentication.png'
import auth2 from '../../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router';
import AuthContext from '../../../Provider/AuthContext';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

const SignUp = () => {
    const { signUp, updateName } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const { name, email, password } = data;
        signUp(email, password)
            .then(user => {
                updateName(name)
                .then(()=>{

                })
                .catch(error=>{
                    console.log(error.message)
                })
                Swal.fire({
                    title: "Your account has been created successfully",
                    showClass: {
                        popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                                `
                    },
                    hideClass: {
                        popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                                `
                    }
                });
                console.log(user)
                navigate('/login')
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    showClass: {
                        popup: `
                                    animate__animated
                                    animate__fadeInUp
                                    animate__faster
                                    `
                    },
                    hideClass: {
                        popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                    `
                    }
                });
            })
    }


    return (
        <div style={{ backgroundImage: `url(${authBgImg})` }} className='w-full min-h-screen pt-25'>
            <div className="hero flex flex-col md:flex-row justify-center items-center ">
                <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-[#00000040]  border-gray-300 border p-15">
                    <div className="card  w-full max-w-sm shrink-0">
                        <div className="card-body inter-font ">
                            <h1 className="text-3xl uppercase text-center font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset className="fieldset">
                                    <label className="dark-2 text-xl font-semibold">Name</label>
                                    <input className="input" {...register("name", { required: true, maxLength: 20 })} aria-invalid={errors.firstName ? "true" : "false"} />
                                    {errors.name?.type === "required" && (
                                        <p className='text-red-600 '>First name is required</p>)}
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
                                    <input type="submit" className='btn bg-[#D1A054] font-bold text-white text-xl mt-5 ' value={'Sign Up'} />
                                </fieldset>
                            </form>
                            <Link to={'/login'} className='text-lg authtext'>Already registered? Go to log in</Link>
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

export default SignUp;