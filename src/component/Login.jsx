import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState('')
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

    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setMessage('Email is Valid');
        } else if(email === ""){
            setMessage("Please enter email")
        }else if(!emailRegex.test(email)){
            setMessage("Email is not valid")
        }else{
            setMessage("")
        }
    };
    useEffect(()=>{
        validateEmail();
    },[email])

  return (
    <>
        <div className='login__container'>
        <h2 style={{display:'flex', justifyContent:'center'}}> Welcome back! </h2>
            <form className='login__form' onSubmit={submit}>
            
            <div style={{color:"red", display: 'flex', justifyContent: "center", marginBottom: 10}}>{message}</div>
            <input
                type='text'
                value={email}
                placeholder='Enter email here'
                required
                onInput={handleChange}
            />
            <input
                type='password'
                name='password'
                id='password'
                placeholder='Enter password here'
                minLength={2}
                maxLength={50}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />


            <button className='loginBtn'type='submit'>SIGN IN</button>


            <p> Don't have an account?
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
