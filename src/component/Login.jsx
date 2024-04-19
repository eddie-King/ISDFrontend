import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const submit = async e =>{
        e.preventDefault();
        try{
             const response = await axios.post("http://localhost:8088/auth/login", {
                email: email,
                password: password
            })
            console.log(response.data);
            const data = response.data
            localStorage.setItem('token', data.accessToken)
            
            alert("Login successfully");
            
            return navigate("/")
        } catch(err){
            alert(err);
        }
    }

   

    const handleClick = () => {
        navigate("/register")
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
    };
    useEffect(()=>{
        validateEmail();
    },[email])

  return (
    <>
        <div className='login__container'>
        <h2>Login </h2>
            <form className='login__form' onSubmit={submit}>
                
            <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    value={email}
                    placeholder='email'
                    required
                    onInput={handleEmailChange}
                />
            {error && (
                <div className="bg-red-800 p-1 font-bold text-white">
                    {error}
                </div>)}

        <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='password'
                    minLength={8}
                    maxLength={50}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button className='loginBtn'type='submit'>SIGN IN</button>


                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={handleClick} >
                        Sign up
                    </span>
                </p>


            </form>
        </div>
    </>
  )
}

export default Login
