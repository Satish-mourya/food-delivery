import {React,useState} from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
const LoginPopUp = ({setshowLogin}) => {

    const [currentState,setcurrentState]=useState("Login");
  return (
    <div className='login-popup'>
    <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input type="text" placeholder="Your name" required />}
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="password" required />
        </div>

        <button>{currentState==="Sign up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login" ?
        <p>Create a new account?<span onClick={()=>setcurrentState("Sign up")}>Click here</span></p>:
        <p>Already have an account ? <span onClick={()=>setcurrentState('Login')}>Login here</span></p>}
    </form>
    </div>
  )
}

export default LoginPopUp
