import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import'./Login.css'
const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState('')
    const handleSubmit = async function save(event){
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:8088/auth/register", {
                email: email,
                name: username ,
                password: password,
            })
            console.log(response.data)
            alert("Register successfully");
            return navigate('/login')
        } catch(err){
            alert(err);
        }
    }
    const gotoLoginPage = ()=>{
        navigate('/login')
    }
    const handleEmailChange = (event) => {
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
        <div className='signup__container'>
            <h2> Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <div style={{color:"red"}}>{message}</div>
                <input
                    type='email'
                    placeholder="Email"
                    value={email}
                    required
                    onInput={handleEmailChange}
                />
               

                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder="username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder="password"
                    minLength={8}
                    maxLength={50}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupBtn' type= 'submit'>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className='link' onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;