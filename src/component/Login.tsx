import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import './Login.css'
import token from "../Token";
import swal from 'sweetalert'
interface IFormInput {
  email: string;
  password: any;
}


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState('')
    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm({
      defaultValues:{
        email:"",
        password:"",
      }
    })
    const submit = async e =>{
        e.preventDefault();
        try{
             const response = await axios.post("http://localhost:8088/auth/login", {
                email: email,
                password: password
            })
            console.log(response.data)
            const data = response.data
            if(data.code == 0){
             navigate("/")
             swal("Successful!", "You loged!", "success");
             token.setToken(data.content.Bearer)
          }else{
            swal("Error!", "You failed to login!", "error");
          }
        } catch(err){
            console.error(e)
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
 <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt="">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?t=st=1713808982~exp=1713812582~hmac=b3741526ab3b5e134fbdd2ca942c984c87f84d74636e14ad4f50532cd1ef3892&w=740"
          alt="IMG"
        />
      </div>
      <form className="login100-form" onSubmit={submit}>
        <span className="login100-form-title">Welcome back!</span>
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
            onInput={handleChange}
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
            type="password"
            name="pass"
            value={password}
            required
            minLength={8}
             maxLength={50}
            placeholder="Enter password here!"
            onChange={(e) => setPassword(e.target.value)}

          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" type='submit'>Login</button>
        </div>
        
        <div className="text-center p-t-136">
          <a className="txt2" href="#" onClick={handleClick}>
            Create your Account
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default Login
