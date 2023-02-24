
import React from "react";
import React, { useState } from "react";
import "./Login.css";
import axios from "axios"

const signupInitialState = {
  name:"",
  email:"",
  password:"",
  role:""
}

function Login() {

 
   const [signup,setSignup] = useState(true)
   const [login,setLogin] = useState(false)
   const [SignupData , setSignupData] = useState(signupInitialState)

   const handleloginSwitch = () =>{
         setSignup(true)
         setLogin(false)
   }

   const handleSignupSwitch = () =>{
    setLogin(true)
    setSignup(false)
   }


   const handleSignup = (e) =>{
        e.preventDefault()
       axios.post(`http://localhost:8080/admin/${signup}`)
   }


   const hanldeChangeSignup = (e) =>{
     const {value,name} = e.target
      setSignupData({...SignupData,[name]:value})
   }
 

  return (
    <div id="credential-main">
      {/* <--------------------------Sign Up---------------------------> */}
      <div hidden={signup}>
        <div className="main-signup">
          <div className="signup">
            <div>
              <h1>Sign up</h1>
            </div>
            <div>
              <form onSubmit={handleSignup} className="signup-form">
                <input name="name" type="text" placeholder="User name" onChange={hanldeChangeSignup}  />
                <input name="email" type="email" placeholder="Email" onChange={hanldeChangeSignup} />
                <input name="password" type="password" placeholder="Password" onChange={hanldeChangeSignup} />
                <select name="role" placeholder="select role" onChange={hanldeChangeSignup}>
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
              <form className="login-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <select placeholder="select role">
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
