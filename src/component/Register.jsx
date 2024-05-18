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
        <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt="">
              <img
                src="https://img.freepik.com/premium-vector/man-holding-cloud-storage-padlock_174639-73382.jpg?w=740"
                alt="IMG"
              />
            </div>
            <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title">Sign up</span>
              <div style={{color:"red", paddingBottom: 10}}>{message}</div>
              <div
                className="wrap-input100"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Enter email here!"
                  value={email}
                  required
                  onInput={handleEmailChange}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100"
              >
              <input
                  className="input100"
                  type="text"
                  placeholder="Enter username here!"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-fw fa-address-card" aria-hidden="true" />
                </span>
                </div>
              <div
                className="wrap-input100"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={password}
                  required
                  minLength={8}
                   maxLength={30}
                  placeholder="Enter password here!"
                  onChange={(e) => setPassword(e.target.value)}
      
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type='submit'>Sign up</button>
              </div>
              
              <div className="text-center p-t-136">
                <a className="txt2" href="#" onClick={gotoLoginPage}>
                Already have an account? Click me!
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
        
        
    );
    
  
};

export default Signup;