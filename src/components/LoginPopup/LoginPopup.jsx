// import React from 'react'
import { useState  } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// eslint-disable-next-line react/prop-types
const LoginPopup = ({ setShowLogin }) => {

  const navigate = useNavigate()

  const [currState, setCurrState] = useState("Login");
  const [username, setUserName] = useState(" ")
  const [password, setPassword] = useState(" ")

  const formSubmit=(e)=>{
    e.preventDefault();
  }

  const handleUsername=(e)=>{
    setUserName(e.target.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  const handleApi=()=>{
    axios.post('https://reqres.in/api/login',{
      email: username,
      password: password
    })
    .then(result=>{
      toast("Successfully Login");
      localStorage.setItem('token', result.data.token)
      navigate('/home')
    })
    .catch(error=>{
      toast.success("Username and password invalid");
      console.log(error)
    })
  }


  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={formSubmit}>
        <div className="login-popup-tittle">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (<></>) : 
          // Sign Up form
        (<input  type="text" placeholder="Your name" required />)}
        <input type="email" value={username} onChange={handleUsername} placeholder="Your email" required/>
        <input type="password" value={password} onChange={handlePassword} placeholder="Your Password" required/>
        </div>
        <button type="submit" onClick={handleApi}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
      <ToastContainer
      position="top-center" />
    </div>
    
  );
};

export default LoginPopup;
