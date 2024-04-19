import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleSubmit = async function save(event){
        event.preventDefault;
        try{
            await axios.post("http://localhost:8088/auth/register", {
                email: email,
                name: username ,
                password: password,
            });
            alert("Register successfully");
            return navigate('/login')
        } catch(err){
            alert(err);
        }
    }
   
    const gotoLoginPage = () => navigate("/login");

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
        <div className='signup__container'>
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    placeholder="Email"
                    value={email}
                    required
                    onInput={handleEmailChange}
                />
                {error && (
                <div className="bg-red-800 p-1 font-bold text-white">
                    {error}
                </div>)}

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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupBtn'onClick={handleSubmit}>SIGN UP</button>
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