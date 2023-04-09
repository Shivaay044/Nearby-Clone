
import  { useEffect } from "react";
import React from "react";
import  { useState } from "react";
import "./Login.css";
import axios from "axios"
import { useDispatch, useSelector} from "react-redux"
import { loginfaliure, loginSuccess } from "../Redux/Authentication/actionType,";
import { store } from "../Redux/store";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

// signup state
const signupInitialState = {
  name:"",
  email:"",
  password:"",
  role:null
}

// login state
const loginInitialState ={
  email:"",
  password:"",
  role:null
}

// LOGIN Function
function Login() {
   const [signup,setSignup] = useState(true)
   const [login,setLogin] = useState(false)
   const [SignupData , setSignupData] = useState(signupInitialState)
   const [LoginData , setLoginData] = useState(loginInitialState)
   const [crud,setCrud] = useState({})

   useEffect(() =>{
    LoginData.role && axios.get(`https://stienfildapi.onrender.com/${LoginData.role}`)
      .then((res) =>{setCrud(res.data)})
   },[LoginData])

   const dispatch = useDispatch()

  //  taking Auth data from Redux Store
   const isAuth = useSelector((store) =>store.authReducer.isAuth)

   const navigate = useNavigate()

   const handleloginSwitch = () =>{
         setSignup(true)
         setLogin(false)
   }

   const handleSignupSwitch = () =>{
    setLogin(true)
    setSignup(false)
   }


  //  posting user validation data to the server by Axios
   const handleSignup = (e) =>{
        e.preventDefault()
        SignupData.role && axios.post(`https://stienfildapi.onrender.com/${SignupData.role}`,SignupData)
       .then((res) =>{toast.success("Registered Successfully !")})
       .catch((err) =>{toast.error("Failed, try again")})
   }

  //  for SIGNUP
   const hanldeChangeSignup = (e) =>{
     const {value,name} = e.target
      setSignupData({...SignupData,[name]:value})
   }

  //  for LOGIN
   const handleChangeLogin = (e) =>{
    const {value,name} = e.target
    setLoginData({...LoginData,[name]:value})
   }


   const handleLogin = async(e) =>{
    e.preventDefault()
    
    let arr = crud.filter((el) =>{
      if(el.email==LoginData.email && el.password==LoginData.password){
        dispatch(loginSuccess())
      return {email:el.email,password:el.password}
     }
    })
    
    if(arr.length>0){
      toast.success("Login Successfully !!")
      arr[0].role=="user"?navigate("/"):navigate("/admin");
    }else{
      dispatch(loginfaliure())
       toast.error("Credentials wrong");
    }

   }
  
  return (
    
    <div id="credential-main">
    <Toaster/>
      {/* <--------------------------Sign Up---------------------------> */}
      <div hidden={signup}>
        <div className="main-signup">
          <div className="signup">
            <div>
              <h1>Sign up</h1>
            </div>
            <div>
              <form onSubmit={handleSignup} className="signup-form">
                <input name="name" type="text" placeholder="User name" onChange={hanldeChangeSignup}  required/>
                <input name="email" type="email" placeholder="Email" onChange={hanldeChangeSignup} required/>
                <input name="password" type="password" placeholder="Password" onChange={hanldeChangeSignup} required/>
                <select name="role" placeholder="select role" onChange={hanldeChangeSignup} required>
                  <option>select role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="switch-login">
            <button onClick={handleloginSwitch}>Login?</button>
            </div>
          </div>
        </div>
      </div>

      {/* <-----------------------Login-------------------------> */}

      <div hidden={login}>
        <div className="main-login">
          <div className="login">
            <div>
              <h1>Login</h1>
            </div>
            <div>
              <form onSubmit={handleLogin} className="login-form">
                <input name="email" type="email" placeholder="Email" onChange={handleChangeLogin} required/>
                <input name="password" type="password" placeholder="Password" onChange={handleChangeLogin} required/>
                <select name="role" placeholder="select role" onChange={handleChangeLogin} required>
                  <option>select role</option>
                  <option>User</option>
                  <option>Admin</option>
                </select>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="switch-signup">
            <button onClick={handleSignupSwitch}>Sign up?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
