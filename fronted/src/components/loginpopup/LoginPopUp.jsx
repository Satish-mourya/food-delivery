import {React,useState} from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios" 

const LoginPopUp = ({setshowLogin}) => {
    const {url,setToken }=useContext(StoreContext)
    const [currentState,setcurrentState]=useState("Login");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
        
    })

    const onchangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async (event)=>{
        event.preventDefault();// to prevent page reload
        let newUrl=url;
        if(currentState==='Login'){
            newUrl+="/api/user/login";
        }else{
            newUrl+="/api/user/register";
            
        }

        const respose=await axios.post(newUrl,data);
         if(respose.data.success){
            setToken(respose.data.token);
            localStorage.setItem("token",respose.data.token)

            setshowLogin(false)
            
        }else{
            alert(respose.data.message)
        }
    }

   
    
  return (
    <div className='login-popup'>
    <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input name="name" onChange={onchangeHandler} value={data.name} type="text" placeholder="Your name" required />}
            <input name="email" onChange={onchangeHandler} value={data.email} type="email" placeholder="Your email" required />
            <input name="password" onChange={onchangeHandler} value={data.password} type="password" placeholder="password" required />
        </div>

        <button type="submit" >{currentState==="Sign up"?"Create account":"Login"}</button>
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
